"use client";

import { useEffect, useState } from "react";
import { DollarSign, Activity, PieChart, TrendingUp } from "lucide-react";
import { getGlobalMarket } from "@/services/marketService";

export default function MarketOverview() {
  const [market, setMarket] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getGlobalMarket();

      if (data?.data) {
        setMarket(data.data);
      }
    }

    load();
  }, []);

  const cards = [
    {
      title: "Market Cap",
      value: market
        ? `$${Math.round(
            market.total_market_cap.usd / 1_000_000_000_000
          )}T`
        : "--",
      icon: DollarSign,
    },
    {
      title: "24H Volume",
      value: market
        ? `$${Math.round(
            market.total_volume.usd / 1_000_000_000
          )}B`
        : "--",
      icon: Activity,
    },
    {
      title: "BTC Dominance",
      value: market
        ? `${market.market_cap_percentage.btc.toFixed(1)}%`
        : "--",
      icon: PieChart,
    },
    {
      title: "Active Coins",
      value: market
        ? market.active_cryptocurrencies.toLocaleString()
        : "--",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-[#0D0D14] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {card.title}
              </span>

              <Icon size={18} className="text-violet-400" />
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              {card.value}
            </h2>
          </div>
        );
      })}
    </section>
  );
}
