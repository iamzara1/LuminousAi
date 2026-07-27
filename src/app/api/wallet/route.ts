import { NextRequest, NextResponse } from "next/server";
import { getNativeBalance } from "@/services/portfolio";

export async function GET(request: NextRequest) {
  try {
    const address = request.nextUrl.searchParams.get("address");

    if (!address) {
      return NextResponse.json(
        { error: "Wallet address is required" },
        { status: 400 }
      );
    }

    const chains = [
      { key: "ethereum", symbol: "ETH" },
      { key: "bnb", symbol: "BNB" },
      { key: "base", symbol: "ETH" },
      { key: "arbitrum", symbol: "ETH" },
      { key: "xlayer", symbol: "OKB" },
    ] as const;

    const portfolio = [];

    for (const chain of chains) {
      try {
        const balance = await getNativeBalance(
          address,
          chain.key
        );

        if (balance > 0) {
          portfolio.push({
            symbol: chain.symbol,
            name: chain.key,
            balance,
            price: 0,
            value: 0,
          });
        }
      } catch {
        // Ignore unavailable chains
      }
    }

    return NextResponse.json(portfolio);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch wallet data" },
      { status: 500 }
    );
  }
}
