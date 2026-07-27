"use client";

import { useEffect, useRef } from "react";

type Props = {
  symbol?: string;
};

export default function TradingViewChart({
  symbol = "BINANCE:BTCUSDT",
}: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      container_id: "tradingview_chart",
    });

    chartRef.current.appendChild(script);

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = "";
      }
    };
  }, [symbol]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-purple-500/20 bg-[#080812]">
      <div
        ref={chartRef}
        id="tradingview_chart"
        className="h-[500px] w-full"
      />
    </div>
  );
}

