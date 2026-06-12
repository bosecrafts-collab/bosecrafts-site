import type { Metadata } from "next";
import ShopGrid from "@/components/sections/ShopGrid";

export const metadata: Metadata = {
  title: "Shop — Atelier",
  description: "Browse hand-crafted mohair knits, artisanal bags and woven throws.",
};

export default function ShopPage() {
  return <ShopGrid />;
}
