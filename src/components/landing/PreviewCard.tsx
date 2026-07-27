export default function PreviewCard() {
  return (
    <section className="mx-auto mb-24 max-w-6xl px-6">

      <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-6 backdrop-blur">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              AI Market Intelligence
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Live crypto insights powered by AI
            </p>

          </div>

          <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
            ● Live
          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-gray-400">BTC</p>
            <h3 className="mt-2 text-2xl font-bold">$118,420</h3>
            <span className="text-emerald-400 text-sm">
              +2.41%
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-gray-400">ETH</p>
            <h3 className="mt-2 text-2xl font-bold">$4,310</h3>
            <span className="text-emerald-400 text-sm">
              +1.82%
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-gray-400">
              AI Confidence
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              91%
            </h3>

            <span className="text-violet-400 text-sm">
              Bullish
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-gray-400">
              Smart Money
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Active
            </h3>

            <span className="text-emerald-400 text-sm">
              +37 Wallets
            </span>
          </div>

        </div>

        <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

          <p className="text-sm text-violet-300">
            AI Insight
          </p>

          <p className="mt-2 text-gray-200">
            Momentum remains strong across Layer-1 assets while AI detects increasing whale accumulation on Ethereum and Solana.
          </p>

        </div>

      </div>

    </section>
  );
}
