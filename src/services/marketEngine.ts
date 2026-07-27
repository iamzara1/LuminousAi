import { getCryptoNews } from "./news";

export interface MarketSnapshot {
  coins: any[];
  news: any[];
  trending: any[];
  fearGreed: any | null;
}

export async function getMarketSnapshot(): Promise<MarketSnapshot> {
  const [
    coinsRes,
    trendingRes,
    news,
    fearRes,
  ] = await Promise.allSettled([
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false",
      { cache: "no-store" }
    ),

    fetch(
      "https://api.dexscreener.com/latest/dex/search?q=trending",
      { cache: "no-store" }
    ),

    getCryptoNews(),

    fetch(
      "https://api.alternative.me/fng/",
      { cache: "no-store" }
    ),
  ]);

  return {
    coins:
      coinsRes.status === "fulfilled"
        ? await coinsRes.value.json()
        : [],

    trending:
      trendingRes.status === "fulfilled"
        ? (await trendingRes.value.json()).pairs ?? []
        : [],

    news,

    fearGreed:
      fearRes.status === "fulfilled"
        ? await fearRes.value.json()
        : null,
  };
}
