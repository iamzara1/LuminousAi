"use client";

import { useEffect, useState } from "react";
import { Flame, Droplets, BarChart3, ExternalLink } from "lucide-react";
import { searchDexTokens } from "@/services/dexscreener";

type Pair = {
  chainId: string;
  url: string;
  baseToken: {
    name: string;
    symbol: string;
  };
  priceUsd: string;
  liquidity?: {
    usd: number;
  };
  volume?: {
    h24: number;
  };
};

export default function TrendingTokens() {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTokens() {
      try {
        const searches = [
          "solana",
          "ethereum",
          "bnb",
          "bitcoin",
        ];

        const responses = await Promise.all(
          searches.map((query) =>
            searchDexTokens(query)
          )
        );

        const allPairs = responses.flatMap(
          (response) => response.pairs || []
        );

        const filtered = allPairs
          .filter(
            (pair) =>
              (pair.liquidity?.usd || 0) > 10000
          )
          .sort(
            (a, b) =>
              (b.volume?.h24 || 0) -
              (a.volume?.h24 || 0)
          )
          .slice(0, 12);

        setPairs(filtered);

      } catch (error) {
        console.error(
          "DexScreener error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadTokens();
  }, []);

  if (loading) {
    return (
      <div className="mt-8 rounded-2xl border border-violet-500/20 bg-[#111119] p-6 text-gray-400">
        Loading trending tokens...
      </div>
    );
  }

  return (
    <section className="mt-10">

      <div className="mb-5 flex items-center gap-2">
        <Flame className="text-orange-400" />
        <h2 className="text-2xl font-bold text-white">
          Trending DEX Tokens
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {pairs.map((pair, index) => (
          <div
            key={index}
            className="rounded-2xl border border-violet-500/20 bg-[#111119] p-5"
          >
            <div className="flex justify-between">

              <div>
                <h3 className="font-semibold text-white">
                  {pair.baseToken.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {pair.baseToken.symbol} • {pair.chainId}
                </p>
              </div>

              {pair.url && (
                <a
                  href={pair.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <ExternalLink size={18} />
                </a>
              )}

            </div>

            <p className="mt-4 text-xl font-bold text-white">
              ${Number(pair.priceUsd).toFixed(6)}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-white/5 p-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Droplets size={15} />
                  Liquidity
                </div>

                <p className="mt-1 text-white">
                  ${(pair.liquidity?.usd || 0).toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <BarChart3 size={15} />
                  Volume 24h
                </div>

                <p className="mt-1 text-white">
                  ${(pair.volume?.h24 || 0).toLocaleString()}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
