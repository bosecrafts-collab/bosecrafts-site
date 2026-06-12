"use client";

import { Suspense, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { collections, products } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import { Reveal, Stagger } from "@/components/motion/Reveal";

function ShopGridInner() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("c");

  const filtered = useMemo(() => {
    if (!active) return products;
    const col = collections.find((c) => c.slug === active);
    return col ? products.filter((p) => p.collection === col.name) : products;
  }, [active]);

  const setFilter = (slug: string | null) =>
    router.push(slug ? `/shop?c=${slug}` : "/shop", { scroll: false });

  return (
    <section className="mx-auto max-w-editorial px-6 pb-28 pt-16 md:px-10 md:pt-24">
      <Reveal className="mb-12 md:mb-16">
        <p className="eyebrow mb-4">Shop All</p>
        <h1 className="font-serif text-5xl leading-tight md:text-6xl">
          The Collection
        </h1>

        {/* Filter pills — quiet, typographic */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-sand pb-5">
          <FilterButton
            label="All"
            isActive={!active}
            onClick={() => setFilter(null)}
          />
          {collections.map((c) => (
            <FilterButton
              key={c.id}
              label={c.name}
              isActive={active === c.slug}
              onClick={() => setFilter(c.slug)}
            />
          ))}
        </div>
      </Reveal>

      {filtered.length > 0 ? (
        <Stagger
          key={active ?? "all"}
          className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4"
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Stagger>
      ) : (
        <div className="py-24 text-center">
          <p className="font-serif text-2xl">Nothing here yet</p>
          <p className="mt-3 text-sm text-smoke">
            New pieces in this collection are on the loom. Browse everything in
            the meantime.
          </p>
          <button onClick={() => setFilter(null)} className="btn-ghost mt-8">
            View all pieces
          </button>
        </div>
      )}
    </section>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`min-h-11 text-[11px] uppercase tracking-luxe transition-colors duration-300
        ${isActive ? "text-ink" : "text-smoke hover:text-ink"}`}
    >
      <span className={isActive ? "border-b border-ink pb-1" : ""}>{label}</span>
    </button>
  );
}

export default function ShopGrid() {
  return (
    <Suspense>
      <ShopGridInner />
    </Suspense>
  );
}
