"use client";

import { useState } from "react";
import { User, Shield, Bell, Moon, LogOut, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [newsAlerts, setNewsAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  function Toggle({
    enabled,
    onToggle,
  }: {
    enabled: boolean;
    onToggle: () => void;
  }) {
    return (
      <button
        onClick={onToggle}
        className={`relative h-7 w-12 rounded-full transition ${
          enabled ? "bg-violet-600" : "bg-gray-700"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090F] text-white p-6">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold tracking-tight">
          Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your LuminousAI account and preferences.
        </p>

        <div className="mt-8 space-y-6">

          <section className="rounded-3xl border border-violet-500/20 bg-[#111119] p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600">
                <User size={28} />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  Your Profile
                </h2>

                <p className="text-gray-400">
                  Manage your account information.
                </p>
              </div>

              <ChevronRight className="text-gray-500" />
            </div>
          </section>

          <section className="rounded-3xl border border-violet-500/20 bg-[#111119] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Shield className="text-violet-400" />
              <h2 className="text-lg font-semibold">
                Security
              </h2>
            </div>

            <button className="flex w-full items-center justify-between rounded-xl p-3 hover:bg-white/5">
              <span>Change Password</span>
              <ChevronRight size={18} />
            </button>

            <button className="mt-2 flex w-full items-center justify-between rounded-xl p-3 hover:bg-white/5">
              <span>Two-Factor Authentication</span>
              <ChevronRight size={18} />
            </button>
          </section>

          <section className="rounded-3xl border border-violet-500/20 bg-[#111119] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Bell className="text-violet-400" />
              <h2 className="text-lg font-semibold">
                Notifications
              </h2>
            </div>

            <div className="flex items-center justify-between py-3">
              <span>Price Alerts</span>
              <Toggle
                enabled={priceAlerts}
                onToggle={() => setPriceAlerts(!priceAlerts)}
              />
            </div>

            <div className="flex items-center justify-between py-3">
              <span>Market News</span>
              <Toggle
                enabled={newsAlerts}
                onToggle={() => setNewsAlerts(!newsAlerts)}
              />
            </div>
          </section>

          <section className="rounded-3xl border border-violet-500/20 bg-[#111119] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Moon className="text-violet-400" />
              <h2 className="text-lg font-semibold">
                Appearance
              </h2>
            </div>

            <div className="flex items-center justify-between">
              <span>Dark Mode</span>

              <Toggle
                enabled={darkMode}
                onToggle={() => setDarkMode(!darkMode)}
              />
            </div>
          </section>

          <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 py-4 font-semibold transition hover:bg-red-700">
            <LogOut size={20} />
            Sign Out
          </button>

        </div>

      </div>
    </main>
  );
}
