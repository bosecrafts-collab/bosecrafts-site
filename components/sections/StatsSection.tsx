"use client";

import { stats } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function StatsSection() {
  return (
    <section className="border-y border-sand bg-cream">
      <div className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-24">
        <Stagger className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center md:text-left">
                <p className="font-serif text-4xl md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wide2 text-smoke">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
