"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";

type Props = {
  articleId: string | number;
};

export default function BookmarkButton({ articleId }: Props) {
  const [saved, setSaved] = useState(false);

  function toggleBookmark() {
    setSaved(!saved);

    const key = "luminous-bookmarks";

    const existing = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    if (!saved) {
      localStorage.setItem(
        key,
        JSON.stringify([...existing, articleId])
      );
    } else {
      localStorage.setItem(
        key,
        JSON.stringify(
          existing.filter((id: string | number) => id !== articleId)
        )
      );
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`rounded-lg p-2 transition ${
        saved
          ? "bg-violet-600 text-white"
          : "bg-[#1A1A24] text-gray-400 hover:text-white"
      }`}
    >
      <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}
