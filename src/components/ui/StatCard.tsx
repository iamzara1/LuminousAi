import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  positive = true,
}: StatCardProps) {
  return (
    <Card className="p-5">
      <p className="text-sm text-slate-400">{title}</p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>

      {change && (
        <p
          className={`mt-2 text-sm ${
            positive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {change}
        </p>
      )}
    </Card>
  );
}
