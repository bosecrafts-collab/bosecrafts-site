"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Project } from "@/lib/data";
import { staggerItem } from "@/components/motion/Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  const displayTitle = project.italic
    ? `${project.title} ${project.italic}`
    : project.title;

  return (
    <motion.article variants={staggerItem} className="group" id={project.slug}>
      <Link
        href={`/work#${project.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <Image
            src={project.image}
            alt={`${displayTitle} — ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-all duration-700 ease-luxe group-hover:scale-[1.04]"
          />
          <Image
            src={project.imageAlt}
            alt={`${displayTitle} — alternate view`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <span
            className="absolute left-0 top-0 h-1 w-full"
            style={{ backgroundColor: project.accent }}
            aria-hidden="true"
          />
        </div>

        <div className="mt-5 space-y-1.5">
          <p className="text-[10px] uppercase tracking-luxe text-smoke">
            {project.category} · {project.year}
          </p>
          <h3 className="font-serif text-xl leading-snug md:text-2xl">
            {project.title}
            {project.italic && (
              <span className="italic"> {project.italic}</span>
            )}
          </h3>
          <p className="text-sm leading-relaxed text-smoke">{project.excerpt}</p>
        </div>
      </Link>
    </motion.article>
  );
}
