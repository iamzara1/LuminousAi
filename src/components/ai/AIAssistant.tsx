"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");

  return (
    <Card className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Ask LuminousAI
      </h2>

      <p className="mt-2 text-slate-400">
        AI-powered crypto research assistant.
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about crypto..."
        className="mt-6 h-36 w-full rounded-xl border border-[#23293A] bg-[#111827] p-4 text-white outline-none"
      />

      <Button className="mt-4 w-full">
        Analyze
      </Button>

    </Card>
  );
}
