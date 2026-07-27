const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets";

export async function getMarketData() {
  try {
    const res = await fetch(
      `${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch market data");
    }

    return await res.json();
  } catch (error) {
    console.error("Market fetch error:", error);
    return [];
  }
}
