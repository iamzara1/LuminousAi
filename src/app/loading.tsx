export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080812]">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />

        <h2 className="mt-6 text-2xl font-bold text-white">
          LuminousAi
        </h2>

        <p className="mt-2 text-gray-400">
          Loading market intelligence...
        </p>
      </div>
    </main>
  );
}
