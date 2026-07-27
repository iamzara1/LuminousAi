"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password reset email sent. Check your inbox.");
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080812] p-6">
      <div className="w-full max-w-md rounded-2xl border border-purple-500/20 bg-[#10101A] p-6">

        <h1 className="text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="mt-2 text-gray-400">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="mt-6 space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
          />

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          {message && (
            <p className="text-sm text-green-400">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <Link
          href="/login"
          className="mt-6 block text-center text-violet-400 hover:text-violet-300"
        >
          Back to Login
        </Link>

      </div>
    </main>
  );
}
