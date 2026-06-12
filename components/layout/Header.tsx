"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import { EASE_LUXE } from "@/components/motion/Reveal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const heroPage = pathname === "/";
  const solid = scrolled || !heroPage || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const tone = solid ? "text-ink" : "text-ivory";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-luxe
        ${solid ? "border-b border-sand/70 bg-ivory/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}
    >
      <div
        className={`mx-auto grid h-[var(--header-h)] max-w-editorial grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10 ${tone}`}
      >
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-draw text-[11px] uppercase tracking-luxe ${
                pathname === item.href ? "opacity-100" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          {menuOpen ? (
            <X size={20} strokeWidth={1.25} />
          ) : (
            <Menu size={20} strokeWidth={1.25} />
          )}
        </button>

        <Link
          href="/"
          className="justify-self-center font-serif text-2xl tracking-tight md:text-[1.85rem]"
          aria-label={`${site.name} — home`}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <div className="flex items-center justify-end">
          <Link
            href="/contact"
            className={`hidden items-center gap-2 border px-5 py-2.5 text-[11px] uppercase tracking-luxe transition-colors duration-500 ease-luxe md:inline-flex
              ${solid ? "border-ink/80 hover:bg-ink hover:text-ivory" : "border-ivory/80 hover:bg-ivory hover:text-ink"}`}
          >
            Start a Project
            <ArrowUpRight size={13} strokeWidth={1.25} />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: EASE_LUXE }}
            className="overflow-hidden border-b border-sand bg-ivory md:hidden"
            aria-label="Mobile"
          >
            <ul className="px-6 py-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: EASE_LUXE }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 font-serif text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.5, ease: EASE_LUXE }}
              >
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 border border-ink/80 px-5 py-3 text-[11px] uppercase tracking-luxe"
                >
                  Start a Project
                  <ArrowUpRight size={13} strokeWidth={1.25} />
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: EASE_LUXE }}
                className="mt-8 space-y-2"
              >
                <a
                  href={`mailto:${site.email}`}
                  className="block text-sm text-smoke"
                >
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block text-sm text-smoke">
                  {site.phone}
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
