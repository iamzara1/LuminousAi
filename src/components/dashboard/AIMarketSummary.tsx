"use client";

import { useEffect, useState } from "react";

export default function AIMarketSummary() {
  const [summary, setSummary] = useState("Loading AI analysis...");

  useEffect(() => {
    async function loadSummary() {
      try {
        const res = await fetch("/api/news");
        const news = await res.json();

        if (!news.length) {
          setSummary("No market news available.");
          return;
        }

        const titles = news
          .slice(0, 5)
          .map((n: any) => n.title)
          .join(". ");

        setSummary(
          `LuminousAI Analysis: Today's crypto market is being driven by ${titles}. Monitor Bitcoin, Ethereum and major altcoins for increased volatility.`
        );
      } catch {
        setSummary("Unable to generate AI market summary.");
      }
    }

    loadSummary();
  }, []);

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">
      <h2 className="mb-4 text-xl font-bold">
        🤖 LuminousAI Market Summary
      </h2>

      <p className="leading-7 text-gray-300">
        {summary}
      </p>
    </div>
  );
}
