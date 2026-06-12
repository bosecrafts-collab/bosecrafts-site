"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Home, ShoppingBag, Store, User } from "lucide-react";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Account", href: "/account", icon: User },
  { label: "Shop", href: "/shop", icon: Store },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
  { label: "Cart", href: "/cart", icon: ShoppingBag },
];

/** Fixed bottom navigation on mobile, matching the reference's app-like bar. */
export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-ivory/95 backdrop-blur-sm
        pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={label}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 text-[9px] uppercase tracking-wide2
                  ${active ? "text-ink" : "text-smoke"}`}
              >
                <Icon size={19} strokeWidth={active ? 1.75 : 1.25} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
