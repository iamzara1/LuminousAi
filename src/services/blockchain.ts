export type SupportedChain =
  | "ethereum"
  | "bnb"
  | "xlayer"
  | "base"
  | "arbitrum";

const RPC_URLS = {
  ethereum: "https://ethereum-rpc.publicnode.com",
  bnb: "https://bsc-dataseed.binance.org",
  xlayer: "https://rpc.xlayer.tech",
  base: "https://mainnet.base.org",
  arbitrum: "https://arb1.arbitrum.io/rpc",
};

async function rpcCall(
  chain: SupportedChain,
  method: string,
  params: any[] = []
) {
  const response = await fetch(RPC_URLS[chain], {
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

  const data = await response.json();

  return data.result;
}


export async function getNativeBalance(
  address: string,
  chain: SupportedChain
) {
  const balance = await rpcCall(
    chain,
    "eth_getBalance",
    [address, "latest"]
  );

  if (!balance) return 0;

  return Number(BigInt(balance)) / 1e18;
}


export function getSupportedChains() {
  return Object.keys(RPC_URLS);
}
