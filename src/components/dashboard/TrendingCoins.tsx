"use client";

import { useEffect, useState } from "react";

export default function TrendingCoins() {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        const data = await res.json();

        setCoins(data.coins || []);
      } catch (e) {
        console.error(e);
      }
    }

    load();
  }, []);

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-5">
      <h2 className="mb-4 text-xl font-bold text-white">
        🔥 Trending Coins
      </h2>

      <div className="space-y-4">
        {coins.map((coin: any) => (
          <div
            key={coin.item.id}
            className="flex items-center gap-3"
          >
            <img
              src={coin.item.small}
              alt={coin.item.name}
              className="h-10 w-10 rounded-full"
            />

            <div>
              <p className="font-semibold">
                {coin.item.name}
              </p>

              <p className="text-sm text-gray-400">
                {coin.item.symbol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
