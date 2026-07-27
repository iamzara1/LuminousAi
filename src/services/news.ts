export type NewsArticle = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  source: string;
  publishedAt: string;
};

const API =
  "https://min-api.cryptocompare.com/data/v2/news/?lang=EN";

export async function getCryptoNews(): Promise<NewsArticle[]> {
  try {
    const res = await fetch(API, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error("Failed to load news");
    }

    const json = await res.json();

    return (json.Data || []).map((item: any) => ({
      id: String(item.id),
      title: item.title,
      description: item.body,
      image: item.imageurl,
      url: item.url,
      source: item.source_info?.name || "Crypto News",
      publishedAt: item.published_on,
    }));
  } catch (err) {
    console.error(err);

    return [];
  }
}
