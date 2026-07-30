"use client";

import { useState } from "react";
import clsx from "clsx";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (id: string) => void;
}

export default function Tabs({
  tabs,
  defaultTab,
  onChange,
}: TabsProps) {
  const [active, setActive] = useState(
    defaultTab || tabs[0]?.id
  );

  function selectTab(id: string) {
    setActive(id);
    onChange?.(id);
  }

  return (
    <div className="flex gap-2 rounded-xl border border-[#23293A] bg-[#10131C] p-1">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => selectTab(tab.id)}
          className={clsx(
            "rounded-lg px-4 py-2 text-sm font-medium transition",
            active === tab.id
              ? "bg-violet-600 text-white"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          )}
        >
          {tab.label}
        </button>
      ))}

    </div>
  );
}
