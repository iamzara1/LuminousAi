import { getBinancePrices } from "./binance";
import { getCoinGeckoData } from "./coingecko";
import { getDexTrending } from "./dexscreener";

export async function getMarketOverview() {
  const [binance, coingecko, dex] = await Promise.allSettled([
    getBinancePrices(),
    getCoinGeckoData(),
    getDexTrending(),
  ]);

  const binancePrices =
    binance.status === "fulfilled" ? binance.value : [];

  const coinGeckoPrices =
    coingecko.status === "fulfilled" ? coingecko.value : [];

  const merged = coinGeckoPrices.map((coin: any) => {
    const live = binancePrices.find(
      (item: any) => item.symbol === coin.symbol
    );

    return {
      ...coin,
      price: live?.price ?? coin.price,
      change: live?.change ?? coin.change,
    };
  });

  return {
    prices: merged,
    trending: dex.status === "fulfilled" ? dex.value : [],
  };
}
