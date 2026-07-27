"use client";

import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-400">
          Loading LuminousAi...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 text-center">
          <h1 className="text-xl font-bold text-white">
            Login Required
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Please login to access your LuminousAi dashboard.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
