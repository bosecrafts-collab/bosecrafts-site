import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Our Story — Atelier",
  description:
    "The story behind our slow-made knitwear and artisanal bags — natural fibre, honest hands, and a small-batch ethos.",
};

const IMG_A =
  "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?auto=format&fit=crop&w=1800&q=80";
const IMG_B =
  "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1600&q=80";

export default function StoryPage() {
  return (
    <article className="">
      {/* Editorial opening spread */}
      <header className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-5">Our Story</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] md:text-7xl">
            Made by hand, <span className="italic">meant to last</span>
          </h1>
        </Reveal>
      </header>

      <Reveal className="relative aspect-[21/9] min-h-[320px] w-full overflow-hidden bg-cream">
        <Image
          src={IMG_A}
          alt="A weaving studio bathed in soft natural light"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      {/* Narrative */}
      <section className="mx-auto grid max-w-editorial gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <Reveal className="md:col-span-4">
          <h2 className="font-serif text-3xl leading-snug md:sticky md:top-32 md:text-4xl">
            A studio built around the loom
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="space-y-6 text-[15px] leading-loose text-smoke md:col-span-6 md:col-start-6">
          <p>
            Our studio began with a single loom and a simple conviction: that
            the things we live with should be made carefully, by people who are
            paid fairly, from materials the earth can replenish.
          </p>
          <p>
            Today we work with a small circle of partner artisans. Each knit is
            shaped by hand from natural mohair; each bag is cut from
            vegetable-tanned leather and stitched without shortcuts. We release
            in small batches and never against the clock.
          </p>
          <p id="sustainability">
            Sustainability, for us, isn&rsquo;t a label — it&rsquo;s the
            consequence of making slowly. Undyed fibre where possible. Offcuts
            returned to the workshop. Pieces designed to be repaired, not
            replaced.
          </p>
        </Reveal>
      </section>

      {/* Closing image + CTA */}
      <section className="mx-auto grid max-w-editorial items-center gap-14 px-6 pb-28 md:grid-cols-2 md:gap-24 md:px-10 md:pb-40">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={IMG_B}
            alt="Close detail of hand-stitched leather work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Keep it for <span className="italic">decades</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-smoke">
            Every Atelier piece arrives with a care guide and a lifetime repair
            promise. When you&rsquo;re ready, find the piece you&rsquo;ll keep.
          </p>
          <Link href="/shop" className="btn-ghost mt-10">
            Shop the Collection
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
