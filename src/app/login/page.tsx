"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  }

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully. Check your email if confirmation is enabled.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080812] p-6">
      <div className="w-full max-w-md rounded-2xl bg-[#11111c] border border-purple-500/20 p-8">

        <h1 className="text-3xl font-bold text-white">
          Welcome to LuminousAI
        </h1>

        <p className="mt-2 text-gray-400">
          Sign in to access your portfolio and AI tools.
        </p>

        <input
          className="mt-8 w-full rounded-xl bg-[#1a1a2e] p-4 text-white outline-none border border-purple-500/20"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-xl bg-[#1a1a2e] p-4 text-white outline-none border border-purple-500/20"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signIn}
          className="mt-6 w-full rounded-xl bg-purple-600 py-4 font-semibold hover:bg-purple-700"
        >
          Sign In
        </button>

        <button
          onClick={signUp}
          className="mt-4 w-full rounded-xl border border-purple-500 py-4 font-semibold text-white hover:bg-purple-500/10"
        >
          Create Account
        </button>

      </div>
    </main>
  );
}
