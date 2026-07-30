import { getMarketData } from "@/services/market";

export interface DashboardData {
  market: unknown;
  trending: unknown;
  news: unknown;
}

export async function getDashboardData(): Promise<DashboardData> {
  const market = await getMarketData();

  return {
    market,
    trending: [],
    news: [],
  };
}
