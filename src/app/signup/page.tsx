"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/auth/actions";

export default function SignupPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await signUp(email, password);

      alert("Account created successfully. You can now log in.");

      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080812] p-6">
      <div className="w-full max-w-md rounded-2xl border border-purple-500/20 bg-[#10101A] p-6">

        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-gray-400">
          Join LuminousAI
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
            required
          />

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>

      </div>
    </main>
  );
}
