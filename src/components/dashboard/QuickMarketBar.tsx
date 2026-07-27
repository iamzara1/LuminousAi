"use client";

import Link from "next/link";

const coins = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "solana", symbol: "SOL" },
  { id: "bnb", symbol: "BNB" },
  { id: "ripple", symbol: "XRP" },
  { id: "sui", symbol: "SUI" },
];

export default function QuickMarketBar() {
  return (
    <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
      {coins.map((coin) => (
        <Link
          key={coin.id}
          href={`/token/${coin.id}`}
          className="whitespace-nowrap rounded-full border border-white/10 bg-[#14141D] px-4 py-2 text-sm font-medium text-white transition hover:border-violet-500 hover:bg-violet-600"
        >
          {coin.symbol}
        </Link>
      ))}
    </div>
  );
}
