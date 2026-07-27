"use client";

import { signOut } from "@/services/auth/actions";
import { useState } from "react";

export default function LogoutButton() {
  const [message, setMessage] = useState("");

  async function handleLogout() {
    try {
      await signOut();
      setMessage("Logged out");
    } catch {
      setMessage("Logout failed");
    }
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="rounded-xl border border-purple-500/30 bg-purple-600 px-5 py-3 font-semibold text-white"
      >
        Logout
      </button>

      {message && (
        <p className="mt-2 text-sm text-gray-400">
          {message}
        </p>
      )}
    </div>
  );
}

