import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { site, team } from "@/lib/data";

export const metadata: Metadata = {
  title: `Studio — ${site.name}`,
  description:
    "The studio behind Bosecrafts — our values, our team, and our way of working.",
};

const STUDIO_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80";

const values = [
  {
    num: "01",
    title: "Strategy first.",
    body: "Three weeks of thinking before a single pixel. The brief decides the work — not the other way around. We don't move into design until both sides have signed off.",
  },
  {
    num: "02",
    title: "Craft over speed.",
    body: "Every brand we ship is reviewed against itself, twice, by someone who didn't make it. If the answer is \"we can ship it tomorrow but it's 80%,\" we ship it next week at 100%.",
  },
  {
    num: "03",
    title: "Stay for the launch.",
    body: "Six months of follow-through is baked into every engagement. We don't disappear after handover. The brand is yours to use, ours to make sure you can.",
  },
];

export default function StudioPage() {
  return (
    <article className="pt-[var(--header-h)]">
      <header className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-5">The Studio · Est. 2017</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] md:text-7xl">
            A small studio with <span className="italic">big</span> opinions.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-smoke">
            {site.name} is six people — three designers, a strategist, a writer,
            and an operator. We work out of a converted printing press in
            Siliguri&apos;s old quarter. We take on six to eight projects a
            year. We turn down twice as many.
          </p>
        </Reveal>
      </header>

      <Reveal className="relative aspect-[21/9] min-h-[320px] w-full overflow-hidden bg-cream">
        <Image
          src={STUDIO_IMG}
          alt="Bosecrafts studio workspace"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      <section className="mx-auto grid max-w-editorial gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <Reveal className="md:col-span-4">
          <p className="eyebrow mb-4">Why we exist</p>
          <h2 className="font-serif text-3xl leading-snug md:text-4xl">
            Design as infrastructure, not decoration.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="space-y-6 text-[15px] leading-loose text-smoke md:col-span-6 md:col-start-6">
          <p>
            <strong className="text-ink">Most agencies treat design as decoration.</strong>{" "}
            We treat it as infrastructure — load-bearing, slow to change, and
            capable of holding a business up for a decade.
          </p>
          <p>
            We&apos;re here for founders who want to build the kind of brand
            they&apos;ll be proud of in ten years. Not the kind that wins awards
            this quarter and feels dated by next.
          </p>
          <p>If that sounds like the work you want done, we&apos;d like to hear about it.</p>
        </Reveal>
      </section>

      <section className="border-y border-sand bg-cream">
        <div className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36">
          <Reveal className="mb-14 md:mb-20">
            <p className="eyebrow mb-4">Principles</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Three things we won&apos;t <span className="italic">compromise</span> on.
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {values.map((value, i) => (
              <Reveal key={value.num} delay={0.1 * i}>
                <article className="border border-sand bg-ivory p-8 md:p-10">
                  <p className="font-serif text-3xl text-clay">{value.num}</p>
                  <h3 className="mt-4 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-smoke">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow mb-4">Team</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            The six of <span className="italic">us.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.08 * i}>
              <article className="border border-sand bg-cream p-8">
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full font-serif text-2xl italic text-ink"
                  style={{ backgroundColor: member.accent }}
                  aria-hidden="true"
                >
                  {member.initial}
                </div>
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-wide2 text-smoke">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-smoke">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14">
          <Link href="/contact" className="btn-ghost">
            Work with us
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
