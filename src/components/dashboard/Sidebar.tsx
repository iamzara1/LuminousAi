"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  LineChart,
  Star,
  Wallet,
  Newspaper,
  Settings,
  Sparkles,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Assistant", href: "/dashboard/ai", icon: Bot },
  { name: "Markets", href: "/dashboard/markets", icon: LineChart },
  { name: "Watchlist", href: "/dashboard/watchlist", icon: Star },
  { name: "Portfolio", href: "/dashboard/portfolio", icon: Wallet },
  { name: "News", href: "/dashboard/news", icon: Newspaper },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-72 min-h-screen bg-[#09090B] border-r border-white/10 flex-col">

      <div className="px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              LuminousAI
            </h1>
            <p className="text-xs text-gray-400">
              Crypto Intelligence
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-5">
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-white font-medium">
            Welcome 👋
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Your AI-powered crypto workspace.
          </p>
        </div>
      </div>

    </aside>
  );
}
