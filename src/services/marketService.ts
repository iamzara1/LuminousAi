import { getBinancePrices } from "./binance";
import { getCoinGeckoData } from "./coingecko";
import { getDexTrending } from "./dexscreener";

export async function getMarketOverview() {
  const [binance, coingecko, dex] = await Promise.allSettled([
    getBinancePrices(),
    getCoinGeckoData(),
    getDexTrending(),
  ]);

  return {
    prices:
      binance.status === "fulfilled"
        ? binance.value
        : [],

    market:
      coingecko.status === "fulfilled"
        ? coingecko.value
        : {},

    trending:
      dex.status === "fulfilled"
        ? dex.value
        : [],
  };
}
