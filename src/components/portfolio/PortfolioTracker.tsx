"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioTracker() {
  const { address } = useWallet();

  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  async function refreshPortfolio() {
    try {
      setRefreshing(true);

      // Portfolio services will be called here
      setLastUpdated(new Date());

    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    if (!address) return;

    refreshPortfolio();
  }, [address]);

  return (
    <div className="space-y-6">

      <PortfolioCard />

      <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-white">
              Portfolio Manager
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Connected wallet:
            </p>

            <p className="break-all text-sm text-purple-400">
              {address || "No wallet connected"}
            </p>

          </div>

          <button
            onClick={refreshPortfolio}
            disabled={refreshing}
            className="rounded-xl bg-purple-600 px-4 py-2 text-white"
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>

        </div>

        {lastUpdated && (
          <p className="mt-4 text-xs text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}

      </div>

    </div>
  );
}
