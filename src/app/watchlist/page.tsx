"use client";

import { useState } from "react";

export default function WatchlistPage() {
  const [watchlist] = useState([
    { symbol: "BTC", name: "Bitcoin" },
    { symbol: "ETH", name: "Ethereum" },
    { symbol: "BNB", name: "BNB Chain" },
  ]);

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto max-w-6xl p-6">

        <h1 className="text-3xl font-bold">
          Watchlist
        </h1>

        <p className="mt-2 text-gray-400">
          Track your favourite cryptocurrencies.
        </p>

        <div className="mt-8 space-y-4">

          {watchlist.map((coin) => (
            <div
              key={coin.symbol}
              className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-5"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-semibold">
                    {coin.symbol}
                  </h2>

                  <p className="text-gray-400">
                    {coin.name}
                  </p>
                </div>

                <button className="rounded-lg bg-purple-600 px-4 py-2">
                  View
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
