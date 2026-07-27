"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTrendingCoins } from "@/services/coingecko";

type Coin = {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    market_cap_rank: number;
  };
};

export default function TrendingTokens() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getTrendingCoins();

      if (data?.coins) {
        setCoins(data.coins);
      }
    }

    load();
  }, []);

  return (
    <section className="rounded-2xl border border-white/10 bg-[#111118] p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          🔥 Trending Tokens
        </h2>

        <span className="text-sm text-gray-400">
          Live
        </span>
      </div>

      <div className="space-y-3">
        {coins.map(({ item }) => (
          <Link
            key={item.id}
            href={`/token/${item.id}`}
            className="flex items-center justify-between rounded-xl p-3 transition hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.thumb}
                alt={item.name}
                className="h-10 w-10 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm uppercase text-gray-400">
                  {item.symbol}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400">
                Rank
              </p>

              <p className="font-medium text-violet-400">
                #{item.market_cap_rank}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
