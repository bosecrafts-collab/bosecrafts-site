"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import { Reveal, Stagger } from "@/components/motion/Reveal";

export default function WorkGrid() {
  return (
    <Stagger className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Stagger>
  );
}

export function WorkIntro() {
  return (
    <Reveal className="mb-14 max-w-3xl md:mb-20">
      <p className="eyebrow mb-4">Selected Work</p>
      <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
        Twelve projects, <span className="italic">one standard.</span>
      </h1>
      <p className="mt-6 text-[15px] leading-relaxed text-smoke">
        Brand identity, packaging, digital, and strategy — work we&apos;ve
        shipped for founders who care about the long game.
      </p>
    </Reveal>
  );
}
