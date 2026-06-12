"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function ServicesSection() {
  return (
    <section className="bg-cream" id="services">
      <div className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Where strategy meets <span className="italic">craft.</span>
          </h2>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <article className="group relative border border-sand bg-ivory p-8 transition-colors duration-500 ease-luxe hover:border-clay/30 md:p-10">
                <p className="text-[10px] uppercase tracking-luxe text-smoke">
                  {service.num}
                </p>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-smoke">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-sand px-3 py-1 text-[10px] uppercase tracking-wide2 text-smoke"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <Link href="/contact" className="btn-ghost">
            Discuss a project
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
