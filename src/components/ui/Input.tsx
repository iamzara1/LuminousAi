"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "h-11 w-full rounded-xl border bg-[#10131C] px-4",
          "text-white placeholder:text-slate-500",
          "outline-none transition-all duration-200",
          "focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
          error
            ? "border-red-500"
            : "border-[#23293A]",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
