"use client";

import { useState } from "react";
import { signUp } from "@/services/auth/actions";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup() {
    try {
      await signUp(email, password);
      setMessage("Account created successfully");
    } catch (error) {
      setMessage("Signup failed");
    }
  }

  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-xl border border-purple-500/20 bg-black/40 px-4 py-3 text-white"
      />

      <button
        onClick={handleSignup}
        className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white"
      >
        Create Account
      </button>

      {message && (
        <p className="text-sm text-gray-400">
          {message}
        </p>
      )}
    </div>
  );
}
