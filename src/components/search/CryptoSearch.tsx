"use client";

import { useState } from "react";
import { searchCoins } from "@/services/search";

type CoinResult = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
};

export default function CryptoSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CoinResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function search(value: string) {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    const data = await searchCoins(value);

    setResults(data);

    setLoading(false);
  }

  return (
    <div className="relative w-full">
      <input
        value={query}
        onChange={(e) => search(e.target.value)}
        placeholder="Search Bitcoin, Ethereum..."
        className="w-full rounded-xl border border-purple-500/30 bg-black/50 px-4 py-3 text-white outline-none"
      />

      {loading && (
        <p className="mt-2 text-sm text-gray-400">
          Searching...
        </p>
      )}

      {results.length > 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border border-purple-500/20 bg-black p-3">
          {results.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/10"
            >
              <img
                src={coin.thumb}
                alt={coin.name}
                className="h-8 w-8 rounded-full"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {coin.name}
                </p>

                <p className="text-xs uppercase text-gray-400">
                  {coin.symbol}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
