"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Star,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import TrendingTokens from "@/components/markets/TrendingTokens";
import MarketLoader from "@/components/markets/MarketLoader";

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
};

export default function MarketsPage() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Connecting to market servers...");

  useEffect(() => {
    const messages = [
      "Connecting to market servers...",
      "Fetching live prices...",
      "Scanning market trends...",
      "Analysing liquidity...",
      "Preparing dashboard..."
    ];

    let i = 0;

    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + 20, 100));

      if (i < messages.length) {
        setStatus(messages[i]);
        i++;
      }
    }, 400);

    async function load() {
      try {
        const res = await fetch("/api/markets");

        const data = await res.json();

        setCoins(data);
      } catch (err) {
        console.error(err);
      }

      const saved = localStorage.getItem("watchlist");

      if (saved) {
        setWatchlist(JSON.parse(saved));
      }

      setTimeout(() => {
        setLoading(false);
      }, 2200);
    }

    load();

    return () => clearInterval(timer);
  }, []);  function toggleWatchlist(id: string) {
    const updated = watchlist.includes(id)
      ? watchlist.filter((coin) => coin !== id)
      : [...watchlist, id];

    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  }

  const filtered = useMemo(() => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }, [coins, search]);

  if (loading) {
    return (
      <MarketLoader
        progress={progress}
        status={status}
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#09090F] p-6 text-white">
      <h1 className="text-4xl font-bold">
        Crypto Markets
      </h1>

      <p className="mt-2 text-gray-400">
        Live crypto prices powered by LuminousAI.
      </p>

      <TrendingTokens />

      <div className="relative mt-10">
        <Search
          className="absolute left-4 top-3.5 text-gray-500"
          size={20}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Bitcoin, Ethereum..."
          className="w-full rounded-2xl border border-violet-500/20 bg-[#111119] py-3 pl-12 text-white outline-none"
        />
      </div>

      <div className="mt-8 space-y-4">
        {filtered.map((coin) => {
          const change = coin.price_change_percentage_24h ?? 0;

          return (
            <div
              key={coin.id}
              className="flex items-center justify-between rounded-2xl border border-violet-500/20 bg-[#111119] p-4"
            >
              <Link
                href={`/token/${coin.id}`}
                className="flex items-center gap-4"
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="h-12 w-12 rounded-full"
                />

                <div>
                  <h2 className="font-semibold">
                    {coin.name}
                  </h2>

                  <p className="text-sm uppercase text-gray-400">
                    {coin.symbol}
                  </p>
                </div>
              </Link>

              <div className="text-right">
                <p className="font-semibold">
                  ${coin.current_price.toLocaleString()}
                </p>

                <div
                  className={`flex items-center justify-end gap-1 text-sm ${
                    change >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {change >= 0 ? (
                    <TrendingUp size={15} />
                  ) : (
                    <TrendingDown size={15} />
                  )}

                  {change.toFixed(2)}%
                </div>
              </div>

              <button
                onClick={() => toggleWatchlist(coin.id)}
                className="rounded-xl p-3 hover:bg-white/10"
              >
                <Star
                  size={22}
                  className={
                    watchlist.includes(coin.id)
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }
                  fill={
                    watchlist.includes(coin.id)
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
