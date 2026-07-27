import { TrendingUp, Activity, Bitcoin, Coins } from "lucide-react";

type MarketStatsProps = {
  marketCap: string;
  volume24h: string;
  btcDominance: string;
  activeCoins: string;
};

export default function MarketStats({
  marketCap,
  volume24h,
  btcDominance,
  activeCoins,
}: MarketStatsProps) {
  const stats = [
    {
      title: "Market Cap",
      value: marketCap,
      icon: TrendingUp,
    },
    {
      title: "24H Volume",
      value: volume24h,
      icon: Activity,
    },
    {
      title: "BTC Dominance",
      value: btcDominance,
      icon: Bitcoin,
    },
    {
      title: "Active Coins",
      value: activeCoins,
      icon: Coins,
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-purple-500/20 bg-[#10101A] p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <Icon className="text-purple-400" size={24} />
            </div>

            <p className="text-sm text-gray-400">
              {stat.title}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {stat.value}
            </h3>
          </div>
        );
      })}
    </section>
  );
}
