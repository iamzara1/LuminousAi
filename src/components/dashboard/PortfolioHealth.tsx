import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface PortfolioHealthProps {
  score: number;
  risk: "Low" | "Medium" | "High";
  diversification: number;
  performance24h: number;
}

export default function PortfolioHealth({
  score,
  risk,
  diversification,
  performance24h,
}: PortfolioHealthProps) {
  return (
    <Card className="p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          Portfolio Health
        </h2>

        <Badge
          variant={
            risk === "Low"
              ? "success"
              : risk === "Medium"
              ? "warning"
              : "danger"
          }
        >
          {risk} Risk
        </Badge>

      </div>

      <div className="mt-6">

        <p className="text-5xl font-bold text-violet-400">
          {score}
        </p>

        <p className="mt-1 text-slate-400">
          Health Score
        </p>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-xl border border-[#23293A] p-4">
          <p className="text-sm text-slate-400">
            Diversification
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {diversification}%
          </p>
        </div>

        <div className="rounded-xl border border-[#23293A] p-4">
          <p className="text-sm text-slate-400">
            24H Performance
          </p>

          <p
            className={`mt-2 text-xl font-semibold ${
              performance24h >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }`}
          >
            {performance24h.toFixed(2)}%
          </p>
        </div>

      </div>

    </Card>
  );
}
