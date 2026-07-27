import { getMarketData } from "@/services/market";
import MarketCard from "@/components/MarketCard";
import TradingViewChart from "@/components/TradingViewChart";

export default async function Home() {
  const coins = await getMarketData();

  return (
    <main className="min-h-screen bg-black p-4">
      <h1 className="text-2xl font-bold text-white">
        LuminousAi
      </h1>

      <p className="mt-1 text-sm text-gray-400">
        Crypto intelligence dashboard
      </p>

      <section className="mt-6">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Bitcoin Chart
        </h2>

        <TradingViewChart />
      </section>

      <section className="mt-6">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Market Overview
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {coins.map((coin: any) => (
            <MarketCard
              key={coin.id}
              coin={coin}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
