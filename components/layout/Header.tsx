"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { megaMenu, collections } from "@/lib/data";
import { EASE_LUXE } from "@/components/motion/Reveal";
import CartDrawer from "@/components/layout/CartDrawer";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", mega: true },
  { label: "About Us", href: "/story" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Two featured image tiles inside the mega menu
  const megaTiles = collections.slice(0, 2);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-ivory transition-shadow duration-300
          ${scrolled ? "shadow-[0_1px_0_0_theme(colors.sand),0_8px_24px_-16px_rgba(0,0,0,0.18)]" : "border-b border-sand"}`}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-editorial items-center justify-between gap-6 px-4 md:px-8">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {menuOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
          </button>

          {/* Logo — left, tagline beneath. Swap for your client's logo image. */}
          <Link href="/" className="flex flex-col leading-none" aria-label="Home">
            <span className="font-serif text-[1.65rem] tracking-[0.18em]">MORSA</span>
            <span className="mt-1 hidden text-[9px] uppercase tracking-luxe text-smoke md:block">
              Luxury Goods Through Sustainability
            </span>
          </Link>

          {/* Primary nav with mega menu trigger */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {primaryNav.map((item) =>
              item.mega ? (
                <div
                  key={item.label}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    aria-expanded={megaOpen}
                    onFocus={() => setMegaOpen(true)}
                    className="flex min-h-11 items-center gap-1 text-[12px] uppercase tracking-wide2 hover:text-clay"
                  >
                    {item.label}
                    <ChevronDown size={12} strokeWidth={1.5} />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex min-h-11 items-center text-[12px] uppercase tracking-wide2 hover:text-clay"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Utility icons — search, account, wishlist, cart with counters */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="flex h-11 w-11 items-center justify-center hover:text-clay"
            >
              <Search size={19} strokeWidth={1.25} />
            </button>
            <Link
              href="/account"
              aria-label="Account login"
              className="hidden h-11 w-11 items-center justify-center hover:text-clay md:flex"
            >
              <User size={19} strokeWidth={1.25} />
            </Link>
            <Link
              href="/wishlist"
              aria-label="Wishlist, 0 items"
              className="relative hidden h-11 w-11 items-center justify-center hover:text-clay md:flex"
            >
              <Heart size={19} strokeWidth={1.25} />
              <Count n={0} />
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart, 0 items"
              className="relative flex h-11 w-11 items-center justify-center hover:text-clay"
            >
              <ShoppingBag size={19} strokeWidth={1.25} />
              <Count n={0} />
            </button>
          </div>
        </div>

        {/* Mega menu — link column + two image tiles */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -6 }}
              transition={{ duration: 0.25, ease: EASE_LUXE }}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="absolute inset-x-0 top-full hidden border-b border-sand bg-ivory lg:block"
            >
              <div className="mx-auto grid max-w-editorial grid-cols-12 gap-10 px-8 py-10">
                <ul className="col-span-4 space-y-4">
                  {megaMenu.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="link-draw inline-flex items-center gap-2 text-sm uppercase tracking-wide2"
                      >
                        {link.label}
                        {link.isNew && (
                          <sup className="text-[9px] font-medium tracking-luxe text-clay">New</sup>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                {megaTiles.map((c) => (
                  <Link key={c.id} href={`/shop?c=${c.slug}`} className="group col-span-4">
                    <div className="relative aspect-[3/4] max-h-80 w-full overflow-hidden bg-cream">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        sizes="320px"
                        className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-wide2 group-hover:text-clay">
                      {c.name}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, ease: EASE_LUXE }}
              className="overflow-hidden border-t border-sand bg-ivory"
            >
              <form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto flex max-w-editorial items-center gap-4 px-4 py-4 md:px-8"
              >
                <Search size={16} strokeWidth={1.25} className="shrink-0 text-smoke" />
                <label htmlFor="site-search" className="sr-only">Search our site</label>
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search our site…"
                  autoFocus
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE_LUXE }}
              className="overflow-hidden border-t border-sand bg-ivory lg:hidden"
              aria-label="Mobile"
            >
              <ul className="px-5 py-4">
                {[primaryNav[0], ...megaMenu.map((m) => ({ label: m.label, href: m.href })), primaryNav[2], primaryNav[3]].map((item) => (
                  <li key={item.label} className="border-b border-sand/60 last:border-0">
                    <Link href={item.href} className="block py-3.5 text-sm uppercase tracking-wide2">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function Count({ n }: { n: number }) {
  return (
    <span className="absolute right-0.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[9px] text-ivory">
      {n}
    </span>
  );
}
