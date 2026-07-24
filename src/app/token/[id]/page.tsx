import { getTokenDetails, getTokenChart } from "@/services/coingecko"
import PriceChart from "@/components/token/PriceChart"

type TokenPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function TokenPage({
  params,
}: TokenPageProps) {

  const { id } = await params

  const token = await getTokenDetails(id)

  if (!token) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold">
          Token not found
        </h1>

        <p className="mt-3 text-gray-400">
          This token is unavailable or does not exist.
        </p>
      </main>
    )
  }


  const chart = await getTokenChart(id)


  const price =
    token.market_data?.current_price?.usd ?? 0

  const marketCap =
    token.market_data?.market_cap?.usd ?? 0

  const change =
    token.market_data?.price_change_percentage_24h ?? 0


  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">


          <div className="flex items-center gap-5">

            {token.image?.large && (
              <img
                src={token.image.large}
                alt={token.name}
                className="h-20 w-20 rounded-full"
              />
            )}


            <div>

              <h1 className="text-4xl font-bold">
                {token.name}
              </h1>

              <p className="uppercase text-gray-400">
                {token.symbol}
              </p>

            </div>

          </div>



          <div className="mt-8 grid gap-5 md:grid-cols-3">


            <div className="rounded-2xl bg-white/5 p-5">

              <p className="text-gray-400">
                Price
              </p>

              <p className="mt-2 text-2xl font-bold">
                ${price.toLocaleString()}
              </p>

            </div>



            <div className="rounded-2xl bg-white/5 p-5">

              <p className="text-gray-400">
                Market Cap
              </p>

              <p className="mt-2 text-2xl font-bold">
                ${marketCap.toLocaleString()}
              </p>

            </div>



            <div className="rounded-2xl bg-white/5 p-5">

              <p className="text-gray-400">
                24h Change
              </p>

              <p className="mt-2 text-2xl font-bold">
                {change.toFixed(2)}%
              </p>

            </div>


          </div>



          {chart && (
            <PriceChart data={chart} />
          )}



          <div className="mt-8 rounded-2xl border border-white/10 p-6">

            <h2 className="text-xl font-bold">
              Luminous AI Insight
            </h2>

            <p className="mt-3 text-gray-400">
              AI-powered analysis will evaluate market
              trends, momentum, volatility and risk.
            </p>

          </div>


        </div>

      </div>

    </main>
  )
}
