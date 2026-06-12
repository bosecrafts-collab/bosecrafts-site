"use client";

import { Reveal } from "@/components/motion/Reveal";

export default function TestimonialSection() {
  return (
    <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <blockquote className="max-w-4xl font-serif text-3xl leading-[1.2] md:text-5xl">
          &ldquo;Bosecrafts didn&apos;t just give us a logo — they gave us a way
          to talk about ourselves. Six months in, we&apos;re closing deals 40%
          faster.&rdquo;
        </blockquote>
      </Reveal>
      <Reveal delay={0.15} className="mt-10 flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-serif text-lg text-ink"
          aria-hidden="true"
        >
          RM
        </div>
        <div>
          <p className="text-sm font-medium">Rohan Mukherjee</p>
          <p className="text-sm text-smoke">Founder, Artisan Collective</p>
        </div>
      </Reveal>
    </section>
  );
}
