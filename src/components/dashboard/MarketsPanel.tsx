"use client"

type Coin = {
  id: string
  name: string
  symbol: string
  image: string
  price?: number
  change?: number
}

type MarketsPanelProps = {
  coins?: Coin[]
}

export default function MarketsPanel({
  coins = [],
}: MarketsPanelProps) {

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Market Overview
      </h2>


      {coins.length === 0 ? (

        <p className="text-gray-400">
          No market data available
        </p>

      ) : (

        <div className="space-y-4">

          {coins.map((coin) => (

            <div
              key={coin.id}
              className="flex items-center justify-between rounded-2xl bg-white/5 p-4 hover:bg-white/10"
            >

              <div className="flex items-center gap-3">

                <img
                  src={coin.image}
                  alt={coin.name}
                  className="h-10 w-10 rounded-full"
                />

                <div>

                  <p className="font-semibold text-white">
                    {coin.name}
                  </p>

                  <p className="text-sm uppercase text-gray-400">
                    {coin.symbol}
                  </p>

                </div>

              </div>


              <div className="text-right">

                <p className="font-semibold text-white">
                  ${(coin.price ?? 0).toLocaleString()}
                </p>


                <p
                  className={
                    (coin.change ?? 0) >= 0
                      ? "text-green-400 text-sm"
                      : "text-red-400 text-sm"
                  }
                >
                  {(coin.change ?? 0).toFixed(2)}%
                </p>


              </div>


            </div>

          ))}

        </div>

      )}

    </div>
  )
}
