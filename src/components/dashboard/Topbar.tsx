"use client";

import WalletConnectButton from "@/components/wallet/WalletConnectButton";
import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3">
      <div className="flex items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">
              L
            </span>
          </div>

          <div className="hidden sm:block">
            <h1 className="text-white font-semibold">
              LuminousAI
            </h1>
            <p className="text-xs text-gray-400">
              Crypto Intelligence
            </p>
          </div>
        </div>


        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Search size={18} className="text-gray-400" />

          <input
            placeholder="Search tokens, wallets..."
            className="w-full bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
          />
        </div>


        {/* Wallet */}
        <div>
          <WalletConnectButton />
        </div>

      </div>
    </header>
  );
}
