"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type WalletContextType = {
  address: string;
  setAddress: (address: string) => void;
};

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [address, setAddress] = useState("");

  return (
    <WalletContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error(
      "useWallet must be used inside WalletProvider"
    );
  }

  return context;
}
