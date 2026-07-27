"use client";

import { Bell, Search, User } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090F]/90 backdrop-blur">
      <div className="mx-auto flex h-16 items-center justify-between px-4">

        <div className="flex items-center gap-3">

          <MobileSidebar />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
              L
            </div>

            <div>
              <h1 className="text-lg font-semibold text-white">
                LuminousAI
              </h1>

              <p className="text-xs text-gray-400">
                Crypto Intelligence
              </p>
            </div>
          </div>

        </div>

        <div className="hidden md:flex w-[420px] items-center rounded-xl bg-[#15151F] px-4">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search Bitcoin, Ethereum..."
            className="h-11 w-full bg-transparent px-3 text-sm text-white outline-none"
          />
        </div>

        <div className="flex items-center gap-2">

          <button className="rounded-lg p-2 transition hover:bg-white/5">
            <Bell size={20} className="text-white" />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-white/5">
            <User size={20} className="text-white" />
          </button>

        </div>

      </div>
    </header>
  );
}
