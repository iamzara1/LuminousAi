export type Chain =
  | "ethereum"
  | "bnb"
  | "base"
  | "arbitrum"
  | "xlayer";

const RPC = {
  ethereum: "https://ethereum-rpc.publicnode.com",
  bnb: "https://bsc-dataseed.binance.org",
  base: "https://mainnet.base.org",
  arbitrum: "https://arb1.arbitrum.io/rpc",
  xlayer: "https://rpc.xlayer.tech",
};

const COINS = {
  ethereum: "ethereum",
  bnb: "binancecoin",
  base: "ethereum",
  arbitrum: "ethereum",
  xlayer: "okb",
};

export async function rpcRequest(
  chain: Chain,
  method: string,
  params: any[]
) {
  const res = await fetch(RPC[chain], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method,
      params,
    }),
  });

  const data = await res.json();

  return data.result;
}

export async function getNativeBalance(
  address: string,
  chain: Chain
) {
  const balance = await rpcRequest(
    chain,
    "eth_getBalance",
    [address, "latest"]
  );

  if (!balance) return 0;

  return Number(BigInt(balance)) / 1e18;
}

export async function getCoinPrice(chain: Chain) {
  const id = COINS[chain];

  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  );

  const data = await res.json();

  return data[id]?.usd ?? 0;
}

export async function getPortfolioValue(
  address: string,
  chain: Chain
) {
  const [balance, price] = await Promise.all([
    getNativeBalance(address, chain),
    getCoinPrice(chain),
  ]);

  return {
    chain,
    balance,
    price,
    value: balance * price,
  };
}

export function detectChain(chainId: string): Chain {
  switch (chainId) {
    case "0x38":
      return "bnb";

    case "0x2105":
      return "base";

    case "0xa4b1":
      return "arbitrum";

    case "0xc4":
      return "xlayer";

    default:
      return "ethereum";
  }
}
