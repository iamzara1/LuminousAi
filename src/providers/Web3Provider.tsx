"use client";

import { ReactNode } from "react";
import { WalletProvider } from "@/context/WalletContext";

export default function Web3Provider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  );
}
