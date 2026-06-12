"use client";

import { products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { Reveal, Stagger } from "@/components/motion/Reveal";

/**
 * Centered section heading + intro paragraph, then a 4-up product grid —
 * the reference site's "latest arrivals" pattern.
 */
export default function LatestArrivals() {
  return (
    <section className="mx-auto max-w-editorial px-4 py-20 md:px-8 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl">Explore Our Latest Arrivals</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-smoke">
          Chunky hand-knitted mohair pieces in playful, dessert-inspired
          colourways — made to order, easy to layer, and built to move with
          you through every season.
        </p>
      </Reveal>

      <Stagger className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Stagger>
    </section>
  );
}
