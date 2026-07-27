"use client";

import { useEffect, useState } from "react";
import { getMarketPrices } from "@/services/coingecko";

export default function MarketCards() {
  const [market, setMarket] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getMarketPrices();
      setMarket(data);
    }

    load();
  }, []);

  const coins = [
    { id: "bitcoin", symbol: "BTC" },
    { id: "ethereum", symbol: "ETH" },
    { id: "solana", symbol: "SOL" },
    { id: "okb", symbol: "OKB" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {coins.map((coin) => {
        const data = market?.[coin.id];

        return (
          <div
            key={coin.id}
            className="rounded-2xl border border-white/10 bg-[#0D0D14] p-4"
          >
            <p className="text-xs text-gray-400">
              {coin.symbol}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              ${data?.usd?.toLocaleString() ?? "--"}
            </h3>

            <p
              className={`mt-2 text-sm ${
                (data?.usd_24h_change ?? 0) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {data?.usd_24h_change?.toFixed(2) ?? "--"}%
            </p>
          </div>
        );
      })}
    </div>
  );
}
