"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const IMG_A =
  "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=2000&q=80";
const IMG_B =
  "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=2000&q=80";

/**
 * Two alternating story blocks: wide image, then heading + paragraphs.
 * Mirrors the reference's "knitwear story" / "founding story" sequence.
 */
export default function StorySections() {
  return (
    <>
      {/* Story one — the knitwear line */}
      <section className="mx-auto max-w-editorial px-4 pb-20 md:px-8 md:pb-28">
        <Reveal className="relative aspect-[21/9] min-h-[280px] overflow-hidden bg-cream">
          <Image src={IMG_A} alt="Brightly coloured chunky mohair knitwear" fill sizes="100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">The Knitwear Story</h2>
          <p className="mt-6 text-[15px] leading-loose text-smoke">
            Our knit range is a celebration of bold colour and childhood
            nostalgia — chunky mohair pieces named after the sweets and
            desserts we grew up loving. It began with a simple admiration for
            the knits in our own wardrobes, and grew into a dedication to
            sourcing mohair, one of the world&rsquo;s most beautiful natural
            fibres: insulating, breathable, and endlessly comfortable.
          </p>
        </Reveal>
      </section>

      {/* Story two — the founding story */}
      <section className="mx-auto max-w-editorial px-4 pb-20 md:px-8 md:pb-28">
        <Reveal className="relative aspect-[21/9] min-h-[280px] overflow-hidden bg-cream">
          <Image src={IMG_B} alt="Hand-cut upcycled material being worked at a studio bench" fill sizes="100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">The Studio Story</h2>
          <p className="mt-6 text-[15px] leading-loose text-smoke">
            The studio was founded in Cape Town out of a love for beautiful
            silhouettes and a conviction that waste can become treasure. Our
            bags begin life as rescued raw material destined for landfill —
            cleaned, hand-cut, and reworked into pieces with genuine
            character, where no two are ever quite the same.
          </p>
        </Reveal>
      </section>
    </>
  );
}
