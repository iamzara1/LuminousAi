import { apiFetch } from "./api";

const BASE_URL = "https://api.coingecko.com/api/v3";

export interface SearchResponse {
  coins: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
  }[];
}

export interface TrendingResponse {
  coins: {
    item: {
      id: string;
      name: string;
      symbol: string;
      thumb: string;
      market_cap_rank: number;
    };
  }[];
}

export interface TokenDetails {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
  };
}

export function searchTokens(query: string) {
  return apiFetch<SearchResponse>(
    `${BASE_URL}/search?query=${encodeURIComponent(query)}`
  );
}

export function getTrendingCoins() {
  return apiFetch<TrendingResponse>(
    `${BASE_URL}/search/trending`
  );
}

export function getTokenDetails(id: string) {
  return apiFetch<TokenDetails>(
    `${BASE_URL}/coins/${id}`
  );
}

export function getTokenChart(id: string) {
  return apiFetch(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`
  );
}

export function getGlobalMarket() {
  return apiFetch(
    `${BASE_URL}/global`
  );
}

export function getMarketPrices(ids?: string[]) {
  const coins = ids?.join(",") ?? "bitcoin,ethereum,solana,bnb";

  return apiFetch(
    `${BASE_URL}/simple/price?ids=${coins}&vs_currencies=usd&include_24hr_change=true`
  );
}

export function getCoinGeckoData(ids?: string[]) {
  return getMarketPrices(ids);
}
