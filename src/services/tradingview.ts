const SYMBOLS: Record<string, string> = {
  bitcoin: "BINANCE:BTCUSDT",
  ethereum: "BINANCE:ETHUSDT",
  solana: "BINANCE:SOLUSDT",
  bnb: "BINANCE:BNBUSDT",
  ripple: "BINANCE:XRPUSDT",
  cardano: "BINANCE:ADAUSDT",
  dogecoin: "BINANCE:DOGEUSDT",
  tron: "BINANCE:TRXUSDT",
  sui: "BINANCE:SUIUSDT",
  avalanche: "BINANCE:AVAXUSDT",
  chainlink: "BINANCE:LINKUSDT",
  aptos: "BINANCE:APTUSDT",
};

export function getTradingViewSymbol(id: string): string {
  return SYMBOLS[id.toLowerCase()] ?? "BINANCE:BTCUSDT";
}

