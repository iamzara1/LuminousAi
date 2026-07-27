"use client";

import { Bot, ArrowRight } from "lucide-react";

const suggestions = [
  "Analyse Bitcoin",
  "Top gainers today",
  "Market sentiment",
  "Best AI tokens",
];

export default function AIChat() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#111118] p-6">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600">
          <Bot className="text-white" size={22} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            LuminousAI
          </h2>

          <p className="text-sm text-gray-400">
            Your crypto intelligence assistant
          </p>
        </div>

      </div>

      <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-4">
        <p className="text-sm leading-6 text-gray-300">
          👋 Welcome! Ask me about the crypto market, analyse any token,
          discover trends, or get AI-powered insights.
        </p>
      </div>

      <div className="mt-6 space-y-2">

        {suggestions.map((item) => (
          <button
            key={item}
            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#171721] px-4 py-3 text-left transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            <span className="text-sm text-white">
              {item}
            </span>

            <ArrowRight
              size={16}
              className="text-violet-400"
            />
          </button>
        ))}

      </div>

      <button className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-medium text-white transition hover:bg-violet-700">
        Open AI Assistant
      </button>

    </section>
  );
}
