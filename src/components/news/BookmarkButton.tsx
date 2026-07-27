"use client";

import { useEffect, useState } from "react";

export default function BookmarkButton({ article }: { article: any }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setSaved(items.some((x: any) => x.id === article.id));
  }, [article.id]);

  function toggleBookmark() {
    const items = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (saved) {
      const updated = items.filter((x: any) => x.id !== article.id);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setSaved(false);
    } else {
      items.push(article);
      localStorage.setItem("bookmarks", JSON.stringify(items));
      setSaved(true);
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      className="rounded-lg border border-purple-500 px-4 py-2"
    >
      {saved ? "★ Saved" : "☆ Save"}
    </button>
  );
}
