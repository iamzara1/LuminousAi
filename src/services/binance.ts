const BINANCE_API = "https://api.binance.com/api/v3";

export async function getBinancePrice(symbol: string) {
  try {
    const response = await fetch(
      `${BINANCE_API}/ticker/24hr?symbol=${symbol}`,
      {
        next: {
          revalidate: 15,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return {
      symbol: data.symbol,
      price: Number(data.lastPrice),
      change: Number(data.priceChangePercent),
      volume: Number(data.volume),
      high: Number(data.highPrice),
      low: Number(data.lowPrice),
    };
  } catch (error) {
    console.error("Binance API Error:", error);
    return null;
  }
}

export async function getBinancePrices(
  symbols: string[] = ["BTCUSDT", "ETHUSDT", "SOLUSDT"]
) {
  const results = await Promise.all(
    symbols.map((symbol) => getBinancePrice(symbol))
  );

  return results.filter(Boolean);
}
