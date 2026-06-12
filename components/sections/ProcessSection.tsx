"use client";

import { processSteps } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-36" id="process">
      <Reveal className="mb-14 md:mb-20">
        <p className="eyebrow mb-4">Process</p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          How a <span className="italic">project</span> moves.
        </h2>
      </Reveal>

      <Stagger className="grid gap-8 md:grid-cols-4 md:gap-6">
        {processSteps.map((step) => (
          <StaggerItem key={step.num}>
            <article className="border-t border-sand pt-6">
              <p className="font-serif text-3xl text-clay">{step.num}</p>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">
                {step.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
