"use client";

import { useState } from "react";
import { searchCoins, CoinSearchResult } from "@/services/search";

interface AIAnalysis {
  score: number;
  risk: string;
  sentiment: string;
  summary: string;
}

export default function TokenAnalyzer() {
  const [query, setQuery] = useState("");
  const [coin, setCoin] = useState<CoinSearchResult | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setCoin(null);
    setAnalysis(null);

    try {
      const results = await searchCoins(query);

      if (!results.length) {
        setLoading(false);
        return;
      }

      const selected = results[0];
      setCoin(selected);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coin: selected,
        }),
      });

      const ai = await res.json();
      setAnalysis(ai);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="rounded-2xl bg-[#11111c] border border-purple-500/20 p-6">

      <h2 className="text-2xl font-bold">
        AI Token Analyzer
      </h2>

      <div className="flex gap-3 mt-6">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="BTC, ETH, SOL..."
          className="flex-1 rounded-xl bg-[#1a1a2e] p-3 border border-purple-500/20 outline-none"
        />

        <button
          onClick={handleSearch}
          className="rounded-xl bg-purple-600 px-6"
        >
          Analyze
        </button>

      </div>

      {loading && (
        <p className="mt-6 text-gray-400">
          Analysing...
        </p>
      )}

      {coin && analysis && (

        <div className="mt-8 space-y-4">

          <div className="rounded-xl bg-[#1a1a2e] p-5">

            <div className="flex items-center gap-4">

              <img
                src={coin.image}
                alt={coin.name}
                className="h-12 w-12 rounded-full"
              />

              <div>

                <h3 className="text-xl font-bold">
                  {coin.name}
                </h3>

                <p className="uppercase text-gray-400">
                  {coin.symbol}
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div>
                <p className="text-gray-400">Price</p>
                <p>${coin.current_price.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-gray-400">Market Cap</p>
                <p>${coin.market_cap.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-gray-400">24h Volume</p>
                <p>${coin.total_volume.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-gray-400">Rank</p>
                <p>#{coin.market_cap_rank}</p>
              </div>

            </div>

          </div>

          <div className="rounded-xl bg-[#1a1a2e] p-5">

            <h3 className="font-bold text-lg">
              Luminous AI Analysis
            </h3>

            <div className="mt-5 space-y-3">

              <div className="flex justify-between">
                <span>AI Score</span>
                <span className="text-green-400">
                  {analysis.score}/100
                </span>
              </div>

              <div className="flex justify-between">
                <span>Risk</span>
                <span>{analysis.risk}</span>
              </div>

              <div className="flex justify-between">
                <span>Sentiment</span>
                <span>{analysis.sentiment}</span>
              </div>

            </div>

            <p className="mt-6 text-gray-300 leading-7">
              {analysis.summary}
            </p>

          </div>

        </div>

      )}

    </div>
  );
}
