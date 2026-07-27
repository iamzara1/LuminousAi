type Coin = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};

export default function MarketCard({ coin }: { coin: Coin }) {
  const positive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-black/40 p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
          <img
            src={coin.image}
            alt={coin.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            {coin.name}
          </h3>

          <p className="text-xs uppercase text-gray-400">
            {coin.symbol}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xl font-bold text-white">
          ${coin.current_price.toLocaleString()}
        </p>

        <p
          className={`mt-1 text-sm ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {positive ? "+" : ""}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>

        <p className="mt-2 text-xs text-gray-400">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
