"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE_LUXE } from "@/components/motion/Reveal";
import { site } from "@/lib/data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2200&q=80";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  const line = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 48 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: EASE_LUXE },
  });

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={HERO_IMG}
          alt="Design studio workspace with mood boards and typography samples"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/35" />
      </motion.div>

      <div className="relative mx-auto flex h-full max-w-editorial flex-col justify-end px-6 pb-24 md:px-10 md:pb-28">
        <motion.div
          {...line(0.15)}
          className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-luxe text-ivory/75"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.availability}
          </span>
          <span>Siliguri, India</span>
        </motion.div>

        <h1 className="max-w-5xl font-serif text-[clamp(2.75rem,8vw,6.5rem)] leading-[1.02] text-ivory">
          <motion.span {...line(0.3)} className="block">
            We design brands
          </motion.span>
          <motion.span {...line(0.45)} className="block italic">
            worth building.
          </motion.span>
        </h1>

        <motion.p
          {...line(0.6)}
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-ivory/85"
        >
          {site.name} is a brand consultancy working with founders at the
          intersection of strategy and design. We help you build the kind of
          brand that{" "}
          <em className="font-serif italic text-accent">opens rooms.</em>
        </motion.p>

        <motion.div {...line(0.75)} className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/work" className="btn-light group">
            Selected Work
            <ArrowUpRight
              size={14}
              strokeWidth={1.25}
              className="transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link href="/contact" className="btn-light group border-ivory/40">
            Start a Project
            <ArrowUpRight
              size={14}
              strokeWidth={1.25}
              className="transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
