"use client";

import { useEffect, useState } from "react";

const DEFAULT_COINS = [
  "bitcoin",
  "ethereum",
  "solana",
  "bnb",
  "ripple",
];

export default function Watchlist() {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const ids = DEFAULT_COINS.join(",");

        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&price_change_percentage=24h`
        );

        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">
      <h2 className="text-xl font-semibold mb-5">
        Watchlist
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="space-y-4">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-10 h-10 rounded-full"
                />

                <div>
                  <p className="font-medium">
                    {coin.name}
                  </p>

                  <p className="text-sm text-gray-400 uppercase">
                    {coin.symbol}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p>
                  $
                  {coin.current_price.toLocaleString()}
                </p>

                <p
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
