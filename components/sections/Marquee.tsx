"use client";

import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-sand bg-cream py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-8">
            <span className="text-[11px] uppercase tracking-luxe text-smoke">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-clay/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
