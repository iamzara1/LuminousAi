import { getTrendingCoins } from "./coingecko";

const BASE_URL = "https://api.coingecko.com/api/v3";

async function safeFetch(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Market request failed");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getGlobalMarket() {
  return safeFetch(`${BASE_URL}/global`);
}

export async function getTrendingMarket() {
  return getTrendingCoins();
}
