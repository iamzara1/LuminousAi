"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import {
  detectChain,
  getPortfolioValue,
  Chain,
} from "@/services/portfolio";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string>;
    };
  }
}

export default function PortfolioCard() {
  const { address } = useWallet();

  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState<{
    chain: Chain;
    balance: number;
    price: number;
    value: number;
  } | null>(null);

  useEffect(() => {
    async function loadPortfolio() {
      if (!address || !window.ethereum) return;

      try {
        setLoading(true);

        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });

        const chain = detectChain(chainId);

        const result = await getPortfolioValue(
          address,
          chain
        );

        setPortfolio(result);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, [address]);

  if (!address) {
    return (
      <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">
        <p className="text-gray-400">
          Connect your wallet to view your portfolio.
        </p>
      </div>
    );
  }

  if (loading || !portfolio) {
    return (
      <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">
        <p className="text-gray-400">
          Loading portfolio...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">

      <h2 className="text-2xl font-bold text-white">
        Portfolio
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl bg-[#1a1a2e] p-4">
          <p className="text-gray-400 text-sm">
            Network
          </p>

          <p className="mt-2 text-xl font-bold text-purple-400">
            {portfolio.chain.toUpperCase()}
          </p>
        </div>

        <div className="rounded-xl bg-[#1a1a2e] p-4">
          <p className="text-gray-400 text-sm">
            Native Balance
          </p>

          <p className="mt-2 text-xl font-bold text-white">
            {portfolio.balance.toFixed(4)}
          </p>
        </div>

        <div className="rounded-xl bg-[#1a1a2e] p-4">
          <p className="text-gray-400 text-sm">
            Portfolio Value
          </p>

          <p className="mt-2 text-xl font-bold text-green-400">
            ${portfolio.value.toFixed(2)}
          </p>
        </div>

      </div>

    </div>
  );
}
