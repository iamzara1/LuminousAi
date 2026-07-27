"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#07070A] px-4 md:hidden">
        <h1 className="text-lg font-bold">
          Luminous<span className="text-violet-500">AI</span>
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/70 md:hidden">
          <aside className="h-full w-64 bg-[#0B0B12] p-6">
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-violet-600/20"
              >
                Dashboard
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-violet-600/20"
              >
                Markets
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-violet-600/20"
              >
                Portfolio
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-violet-600/20"
              >
                AI Chat
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-violet-600/20"
              >
                Watchlist
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-gray-300 hover:bg-violet-600/20"
              >
                Settings
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
