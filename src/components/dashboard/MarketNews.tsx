type NewsItem = {
  title: string;
  source: string;
  time: string;
};

const news: NewsItem[] = [
  {
    title: "Bitcoin holds above key support as traders await market direction.",
    source: "Luminous News",
    time: "5m ago",
  },
  {
    title: "Ethereum ecosystem activity continues to increase.",
    source: "Luminous News",
    time: "18m ago",
  },
  {
    title: "Solana trading volume rises across major exchanges.",
    source: "Luminous News",
    time: "35m ago",
  },
];

export default function MarketNews() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0D0D14] p-5">
      <h2 className="mb-5 text-lg font-semibold text-white">
        Market News
      </h2>

      <div className="space-y-4">
        {news.map((item, index) => (
          <article
            key={index}
            className="rounded-xl border border-white/5 bg-[#13131C] p-4"
          >
            <h3 className="text-sm font-medium text-white">
              {item.title}
            </h3>

            <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
              <span>{item.source}</span>
              <span>{item.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
