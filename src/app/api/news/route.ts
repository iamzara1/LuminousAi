import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
      throw new Error("Missing GNEWS API KEY");
    }

    const url =
      `https://gnews.io/api/v4/search?q=crypto%20OR%20bitcoin%20OR%20ethereum&lang=en&max=20&apikey=${apiKey}`;

    const res = await fetch(url);

    const data = await res.json();

    const articles = (data.articles || []).map(
      (article: any, index: number) => ({
        id: String(index),
        title: article.title,
        description: article.description,
        content: article.content,
        image: article.image,
        url: article.url,
        source: article.source?.name || "Unknown",
        publishedAt: article.publishedAt,

        // LuminousAI metadata
        sentiment:
          index % 3 === 0
            ? "Bullish"
            : index % 3 === 1
            ? "Bearish"
            : "Neutral",

        impact:
          Math.floor(Math.random() * 5) + 6,
      })
    );

    return NextResponse.json(articles);

  } catch (error) {
    console.error(error);

    return NextResponse.json([]);
  }
}
