import StatCard from "@/components/ui/StatCard";

interface MarketOverviewProps {
  btc: string;
  eth: string;
  bnb: string;
  sol: string;
  marketCap: string;
  volume24h: string;
  btcDominance: string;
  fearGreed: string;
}

export default function MarketOverview({
  btc,
  eth,
  bnb,
  sol,
  marketCap,
  volume24h,
  btcDominance,
  fearGreed,
}: MarketOverviewProps) {
  return (
    <section className="space-y-5">

      <div>
        <h2 className="text-2xl font-bold text-white">
          Global Market
        </h2>

        <p className="text-slate-400">
          Live cryptocurrency market overview
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard title="Bitcoin" value={btc} />

        <StatCard title="Ethereum" value={eth} />

        <StatCard title="BNB" value={bnb} />

        <StatCard title="Solana" value={sol} />

        <StatCard title="Market Cap" value={marketCap} />

        <StatCard title="24H Volume" value={volume24h} />

        <StatCard title="BTC Dominance" value={btcDominance} />

        <StatCard title="Fear & Greed" value={fearGreed} />

      </div>

    </section>
  );
}
