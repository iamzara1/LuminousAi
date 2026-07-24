const COINGECKO_URL = "https://api.coingecko.com/api/v3"


async function safeFetch(url: string) {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    })


    if (!response.ok) {
      console.log(
        "CoinGecko failed:",
        response.status
      )

      return null
    }


    const text = await response.text()


    if (!text.startsWith("{") && !text.startsWith("[")) {
      console.log(
        "CoinGecko invalid response:",
        text
      )

      return null
    }


    return JSON.parse(text)


  } catch (error) {

    console.error(
      "CoinGecko request error:",
      error
    )

    return null
  }
}



export async function getCoinGeckoData() {

  const data = await safeFetch(
    `${COINGECKO_URL}/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana,okb&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
  )


  if (!data) {
    return []
  }


  return data.map((coin: any) => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol?.toUpperCase() ?? "",
    image: coin.image,
    price: coin.current_price ?? 0,
    change: coin.price_change_percentage_24h ?? 0,
    marketCap: coin.market_cap ?? 0,
    volume: coin.total_volume ?? 0,
    rank: coin.market_cap_rank ?? 0,
  }))
}





export async function getTokenDetails(id: string) {

  const data = await safeFetch(
    `${COINGECKO_URL}/coins/${id}`
  )


  return data ?? null

}





export async function getTokenChart(id: string) {

  const data = await safeFetch(
    `${COINGECKO_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`
  )


  if (!data?.prices) {
    return null
  }


  return data.prices.map(
    (item: [number, number]) => ({
      time: item[0],
      price: item[1],
    })
  )

}
