export interface WalletToken {
  chain: string;
  address: string;
  symbol: string;
  name: string;
  balance: number;
  price: number;
  value: number;
}

import { getTokenHoldings } from "./tokens";
import { getNativeBalance } from "./portfolio";

export async function getCompletePortfolio(
  address: string
): Promise<WalletToken[]> {
  if (!address) return [];

  const portfolio: WalletToken[] = [];

  const chains = [
    "ethereum",
    "bnb",
    "xlayer",
    "base",
    "arbitrum",
  ] as const;

  for (const chain of chains) {
    try {
      const nativeBalance = await getNativeBalance(
        address,
        chain
      );

      if (nativeBalance > 0) {
        portfolio.push({
          chain,
          address: "",
          symbol:
            chain === "bnb"
              ? "BNB"
              : chain === "xlayer"
              ? "OKB"
              : "ETH",
          name: `${chain} Native`,
          balance: nativeBalance,
          price: 0,
          value: 0,
        });
      }

      const tokens = await getTokenHoldings(
        address,
        chain
      );

      portfolio.push(...tokens);
    } catch (e) {
      console.log(`${chain} unavailable`);
    }
  }

  return portfolio;
}
