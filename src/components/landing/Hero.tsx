import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">

      <div className="mx-auto max-w-3xl text-center">

        <div className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          AI Intelligence for Crypto
        </div>

        <h1 className="mt-8 font-[var(--font-space)] text-5xl font-bold leading-tight md:text-7xl">
          Understand Crypto
          <br />
          <span className="text-violet-500">
            Before Everyone Else
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          LuminousAI helps traders, investors and builders
          analyze markets, research tokens, monitor wallets
          and discover opportunities using AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/signup"
            className="rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-500"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-gray-300 transition hover:border-violet-500 hover:text-white"
          >
            Sign In
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}
