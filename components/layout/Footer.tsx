"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/data";

const footerLinks = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "/studio" },
      { label: "Work", href: "/work" },
      { label: "Process", href: "/#process" },
      { label: "Services", href: "/#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: site.email, href: `mailto:${site.email}` },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Siliguri, West Bengal", href: "#" },
      { label: "India · 734001", href: "#" },
      { label: "View on Map", href: "https://maps.google.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-ivory">
      <div className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <div className="grid gap-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="font-serif text-2xl tracking-tight">
                {site.name}
                <span className="text-accent">.</span>
              </p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-smoke">
                A design-led consultancy from Siliguri building brands that
                command attention.
              </p>
              <Link
                href="/contact"
                className="btn-ghost mt-8 inline-flex"
              >
                Start a Project
              </Link>
            </div>

            {footerLinks.map((col) => (
              <nav key={col.title} className="md:col-span-2" aria-label={col.title}>
                <h3 className="eyebrow mb-6">{col.title}</h3>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="link-draw text-sm text-ink/80"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="md:col-span-1 md:justify-self-end">
              <div className="flex gap-2 md:flex-col">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={17} strokeWidth={1.25} />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={17} strokeWidth={1.25} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-8 text-[11px] uppercase tracking-wide2 text-smoke">
          <p>© {new Date().getFullYear()} {site.name} Studio. All rights reserved.</p>
          <p>Made with intention in the Eastern Himalayas</p>
        </div>
      </div>
    </footer>
  );
}
