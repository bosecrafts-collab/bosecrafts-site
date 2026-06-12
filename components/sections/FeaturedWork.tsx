"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function FeaturedWork() {
  const tall = featuredProjects.find((p) => p.span === "tall")!;
  const rest = featuredProjects.filter((p) => p.span !== "tall");

  return (
    <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36" id="work">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <div>
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Projects we&apos;re <span className="italic">proud</span> of.
          </h2>
        </div>
        <Link href="/work" className="link-draw text-[11px] uppercase tracking-luxe">
          View all projects
        </Link>
      </Reveal>

      <Stagger className="grid gap-5 md:grid-cols-2 md:gap-6">
        <StaggerItem>
          <ProjectTile
            {...tall}
            className="aspect-[3/4] md:h-full md:aspect-auto"
          />
        </StaggerItem>
        <div className="grid gap-5 md:gap-6">
          {rest.map((p) => (
            <StaggerItem key={p.id}>
              <ProjectTile
                {...p}
                className={p.span === "wide" ? "aspect-[16/9]" : "aspect-[16/10]"}
              />
            </StaggerItem>
          ))}
        </div>
      </Stagger>
    </section>
  );
}

function ProjectTile({
  slug,
  title,
  italic,
  category,
  year,
  tagline,
  image,
  className = "",
}: {
  slug: string;
  title: string;
  italic?: string;
  category: string;
  year: string;
  tagline: string;
  image: string;
  className?: string;
}) {
  return (
    <Link
      href={`/work#${slug}`}
      className={`group relative block overflow-hidden bg-cream ${className}
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay`}
    >
      <Image
        src={image}
        alt={`${title} ${italic ?? ""} — ${category}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 text-ivory md:p-10">
        <p className="text-[10px] uppercase tracking-luxe text-ivory/70">
          {category} · {year}
        </p>
        <h3 className="mt-2 font-serif text-2xl md:text-3xl">
          {title}
          {italic && <span className="italic"> {italic}</span>}
        </h3>
        <p className="mt-2 max-w-md text-sm text-ivory/80">{tagline}</p>
      </div>
    </Link>
  );
}
