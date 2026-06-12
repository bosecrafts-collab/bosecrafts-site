"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CreditCard, Instagram, Mail } from "lucide-react";
import { currencies } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

const infoLinks = [
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "About Us", href: "/story" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const shopLinks = [
  { label: "Mohair Knits", href: "/shop?c=mohair-knits" },
  { label: "Bonnets", href: "/shop?c=chic-bonnets" },
  { label: "Bags", href: "/shop?c=artisanal-bags" },
  { label: "Accessories", href: "/shop?c=accessories" },
];

export default function Footer() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-t border-sand bg-ivory pb-20 lg:pb-0">
      <div className="mx-auto max-w-editorial px-4 py-16 md:px-8 md:py-20">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand column */}
            <div className="md:col-span-5">
              <p className="font-serif text-xl tracking-[0.18em]">MORSA</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-smoke">
                A Cape Town studio devoted to beautiful silhouettes and
                sustainable design — every piece made to order by hand.
              </p>
              <div className="mt-6 space-y-2.5 text-sm">
                <a href="mailto:hello@yourbrand.co.za" className="link-draw inline-flex items-center gap-2 text-ink/80">
                  <Mail size={14} strokeWidth={1.5} /> hello@yourbrand.co.za
                </a>
                <br />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw inline-flex items-center gap-2 text-ink/80"
                >
                  <Instagram size={14} strokeWidth={1.5} /> @yourbrand_
                </a>
              </div>
            </div>

            {/* Information */}
            <nav className="md:col-span-3" aria-label="Information">
              <h3 className="eyebrow mb-5">Information</h3>
              <ul className="space-y-3">
                {infoLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="link-draw text-sm text-ink/80">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Shop */}
            <nav className="md:col-span-2" aria-label="Shop">
              <h3 className="eyebrow mb-5">Shop</h3>
              <ul className="space-y-3">
                {shopLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="link-draw text-sm text-ink/80">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Currency selector */}
            <div className="md:col-span-2">
              <h3 className="eyebrow mb-5">Currency</h3>
              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-haspopup="listbox"
                  className="flex min-h-11 items-center gap-2 border border-sand px-4 text-sm"
                >
                  {currency.label}
                  <ChevronDown size={13} strokeWidth={1.5} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <ul role="listbox" className="absolute bottom-full left-0 z-40 mb-1 w-52 border border-sand bg-ivory py-1 shadow-sm">
                    {currencies.map((c) => (
                      <li key={c.code}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={c.code === currency.code}
                          onClick={() => { setCurrency(c); setOpen(false); }}
                          className="block w-full px-4 py-2 text-left text-sm hover:bg-cream"
                        >
                          {c.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom row — copyright + payment marks */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-7 text-[12px] text-smoke">
          <p>© {new Date().getFullYear()} Your Brand store. All rights reserved.</p>
          <p className="inline-flex items-center gap-2" aria-label="Accepted payment methods">
            <CreditCard size={16} strokeWidth={1.25} />
            Visa · Mastercard · PayPal · EFT
          </p>
        </div>
      </div>
    </footer>
  );
}
