"use client";

import { Truck, Globe, Hand } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const badges = [
  { icon: Truck, title: "Free Shipping", text: "For all South African orders" },
  { icon: Globe, title: "International Shipping", text: "Worldwide via courier" },
  { icon: Hand, title: "Made to Order", text: "Unique & hand-crafted" },
];

/** Three-up trust/feature strip above the footer. */
export default function TrustBadges() {
  return (
    <section className="border-t border-sand">
      <Stagger className="mx-auto grid max-w-editorial grid-cols-1 gap-10 px-4 py-14 text-center sm:grid-cols-3 md:px-8" stagger={0.1}>
        {badges.map(({ icon: Icon, title, text }) => (
          <StaggerItem key={title} className="flex flex-col items-center gap-3">
            <Icon size={26} strokeWidth={1} aria-hidden="true" />
            <h3 className="text-[12px] uppercase tracking-luxe">{title}</h3>
            <p className="text-[13px] text-smoke">{text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
