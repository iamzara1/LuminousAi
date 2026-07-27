"use client";

import { useState } from "react";

export default function NewsChat({
  article,
}: {
  article: string;
}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    setLoading(true);

    const res = await fetch("/api/news/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        article,
      }),
    });

    const data = await res.json();

    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <div className="mt-8 rounded-2xl border border-purple-500/30 bg-[#11111c] p-6">

      <h2 className="text-xl font-bold">
        💬 Ask LuminousAI
      </h2>

      <input
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        placeholder="Ask about this news..."
        className="mt-4 w-full rounded-xl bg-black p-3"
      />

      <button
        onClick={askAI}
        className="mt-4 rounded-xl bg-purple-600 px-5 py-2"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <p className="mt-5 text-gray-300">
          {answer}
        </p>
      )}

    </div>
  );
}
