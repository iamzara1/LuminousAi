import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-lg shadow-violet-500/25">
        <span className="text-lg font-bold text-white">L</span>
      </div>

      <div>
        <h1 className="font-[var(--font-space)] text-xl font-bold tracking-tight">
          LuminousAI
        </h1>

        <p className="text-xs text-gray-400">
          The Intelligence Layer for Web3
        </p>
      </div>
    </Link>
  );
}
