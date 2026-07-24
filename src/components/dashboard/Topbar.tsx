"use client";

import { Bell, UserCircle2 } from "lucide-react";
import SearchBar from "@/components/search/SearchBar";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#09090B]/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="w-96 max-w-full">
          <SearchBar />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 md:block">
          <p className="text-xs text-gray-400">
            Portfolio Value
          </p>

          <p className="text-lg font-semibold text-white">
            $0.00
          </p>
        </div>

        <button className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Bell size={20} className="text-white" />
        </button>

        <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">
          <UserCircle2 size={34} className="text-purple-400" />

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-white">
              Welcome
            </p>

            <p className="text-xs text-gray-400">
              LuminousAI User
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}
