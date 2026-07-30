import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  sentiment: "Bullish" | "Bearish" | "Neutral";
}

interface MarketNewsProps {
  news: NewsItem[];
}

export default function MarketNews({
  news,
}: MarketNewsProps) {
  return (
    <Card className="p-6">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Market Intelligence
        </h2>

        <Badge variant="info">
          Live News
        </Badge>
      </div>

      <div className="space-y-4">

        {news.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-[#23293A] p-4"
          >
            <h3 className="font-medium text-white">
              {item.title}
            </h3>

            <div className="mt-3 flex items-center justify-between text-sm">

              <span className="text-slate-400">
                {item.source}
              </span>

              <Badge
                variant={
                  item.sentiment === "Bullish"
                    ? "success"
                    : item.sentiment === "Bearish"
                    ? "danger"
                    : "warning"
                }
              >
                {item.sentiment}
              </Badge>

            </div>

            <p className="mt-2 text-xs text-slate-500">
              {item.publishedAt}
            </p>
          </div>
        ))}

      </div>

    </Card>
  );
}
