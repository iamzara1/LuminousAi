const COINGECKO_URL = "https://api.coingecko.com/api/v3";

export type SearchToken = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  marketCapRank: number | null;
};

export async function searchTokens(query: string) {
  if (!query.trim()) return [];

  const response = await fetch(
    `${COINGECKO_URL}/search?query=${encodeURIComponent(query)}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to search tokens");
  }

  const data = await response.json();

  return data.coins.slice(0, 10).map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    image: coin.large || coin.thumb,
    marketCapRank: coin.market_cap_rank,
  }));
}
