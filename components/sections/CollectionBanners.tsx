"use client";

import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Hero = three tall collection banners side by side (stacked on mobile),
 * each a full-bleed image tile with a centered label button near the base.
 */
export default function CollectionBanners() {
  const tiles = collections.slice(0, 3);

  return (
    <Stagger className="grid grid-cols-1 gap-1.5 md:grid-cols-3" stagger={0.15}>
      {tiles.map((c) => (
        <StaggerItem key={c.id}>
          <Link
            href={`/shop?c=${c.slug}`}
            className="group relative block h-[72svh] min-h-[420px] overflow-hidden bg-cream
              focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ink"
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1100ms] ease-luxe group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <span
              className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ivory px-8 py-3.5
                text-[11px] uppercase tracking-luxe text-ink transition-colors duration-400
                group-hover:bg-ink group-hover:text-ivory"
            >
              {c.name}
            </span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
