"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  const filteredNews = news.filter((item: any) => {
    const title = item.title?.toLowerCase() || "";
    const description = item.description?.toLowerCase() || "";

    return (
      title.includes(search.toLowerCase()) ||
      description.includes(search.toLowerCase())
    );
  });

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#080812] text-white">
        Loading news...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080812] p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        📰 LuminousAI News
      </h1>

      <input
        type="text"
        placeholder="Search Bitcoin, Ethereum, Solana..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-full rounded-xl border border-purple-500/30 bg-[#11111c] p-4 outline-none"
      />

      <div className="space-y-6">
        {filteredNews.map((item: any) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-purple-500/20 bg-[#11111c]"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
            )}

            <div className="p-5">
              <p className="text-sm text-purple-400">
                {item.source}
              </p>

              <h2 className="mt-2 text-xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>

              <div className="mt-5">
                <Link
                  href={`/news/${item.id}`}
                  className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
