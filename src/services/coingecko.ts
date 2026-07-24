const COINGECKO_URL = "https://api.coingecko.com/api/v3";

export async function getCoinGeckoData() {
  const response = await fetch(
    `${COINGECKO_URL}/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,binancecoin&order=market_cap_desc&sparkline=false`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    throw new Error("CoinGecko API failed");
  }

  const data = await response.json();

  return data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    marketCap: coin.market_cap,
    rank: coin.market_cap_rank,
    image: coin.image,
  }));
}
