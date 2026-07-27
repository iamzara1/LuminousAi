"use client";

import Link from "next/link";
import {
  Home,
  BarChart3,
  Wallet,
  Search,
  Settings,
  Newspaper,
} from "lucide-react";

const menu = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "Markets",
    icon: BarChart3,
    href: "/markets",
  },
  {
    name: "Portfolio",
    icon: Wallet,
    href: "/portfolio",
  },
  {
    name: "Search",
    icon: Search,
    href: "/search",
  },
  {
    name: "News",
    icon: Newspaper,
    href: "/news",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-purple-500/20 bg-[#080812] p-4">
      <h1 className="mb-8 text-xl font-bold text-white">
        LuminousAi
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-purple-500/10 hover:text-white active:scale-95"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
