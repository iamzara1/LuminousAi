import {
  ArrowUpRight,
  Brain,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function ProductPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <div className="grid gap-6 lg:grid-cols-3">

        {/* AI Workspace */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-violet-400">
                AI Workspace
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Research Before You Trade
              </h2>
            </div>

            <Brain className="text-violet-400" />
          </div>

          <div className="mt-6 rounded-2xl bg-[#0F0F16] p-5 border border-white/5">

            <p className="text-gray-400 text-sm">
              Ask LuminousAI
            </p>

            <div className="mt-4 rounded-xl bg-[#07070A] border border-violet-500/20 p-4">
              <p className="text-white">
                Analyze Ethereum for the next 30 days.
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-violet-500/10 border border-violet-500/20 p-4">
              <p className="text-violet-200 text-sm">
                AI detected rising accumulation from large wallets,
                improving sentiment and increasing Layer-2 activity.
              </p>
            </div>

          </div>

        </div>

        {/* Side Cards */}
        <div className="space-y-6">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <TrendingUp className="text-violet-400" />

            <h3 className="mt-4 font-semibold">
              Market Trend
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              AI detects bullish momentum across major assets.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <Wallet className="text-violet-400" />

            <h3 className="mt-4 font-semibold">
              Portfolio
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Track assets, performance and AI insights in one place.
            </p>

            <div className="mt-4 flex items-center text-violet-400">
              Open Dashboard
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
