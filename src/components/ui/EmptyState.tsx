import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-[#23293A] bg-[#10131C] px-6 py-12 text-center">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-slate-400">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}

    </div>
  );
}
