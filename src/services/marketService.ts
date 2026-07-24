import { getBinancePrices } from "./binance";
import { getCoinGeckoData } from "./coingecko";
import { getDexTrending } from "./dexscreener";

export async function getMarketOverview() {
  const [binance, coingecko, dex] = await Promise.allSettled([
    getBinancePrices(),
    getCoinGeckoData(),
    getDexTrending(),
  ]);

  const coinPrices =
    coingecko.status === "fulfilled"
      ? coingecko.value.map((coin: any) => ({
          symbol: coin.symbol,
          price: coin.price,
          change: coin.change ?? 0,
          volume: 0,
        }))
      : [];

  const combinedPrices = [
  ...(binance.status === "fulfilled" ? binance.value : []),
  ...coinPrices,
];

const uniquePrices = Array.from(
  new Map(combinedPrices.map((coin: any) => [coin.symbol, coin])).values()
);

return {
  prices: uniquePrices,

    market:
      coingecko.status === "fulfilled"
        ? coingecko.value
        : [],

    trending:
      dex.status === "fulfilled"
        ? dex.value
        : [],
  };
}
