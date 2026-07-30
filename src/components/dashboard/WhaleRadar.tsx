import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface WhaleTransaction {
  id: string;
  token: string;
  action: "BUY" | "SELL";
  amount: string;
  wallet: string;
  time: string;
}

interface WhaleRadarProps {
  transactions: WhaleTransaction[];
}

export default function WhaleRadar({
  transactions,
}: WhaleRadarProps) {
  return (
    <Card className="p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Whale Radar
        </h2>

        <Badge variant="info">
          Live
        </Badge>
      </div>

      <div className="space-y-4">

        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="rounded-xl border border-[#23293A] p-4"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-white">
                  {tx.token}
                </p>

                <p className="text-sm text-slate-400">
                  {tx.wallet}
                </p>
              </div>

              <Badge
                variant={
                  tx.action === "BUY"
                    ? "success"
                    : "danger"
                }
              >
                {tx.action}
              </Badge>

            </div>

            <div className="mt-3 flex items-center justify-between">

              <p className="text-lg font-bold text-white">
                {tx.amount}
              </p>

              <p className="text-sm text-slate-500">
                {tx.time}
              </p>

            </div>
          </div>
        ))}

      </div>

    </Card>
  );
}
