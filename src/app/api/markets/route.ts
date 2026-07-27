import { NextResponse } from "next/server";

const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h";

export async function GET() {
  try {
    const res = await fetch(URL, {
      next: {
        revalidate: 30,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch markets" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
