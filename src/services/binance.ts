const BINANCE_URL = "https://api.binance.com/api/v3";

const symbols = [
  "BTCUSDT",
  "ETHUSDT",
  "SOLUSDT",
  "BNBUSDT",
  "OKBUSDT",
];

export async function getBinancePrices() {
  const response = await fetch(
    `${BINANCE_URL}/ticker/24hr`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Binance API failed");
  }

  const data = await response.json();

  return data
    .filter((coin: any) =>
      symbols.includes(coin.symbol)
    )
    .map((coin: any) => ({
      symbol: coin.symbol.replace("USDT", ""),
      price: Number(coin.lastPrice),
      change: Number(coin.priceChangePercent),
      volume: Number(coin.volume),
    }));
}
