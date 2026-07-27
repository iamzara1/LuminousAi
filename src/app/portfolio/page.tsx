"use client";

import WalletConnectButton from "@/components/wallet/WalletConnectButton";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { useWallet } from "@/context/WalletContext";

export default function PortfolioPage() {
  const { address } = useWallet();

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto max-w-6xl p-6">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Portfolio
          </h1>

          <p className="mt-2 text-gray-400">
            Track your crypto assets across supported networks.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-1">
            <WalletConnectButton />
          </div>

          <div className="lg:col-span-2">
            <PortfolioCard />

            <div className="mt-6 rounded-2xl border border-purple-500/20 bg-[#11111c] p-6">

              <h2 className="text-xl font-bold">
                Wallet Information
              </h2>

              {address ? (
                <div className="mt-4 space-y-3">

                  <div>
                    <p className="text-sm text-gray-400">
                      Connected Address
                    </p>

                    <p className="mt-1 break-all text-sm">
                      {address}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#1a1a2e] p-4">
                    <p className="text-gray-400">
                      Portfolio Status
                    </p>

                    <p className="mt-2 font-semibold text-green-400">
                      Wallet Connected
                    </p>
                  </div>

                </div>
              ) : (
                <p className="mt-4 text-gray-400">
                  Connect a wallet to view your portfolio.
                </p>
              )}

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
