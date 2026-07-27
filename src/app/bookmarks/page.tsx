"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    setBookmarks(saved);
  }, []);

  return (
    <main className="min-h-screen bg-[#080812] p-6 text-white">
      <h1 className="mb-8 text-3xl font-bold">
        ⭐ Saved Articles
      </h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-400">
          No saved articles yet.
        </p>
      ) : (
        <div className="space-y-6">
          {bookmarks.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-5"
            >
              <p className="text-sm text-purple-400">
                {item.source}
              </p>

              <h2 className="mt-2 text-xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>

              <Link
                href={`/news/${item.id}`}
                className="mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2"
              >
                Open
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
