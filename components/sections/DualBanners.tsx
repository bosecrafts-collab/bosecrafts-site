"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const banners = [
  {
    label: "About Us",
    href: "/story",
    image:
      "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?auto=format&fit=crop&w=1800&q=80",
    alt: "Artisan studio with natural light and looms",
  },
  {
    label: "Get in touch",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1800&q=80",
    alt: "Spools of naturally dyed yarn arranged on a table",
  },
];

/** Two wide image banners side by side, each with a single CTA button. */
export default function DualBanners() {
  return (
    <Stagger className="grid grid-cols-1 gap-1.5 md:grid-cols-2" stagger={0.15}>
      {banners.map((b) => (
        <StaggerItem key={b.label}>
          <Link
            href={b.href}
            className="group relative block h-[52svh] min-h-[340px] overflow-hidden bg-cream
              focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ink"
          >
            <Image
              src={b.image}
              alt={b.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1100ms] ease-luxe group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-ink/15 transition-colors duration-500 group-hover:bg-ink/25" />
            <span
              className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ivory px-8 py-3.5
                text-[11px] uppercase tracking-luxe text-ink transition-colors duration-400
                group-hover:bg-ink group-hover:text-ivory"
            >
              {b.label}
            </span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
