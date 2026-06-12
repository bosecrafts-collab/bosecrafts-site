"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { announcements, currencies } from "@/lib/data";

export default function AnnouncementBar() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-[55] border-b border-sand bg-ivory text-[11px] tracking-wide2 text-ink/80">
      <div className="mx-auto flex max-w-editorial items-center justify-between px-4 py-2 md:px-8">
        {/* Rotating value props — all visible on desktop, first on mobile */}
        <ul className="flex items-center gap-8 uppercase">
          {announcements.map((msg, i) => (
            <li key={msg} className={i > 0 ? "hidden md:block" : ""}>
              {msg}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <Link href="/faq" className="hidden link-draw lg:block">
            Help Center
          </Link>
          <Link href="/story" className="hidden link-draw lg:block">
            About Us
          </Link>

          {/* Currency selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="listbox"
              className="flex min-h-9 items-center gap-1.5"
            >
              {currency.label}
              <ChevronDown size={12} strokeWidth={1.5} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-50 mt-1 w-48 border border-sand bg-ivory py-1 shadow-sm"
              >
                {currencies.map((c) => (
                  <li key={c.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={c.code === currency.code}
                      onClick={() => {
                        setCurrency(c);
                        setOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-cream"
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
    </div>
  );
}
