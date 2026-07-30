import { HTMLAttributes } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export default function Card({
  elevated = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[#23293A] bg-[#10131C]",
        "transition-all duration-200",
        elevated && "shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
