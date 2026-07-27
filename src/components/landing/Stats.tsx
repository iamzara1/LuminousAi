export default function Stats() {
  const stats = [
    {
      value: "24/7",
      label: "AI Market Monitoring",
    },
    {
      value: "100+",
      label: "Assets Tracked",
    },
    {
      value: "AI",
      label: "Research Workspace",
    },
    {
      value: "Real-Time",
      label: "Market Intelligence",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-4">

        {stats.map((item) => (
          <div key={item.label} className="text-center">

            <h3 className="text-3xl font-bold text-violet-400">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
