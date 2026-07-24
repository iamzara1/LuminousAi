const DEXSCREENER_URL = "https://api.dexscreener.com/latest";

export async function getDexTrending() {
  const response = await fetch(
    `${DEXSCREENER_URL}/dex/search?q=SOL`,
    {
      next: {
        revalidate: 120,
      },
    }
  );

  if (!response.ok) {
    throw new Error("DexScreener API failed");
  }

  const data = await response.json();

  return data.pairs?.slice(0, 10).map((pair: any) => ({
    name: pair.baseToken.name,
    symbol: pair.baseToken.symbol,
    price: pair.priceUsd,
    liquidity: pair.liquidity?.usd,
    volume: pair.volume?.h24,
    chain: pair.chainId,
  })) || [];
}
