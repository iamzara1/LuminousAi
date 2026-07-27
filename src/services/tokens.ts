export interface TokenHolding {
  chain: string;
  address: string;
  symbol: string;
  name: string;
  balance: number;
  price: number;
  value: number;
}

const CHAIN_CONFIG = {
  ethereum: "eth",
  bnb: "bsc",
  xlayer: "xlayer",
  base: "base",
  arbitrum: "arbitrum",
};

const MORALIS_API =
  "https://deep-index.moralis.io/api/v2.2";

export async function getTokenHoldings(
  walletAddress: string,
  chain: keyof typeof CHAIN_CONFIG
): Promise<TokenHolding[]> {
  if (!walletAddress) return [];

  try {
    const response = await fetch(
      `${MORALIS_API}/${walletAddress}/erc20?chain=${CHAIN_CONFIG[chain]}`,
      {
        headers: {
          Accept: "application/json",
          "X-API-Key":
            process.env.NEXT_PUBLIC_MORALIS_API_KEY || "",
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data.map((token: any) => {
      const balance =
        Number(token.balance) /
        Math.pow(10, token.decimals);

      const price = Number(token.usd_price || 0);

      return {
        chain,
        address: token.token_address,
        symbol: token.symbol,
        name: token.name,
        balance,
        price,
        value: balance * price,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
