"use client";

import { useEffect, useRef } from "react";

type Props = {
  symbol?: string;
};

export default function TradingViewChart({
  symbol = "BINANCE:BTCUSDT",
}: Props) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

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
      hide_side_toolbar: false,
      save_image: false,
      container_id: "tradingview_chart",
    });

    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [symbol]);

  return (
    <div className="rounded-2xl border border-purple-500/20 bg-[#080812] p-2">
      <div
        ref={container}
        id="tradingview_chart"
        className="h-[500px] w-full"
      />
    </div>
  );
}
