import {
  Brain,
  Wallet,
  Bell,
  TrendingUp,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-14 text-center">

        <p className="text-violet-400 font-semibold">
          PLATFORM
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Built for modern crypto intelligence
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Everything you need to research markets,
          monitor portfolios and discover opportunities.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <Brain className="text-violet-400" size={34} />

          <h3 className="mt-6 text-2xl font-bold">
            AI Research Workspace
          </h3>

          <p className="mt-4 text-gray-400 leading-7">
            Ask questions about any token, compare ecosystems,
            understand narratives and receive AI-powered research
            in seconds.
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <Wallet className="text-violet-400" size={32} />

          <h3 className="mt-5 font-semibold">
            Portfolio Intelligence
          </h3>

          <p className="mt-3 text-gray-400">
            Track assets with AI-driven insights.
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <TrendingUp className="text-violet-400" size={32} />

          <h3 className="mt-5 font-semibold">
            Live Markets
          </h3>

          <p className="mt-3 text-gray-400">
            Follow market movements in real time.
          </p>

        </div>

        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <Bell className="text-violet-400" size={32} />

          <h3 className="mt-5 text-2xl font-bold">
            Smart Alerts
          </h3>

          <p className="mt-4 text-gray-400 leading-7">
            Receive notifications for whale activity,
            price movements and AI-detected opportunities.
          </p>

        </div>

      </div>

    </section>
  );
}
