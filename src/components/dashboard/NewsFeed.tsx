"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { getCryptoNews, NewsArticle } from "@/services/news";

export default function NewsFeed() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      const articles = await getCryptoNews();
      setNews(articles.slice(0, 10));
      setLoading(false);
    }

    loadNews();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#111118] p-6">
        <h2 className="text-xl font-semibold text-white">
          Latest Crypto News
        </h2>

        <p className="mt-4 text-gray-400">
          Loading news...
        </p>
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-[#111118] p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        📰 Latest Crypto News
      </h2>

      <div className="space-y-4">
        {news.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-white/10 bg-[#171721] p-4 transition hover:border-violet-500"
          >
            <img
              src={article.imageurl}
              alt={article.title}
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />

            <h3 className="font-semibold text-white">
              {article.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm text-gray-400">
              {article.body}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-violet-400">
                {article.source}
              </span>

              <ExternalLink
                size={18}
                className="text-white"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
