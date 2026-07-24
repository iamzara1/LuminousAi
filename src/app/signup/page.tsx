"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Account created. Check your email for verification.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#070709] text-white flex items-center justify-center px-5">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <Link href="/">
            <h1 className="text-3xl font-bold">
              Luminous<span className="text-blue-500">AI</span>
            </h1>
          </Link>

          <div className="mt-4 flex justify-center items-center gap-2 text-gray-400">
            <Sparkles size={16} className="text-blue-500" />
            Create your AI workspace
          </div>
        </div>

        <form
          onSubmit={handleSignup}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6"
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
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
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
              placeholder="Create a password"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>


          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm text-green-400">
              {success}
            </p>
          )}


          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-medium hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

        </form>


        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Sign in
          </Link>
        </p>

      </div>
    </main>
  );
}
