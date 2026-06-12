"use client";

import { Reveal } from "@/components/motion/Reveal";

/** Centered brand introduction block. */
export default function BrandIntro() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center md:px-8 md:py-28">
      <Reveal>
        <h2 className="font-serif text-3xl md:text-4xl">A little more about the brand</h2>
        <p className="mt-6 text-[15px] leading-loose text-smoke">
          Founded in Cape Town, our studio is devoted to elegant silhouettes
          and genuinely sustainable making. Every piece is produced to order
          in small batches — a collection that sits at the meeting point of
          beautiful design and ethical craft.
        </p>
      </Reveal>
    </section>
  );
}
