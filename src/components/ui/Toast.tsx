"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface ToastProps {
  title: string;
  message?: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
}

const styles = {
  success: "border-emerald-500/30",
  error: "border-red-500/30",
  info: "border-violet-500/30",
  warning: "border-amber-500/30",
};

export default function Toast({
  title,
  message,
  type = "info",
  onClose,
}: ToastProps) {
  return (
    <div
      className={`fixed right-5 top-5 z-50 w-80 rounded-2xl border bg-[#10131C] p-4 shadow-xl ${styles[type]}`}
    >
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="font-semibold text-white">
            {title}
          </h3>

          {message && (
            <p className="mt-1 text-sm text-slate-400">
              {message}
            </p>
          )}

        </div>

        <button
          onClick={onClose}
          className="text-slate-400 transition hover:text-white"
        >
          <X size={18} />
        </button>

      </div>
    </div>
  );
}
