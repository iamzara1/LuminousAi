"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-violet-600 hover:bg-violet-500 text-white border border-violet-500",

  secondary:
    "bg-[#171B26] hover:bg-[#202636] border border-[#2B3448] text-white",

  ghost:
    "bg-transparent hover:bg-white/5 border border-transparent text-gray-300",

  danger:
    "bg-red-600 hover:bg-red-500 text-white border border-red-500",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-all duration-200",
          "disabled:cursor-not-allowed disabled:opacity-60",
          "focus:outline-none focus:ring-2 focus:ring-violet-500",
          variants[variant],
          className
        )}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
