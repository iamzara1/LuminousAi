"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#070709] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <Link href="/">
            <h1 className="text-3xl font-bold">
              Luminous<span className="text-blue-500">AI</span>
            </h1>
          </Link>

          <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
            <Sparkles size={16} className="text-blue-500" />
            Welcome back to your AI workspace
          </div>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5"
        >

          <div>
            <label className="text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>


          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>


          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}


          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-medium hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>


        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-400 hover:text-blue-300"
          >
            Create one
          </Link>
        </p>

      </div>
    </main>
  );
}
