const API_URL =
  "https://api.coingecko.com/api/v3";

export async function getMarketData() {
  try {
    const res = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch market data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGlobalMarketData() {
  try {
    const res = await fetch(
      `${API_URL}/global`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch global data");
    }

    const { data } = await res.json();

    return {
      marketCap: data.total_market_cap.usd,
      volume24h: data.total_volume.usd,
      btcDominance: data.market_cap_percentage.btc,
      activeCoins: data.active_cryptocurrencies,
    };
  } catch (error) {
    console.error(error);

    return {
      marketCap: 0,
      volume24h: 0,
      btcDominance: 0,
      activeCoins: 0,
    };
  }
}
