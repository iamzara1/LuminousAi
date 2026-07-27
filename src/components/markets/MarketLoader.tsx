"use client";

type Props = {
  progress: number;
  status: string;
};

export default function MarketLoader({
  progress,
  status,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090F]">
      <div className="w-full max-w-md px-8">

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-white">
            LuminousAI
          </h1>

          <p className="mt-3 text-gray-400">
            Analysing today's crypto market...
          </p>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-violet-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            {status}
          </span>

          <span className="text-sm font-semibold text-violet-400">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}
