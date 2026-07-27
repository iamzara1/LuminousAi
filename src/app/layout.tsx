import type { Metadata } from "next";
import "./globals.css";
import Web3Provider from "@/providers/Web3Provider";

export const metadata: Metadata = {
  title: "LuminousAI",
  description: "AI-powered crypto intelligence platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
