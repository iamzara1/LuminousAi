"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  LayoutDashboard,
  BarChart3,
  Star,
  Wallet,
  Bot,
  Settings,
} from "lucide-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Markets", href: "/markets", icon: BarChart3 },
  { name: "Watchlist", href: "/watchlist", icon: Star },
  { name: "Portfolio", href: "/portfolio", icon: Wallet },
  { name: "AI Assistant", href: "/ai", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 lg:hidden"
      >
        <Menu className="text-white" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-white/10 bg-[#09090F]">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h1 className="text-xl font-semibold text-white">
                  LuminousAI
                </h1>

                <p className="text-sm text-gray-400">
                  Crypto Intelligence
                </p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            <nav className="flex-1 space-y-2 p-4">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
