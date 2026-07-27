import PortfolioCard from "@/components/portfolio/PortfolioCard";
import WalletConnectButton from "@/components/wallet/WalletConnectButton";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050510] p-6">

      <div className="mx-auto max-w-5xl space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-white">
            LuminousAI Dashboard
          </h1>

          <p className="mt-2 text-gray-400">
            Your AI-powered crypto intelligence terminal
          </p>
        </div>


        <WalletConnectButton />

        <PortfolioCard />

      </div>

    </main>
  );
}
