export interface DexPair {
  chainId: string;
  dexId: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceUsd: string;
  liquidity: {
    usd: number;
  };
  volume: {
    h24: number;
  };
  fdv: number;
  pairCreatedAt: number;
  url: string;
}

export async function getDexData(query: string) {
  const res = await fetch(
    `https://api.dexscreener.com/latest/dex/search/?q=${encodeURIComponent(query)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load DexScreener data");
  }

  const data = await res.json();

  return (data.pairs || []) as DexPair[];
}
