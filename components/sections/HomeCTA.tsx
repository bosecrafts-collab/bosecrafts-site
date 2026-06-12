"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/data";

export default function HomeCTA() {
  return (
    <section className="border-t border-sand bg-ink text-ivory">
      <div className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow mb-5 !text-ivory/60">Let&apos;s Talk</p>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Have a brand worth <span className="italic">building?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/75">
            We take on six to eight projects a year. Spots for Q3 are filling
            now.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-light group">
            Start a Project
            <ArrowUpRight
              size={14}
              strokeWidth={1.25}
              className="transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 border border-ivory/30 px-8 py-4 text-[11px] uppercase tracking-luxe transition-colors duration-500 ease-luxe hover:bg-ivory hover:text-ink"
          >
            See our Work
          </Link>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-3 border border-ivory/20 px-6 py-4 text-sm text-ivory/80 transition-colors hover:border-ivory/50 hover:text-ivory"
          >
            → {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
