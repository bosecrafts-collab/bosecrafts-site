"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { formatPrice, type Product } from "@/lib/data";
import { motion } from "framer-motion";
import { staggerItem } from "@/components/motion/Reveal";

/**
 * Shop-style product card matching the reference pattern:
 * – portrait image, cross-fade to alternate shot on hover
 * – wishlist heart (top-right) appears on hover
 * – "Select options" bar slides up over the image base on hover
 * – centered title + price range beneath
 */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article variants={staggerItem} className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        <Link
          href={`/shop#${product.slug}`}
          aria-label={product.name}
          className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-opacity duration-700 ease-luxe group-hover:opacity-0"
          />
          <Image
            src={product.imageAlt}
            alt={`${product.name} — alternate view`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:scale-[1.03] group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 text-[9px] uppercase tracking-luxe text-ivory">
            {product.badge}
          </span>
        )}

        {/* Wishlist — revealed on hover (always visible on touch) */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/95
            opacity-100 shadow-sm transition-all duration-300 hover:text-clay
            md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <Heart size={16} strokeWidth={1.5} />
        </button>

        {/* Select options bar slides up from the image base */}
        <Link
          href={`/shop#${product.slug}`}
          className="absolute inset-x-0 bottom-0 hidden translate-y-full bg-ivory/95 py-3.5 text-center
            text-[11px] uppercase tracking-luxe transition-transform duration-400 ease-luxe
            hover:bg-ink hover:text-ivory group-hover:translate-y-0 md:block"
        >
          Select options
        </Link>
      </div>

      <div className="mt-4 space-y-1 text-center">
        <h3 className="text-[13px] uppercase tracking-wide2">
          <Link href={`/shop#${product.slug}`} className="hover:text-clay">
            {product.name}
          </Link>
        </h3>
        <p className="text-[13px] text-smoke">{formatPrice(product.price)}</p>
      </div>
    </motion.article>
  );
}
