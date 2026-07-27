import { getTokenPairs } from "@/services/dexscreener";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TokenPage({ params }: Props) {
  const { id } = await params;

  let pairs: any[] = [];

  try {
    const data = await getTokenPairs(id);
    pairs = data.pairs || [];
  } catch (error) {
    console.error("Token fetch error:", error);
  }

  const token = pairs[0];

  return (
    <main className="min-h-screen bg-[#09090F] p-6 text-white">

      <div className="mx-auto max-w-5xl">

        {!token ? (
          <div className="rounded-2xl border border-purple-500/20 bg-[#111119] p-8">
            <h1 className="text-2xl font-bold">
              Token not found
            </h1>

            <p className="mt-2 text-gray-400">
              No DexScreener data found for this address.
            </p>
          </div>

        ) : (

          <div className="space-y-6">

            <section className="rounded-2xl border border-purple-500/20 bg-[#111119] p-6">

              <h1 className="text-4xl font-bold">
                {token.baseToken.name}
              </h1>

              <p className="mt-2 text-gray-400">
                {token.baseToken.symbol} • {token.chainId}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <a
                  href={token.url}
                  target="_blank"
                  className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold"
                >
                  View DEX Data
                </a>

                <button
                  className="rounded-xl border border-white/10 px-5 py-3 text-sm"
                >
                  Add Watchlist ⭐
                </button>

              </div>

            </section>


            <section className="grid gap-4 md:grid-cols-2">

              <div className="rounded-2xl bg-[#111119] p-5 border border-purple-500/20">
                <p className="text-gray-400">
                  Price
                </p>

                <p className="mt-2 text-2xl font-bold">
                  ${token.priceUsd}
                </p>
              </div>


              <div className="rounded-2xl bg-[#111119] p-5 border border-purple-500/20">
                <p className="text-gray-400">
                  DEX
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {token.dexId}
                </p>
              </div>


              <div className="rounded-2xl bg-[#111119] p-5 border border-purple-500/20">
                <p className="text-gray-400">
                  Liquidity
                </p>

                <p className="mt-2 text-xl font-bold">
                  ${(token.liquidity?.usd || 0).toLocaleString()}
                </p>
              </div>


              <div className="rounded-2xl bg-[#111119] p-5 border border-purple-500/20">
                <p className="text-gray-400">
                  Volume 24h
                </p>

                <p className="mt-2 text-xl font-bold">
                  ${(token.volume?.h24 || 0).toLocaleString()}
                </p>
              </div>

            </section>


            <section className="rounded-2xl border border-purple-500/20 bg-[#111119] p-6">

              <p className="text-gray-400">
                Contract Address
              </p>

              <p className="mt-3 break-all text-sm">
                {token.baseToken.address}
              </p>

            </section>


          </div>

        )}

      </div>

    </main>
  );
}
