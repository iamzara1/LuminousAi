import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  bsc,
  base,
  arbitrum,
} from "@reown/appkit/networks";

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!;

const metadata = {
  name: "LuminousAI",
  description: "AI-powered crypto intelligence",
  url: "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

export const networks = [
  mainnet,
  bsc,
  base,
  arbitrum,
];

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  features: {
    analytics: true,
  },
});

export const config = wagmiAdapter.wagmiConfig;
