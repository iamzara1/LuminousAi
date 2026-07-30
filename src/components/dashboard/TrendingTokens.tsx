import Card from "@/components/ui/Card";

export interface TrendingToken {
  id: string;
  symbol: string;
  name: string;
  price: string;
  change24h: number;
}

interface TrendingTokensProps {
  tokens: TrendingToken[];
}

export default function TrendingTokens({
  tokens,
}: TrendingTokensProps) {
  return (
    <Card className="p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          Trending Tokens
        </h2>

        <span className="text-sm text-slate-400">
          Live
        </span>

      </div>

      <div className="space-y-4">

        {tokens.map((token) => (
          <div
            key={token.id}
            className="flex items-center justify-between rounded-xl border border-[#23293A] p-4"
          >

            <div>

              <h3 className="font-semibold text-white">
                {token.name}
              </h3>

              <p className="text-sm text-slate-400">
                {token.symbol.toUpperCase()}
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold text-white">
                {token.price}
              </p>

              <p
                className={
                  token.change24h >= 0
                    ? "text-emerald-400"
                    : "text-red-400"
                }
              >
                {token.change24h.toFixed(2)}%
              </p>

            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}
