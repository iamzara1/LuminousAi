"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { searchCoins } from "@/services/search";
import { searchDex } from "@/services/dexscreener";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [coins, setCoins] = useState<any[]>([]);
  const [pairs, setPairs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(value: string) {
    setQuery(value);

    if (!value.trim()) {
      setCoins([]);
      setPairs([]);
      return;
    }

    setLoading(true);

    try {
      const [coinData, dexData] = await Promise.all([
        searchCoins(value),
        searchDex(value),
      ]);

      setCoins(coinData || []);
      setPairs(dexData?.pairs || []);

    } catch (error) {
      console.error("Search error:", error);
      setCoins([]);
      setPairs([]);
    }

    setLoading(false);
  }

  return (
    <div className="relative w-full">

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-3.5 text-gray-500"
        />

        <input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search coin or paste contract address..."
          className="w-full rounded-xl border border-purple-500/20 bg-black/40 py-3 pl-12 pr-4 text-white outline-none"
        />
      </div>


      {loading && (
        <p className="mt-2 text-sm text-gray-400">
          Searching...
        </p>
      )}


      {(coins.length > 0 || pairs.length > 0) && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-purple-500/20 bg-[#09090F] p-3">

          {coins.map((coin) => (
            <Link
              key={coin.id}
              href={`/token/${coin.id}`}
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10"
            >

              <img
                src={coin.thumb}
                alt={coin.name}
                className="h-8 w-8 rounded-full"
              />

              <div>
                <p className="text-white">
                  {coin.name}
                </p>

                <p className="text-xs text-gray-400">
                  {coin.symbol} • CoinGecko
                </p>
              </div>

            </Link>
          ))}


          {pairs.map((pair, index) => (
            <Link
              key={index}
              href={`/token/${pair.baseToken.address}`}
              className="block rounded-lg p-3 hover:bg-white/10"
            >

              <p className="text-white">
                {pair.baseToken.name}
              </p>

              <p className="text-xs text-gray-400">
                {pair.baseToken.symbol} • {pair.chainId}
              </p>

              <p className="mt-1 text-xs text-purple-400">
                Liquidity: $
                {(pair.liquidity?.usd || 0).toLocaleString()}
              </p>

            </Link>
          ))}

        </div>
      )}

    </div>
  );
}
