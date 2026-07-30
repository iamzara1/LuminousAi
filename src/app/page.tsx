import { getMarketData } from "@/services/market";
import TradingViewChart from "@/components/TradingViewChart";
import MarketCard from "@/components/MarketCard";
import Link from "next/link";

export default async function Home() {
  const coins = await getMarketData();

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#09090f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <h1 className="text-xl font-bold">
            <span className="text-purple-400">Luminous</span>AI
          </h1>

          <div className="flex gap-3">
            <Link
              href="/markets"
              className="rounded-lg border border-purple-500/30 px-4 py-2 text-sm hover:bg-purple-500/10"
            >
              Markets
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-500"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-14">

        <div className="max-w-2xl">

          <p className="mb-3 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
            AI Crypto Intelligence
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Analyse the crypto market with AI.
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Real-time prices, AI insights, portfolio tracking,
            TradingView charts and market intelligence in one place.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/dashboard"
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
            >
              Launch Dashboard
            </Link>

            <Link
              href="/markets"
              className="rounded-xl border border-purple-500/30 px-6 py-3 hover:bg-purple-500/10"
            >
              Explore Markets
            </Link>

          </div>

        </div>

      </section>

      {/* Live Markets */}
      <section className="mx-auto mt-16 max-w-7xl px-5">

        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold">
            Live Market
          </h3>

          <Link
            href="/markets"
            className="text-purple-400"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {coins.slice(0,4).map((coin:any)=>(
            <MarketCard
              key={coin.id}
              coin={coin}
            />
          ))}
        </div>

      </section>

      {/* TradingView */}
      <section className="mx-auto mt-16 max-w-7xl px-5">

        <h3 className="mb-6 text-2xl font-bold">
          Bitcoin Live Chart
        </h3>

        <TradingViewChart/>

      </section>

      {/* AI Section */}
      <section className="mx-auto mt-16 mb-20 max-w-7xl px-5">

        <div className="rounded-3xl border border-purple-500/20 bg-[#12121d] p-8">

          <h3 className="text-2xl font-bold">
            AI Market Intelligence
          </h3>

          <p className="mt-4 text-gray-400">
            Soon you'll be able to ask LuminousAI:
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Why is Bitcoin pumping today?</li>
            <li>• Which coins are trending?</li>
            <li>• Find hidden gems under £100M market cap.</li>
            <li>• Analyse whale wallets.</li>
            <li>• Summarise today's crypto news.</li>
          </ul>

        </div>

      </section>

    </main>
  );
}
