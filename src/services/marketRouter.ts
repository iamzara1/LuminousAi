import { getCoinGeckoData } from "./coingecko";
import { getDexTrending } from "./dexscreener";

export async function getMarketData() {
  try {
    const [coingecko, dexscreener] = await Promise.all([
      getCoinGeckoData(),
      getDexTrending(),
    ]);

    return {
      coingecko,
      dexscreener,
    };
  } catch (error) {
    console.error(error);

    return {
      coingecko: null,
      dexscreener: null,
    };
  }
}
