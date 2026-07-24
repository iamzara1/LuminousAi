"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";

import { getMarketOverview } from "@/services/marketService";

type Coin = {
  symbol: string;
  price: number;
  change: number;
};

export default function MarketsPanel() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMarket() {
      try {
        const data = await getMarketOverview();

        setCoins(data.prices);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadMarket();
  }, []);

  return (
    <section className="rounded-3xl border border-white/10 bg-[#10111A] p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Live Markets
          </h2>

          <p className="text-sm text-gray-400">
            Real-time crypto prices
          </p>
        </div>

        <TrendingUp className="text-purple-400" />
      </div>


      {loading ? (
        <p className="text-gray-400">
          Loading markets...
        </p>
      ) : (

        <div className="space-y-4">

          {coins.map((coin) => (

            <div
              key={coin.symbol}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
            >

              <div>
                <p className="font-semibold text-white">
                  {coin.symbol}
                </p>

                <p className="text-sm text-gray-400">
                  USD
                </p>
              </div>


              <div className="text-right">

                <p className="text-white">
                  ${coin.price.toLocaleString()}
                </p>

                <div
                  className={`flex items-center justify-end text-sm ${
                    coin.change >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >

                  {coin.change >= 0 ? (
                    <ArrowUpRight size={15} />
                  ) : (
                    <ArrowDownRight size={15} />
                  )}

                  {coin.change.toFixed(2)}%

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}
