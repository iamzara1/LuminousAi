"use client";

type Props = {
  pair: {
    dexId?: string;
    chainId?: string;
    priceUsd?: string;
    fdv?: number;
    liquidity?: {
      usd?: number;
    };
    volume?: {
      h24?: number;
    };
  } | null;
};

export default function DexScreenerCard({ pair }: Props) {
  if (!pair) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0D0D14] p-5">
        <h2 className="mb-4 text-xl font-semibold text-white">
          DexScreener
        </h2>

        <p className="text-gray-400">
          No trading pair found.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0D0D14] p-5">
      <h2 className="mb-5 text-xl font-semibold text-white">
        DexScreener
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Chain</span>
          <span className="text-white">{pair.chainId}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">DEX</span>
          <span className="text-white">{pair.dexId}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Price</span>
          <span className="text-green-400">
            ${pair.priceUsd ?? "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Liquidity</span>
          <span className="text-white">
            ${pair.liquidity?.usd?.toLocaleString() ?? "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">24H Volume</span>
          <span className="text-white">
            ${pair.volume?.h24?.toLocaleString() ?? "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">FDV</span>
          <span className="text-white">
            ${pair.fdv?.toLocaleString() ?? "--"}
          </span>
        </div>
      </div>
    </div>
  );
}
