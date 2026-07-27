"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    alert("Password updated successfully.");

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080812] p-6">
      <div className="w-full max-w-md rounded-2xl border border-purple-500/20 bg-[#10101A] p-6">

        <h1 className="text-3xl font-bold text-white">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

        </form>

      </div>
    </main>
  );
}
