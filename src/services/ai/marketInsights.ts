interface Coin {
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number | null;
}

export interface MarketInsight {
  sentiment: "Bullish" | "Bearish" | "Neutral";
  confidence: number;
  summary: string;
  opportunity: string;
  risk: string;
}

export function generateMarketInsights(
  coins: Coin[]
): MarketInsight {
  const gainers = coins.filter(
    (coin) => (coin.price_change_percentage_24h ?? 0) > 0
  );

  const losers = coins.filter(
    (coin) => (coin.price_change_percentage_24h ?? 0) < 0
  );

  const sentiment =
    gainers.length > losers.length
      ? "Bullish"
      : losers.length > gainers.length
      ? "Bearish"
      : "Neutral";

  const confidence = Math.min(
    95,
    50 + Math.abs(gainers.length - losers.length) * 5
  );

  return {
    sentiment,
    confidence,
    summary: `${gainers.length} of the top ${coins.length} tracked assets are positive over the last 24 hours.`,
    opportunity: gainers[0]?.name ?? "No clear opportunity",
    risk: losers[0]?.name ?? "No significant downside detected",
  };
}
