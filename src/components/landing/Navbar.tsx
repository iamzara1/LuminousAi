import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07070A]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#markets" className="transition hover:text-white">
            Markets
          </a>

          <a href="#ai" className="transition hover:text-white">
            AI
          </a>

          <Link
            href="/login"
            className="transition hover:text-white"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-violet-600 px-5 py-2 font-semibold text-white transition hover:bg-violet-500"
          >
            Create Account
          </Link>
        </nav>

      </div>
    </header>
  );
}
