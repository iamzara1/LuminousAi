"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  console.error(error);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080812] p-6">
      <div className="w-full max-w-lg rounded-3xl border border-red-500/20 bg-[#10101A] p-8 text-center">
        <div className="mb-4 text-5xl">⚠️</div>

        <h1 className="text-3xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-3 text-gray-400">
          LuminousAi encountered an unexpected error while loading this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
