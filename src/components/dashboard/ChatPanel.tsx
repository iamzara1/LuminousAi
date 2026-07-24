"use client";

import { ArrowUpRight, Bot, Sparkles } from "lucide-react";

export default function ChatPanel() {
  return (
    <section className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#10111A] to-[#0B0C12]">

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500">
            <Bot size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Luminous AI
            </h2>
            <p className="text-sm text-gray-400">
              Crypto Intelligence Assistant
            </p>
          </div>
        </div>

        <Sparkles size={18} className="text-purple-400" />
      </div>

      <div className="flex-1 space-y-5 p-6">

        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-sm text-gray-300">
            👋 Welcome to LuminousAI.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Ask about crypto markets, tokens, wallets, and trends.
          </p>
        </div>

        <div className="ml-auto max-w-md rounded-2xl bg-purple-600 p-4">
          <p className="text-sm">
            Analyze Bitcoin today.
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 p-5">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

          <input
            placeholder="Ask anything about crypto..."
            className="flex-1 bg-transparent outline-none"
          />

          <button className="rounded-xl bg-purple-600 p-3">
            <ArrowUpRight size={18} />
          </button>

        </div>
      </div>

    </section>
  );
}
