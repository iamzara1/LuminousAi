export interface CoinSearchResult {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

export async function searchCoins(query: string): Promise<CoinSearchResult[]> {
  if (!query.trim()) return [];

  const res = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to search coins");
  }

  const data = await res.json();

  const ids = data.coins
    ?.slice(0, 10)
    .map((coin: any) => coin.id)
    .join(",");

  if (!ids) return [];

  const marketRes = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`,
    {
      cache: "no-store",
    }
  );

  if (!marketRes.ok) {
    throw new Error("Failed to load market data");
  }

  return await marketRes.json();
}
