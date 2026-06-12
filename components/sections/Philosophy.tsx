"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const STORY_IMG =
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80";

export default function Philosophy() {
  return (
    <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <Image
              src={STORY_IMG}
              alt="Brand strategy workshop with sketches and mood boards"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full border border-sand md:block"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-5">Manifesto</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl leading-[1.12] md:text-5xl">
              Good design isn&apos;t{" "}
              <span className="italic">decoration.</span>
              <br />
              It&apos;s the language your brand speaks before you do.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-smoke">
              <p>
                Most agencies treat design as decoration. We treat it as
                infrastructure — load-bearing, slow to change, and capable of
                holding a business up for a decade.
              </p>
              <p>
                We&apos;re here for founders who want to build the kind of brand
                they&apos;ll be proud of in ten years. Not the kind that wins
                awards this quarter and feels dated by next.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/studio" className="btn-ghost mt-10">
              Meet the Studio
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
