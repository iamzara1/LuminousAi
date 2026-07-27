"use client";

type Props = {
  data: any;
};

export default function DexInfo({ data }: Props) {
  const pair = data?.pairs?.[0];

  if (!pair) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0D0D14] p-5">
      <h2 className="text-lg font-semibold text-white">
        DEX Market Data
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

        <div>
          <p className="text-xs text-gray-400">
            DEX
          </p>
          <p className="text-sm text-white">
            {pair.dexId}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Liquidity
          </p>
          <p className="text-sm text-white">
            ${pair.liquidity?.usd?.toLocaleString() || "0"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Volume 24h
          </p>
          <p className="text-sm text-white">
            ${pair.volume?.h24?.toLocaleString() || "0"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Price
          </p>
          <p className="text-sm text-white">
            ${pair.priceUsd || "0"}
          </p>
        </div>

      </div>
    </section>
  );
}
