"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { products, formatPrice } from "@/lib/data";
import { EASE_LUXE } from "@/components/motion/Reveal";
import { useEffect } from "react";

// Demo cart contents — wire this to your cart state / commerce SDK.
const demoCart = products.slice(0, 2);

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Scrim */}
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          {/* Panel */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory"
            initial={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
            transition={{ duration: 0.55, ease: EASE_LUXE }}
          >
            <div className="flex items-center justify-between border-b border-sand px-8 py-6">
              <h2 className="font-serif text-xl">Your Cart</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-60"
              >
                <X size={18} strokeWidth={1.25} />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-8 py-6">
              {demoCart.map((item) => (
                <li key={item.id} className="flex gap-5 border-b border-sand/60 py-6 first:pt-0">
                  <div className="relative h-28 w-22 w-[5.5rem] shrink-0 overflow-hidden bg-cream">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <p className="font-serif text-base">{item.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide2 text-smoke">
                        {item.collection}
                      </p>
                    </div>
                    <p className="text-sm">{formatPrice(item.price)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-sand px-8 py-6">
              <div className="mb-5 flex items-center justify-between text-sm">
                <span className="uppercase tracking-wide2 text-smoke">Subtotal</span>
                <span>R4,400.00</span>
              </div>
              <button type="button" className="btn-ghost w-full justify-center">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
