export async function searchCoins(query: string) {
  try {
    if (!query.trim()) {
      return [];
    }

    const url = `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(
      query
    )}`;

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 8000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.error("Search API error:", res.status);
      return [];
    }

    const data = await res.json();

    return (data.coins || []).slice(0, 8);
  } catch (error) {
    console.error("Search failed:", error);
    return [];
  }
}
