import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ coins: [] });
  }

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ coins: [] });
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ coins: [] });
  }
}
