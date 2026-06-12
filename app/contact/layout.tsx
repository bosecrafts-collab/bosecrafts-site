import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: "Get in touch with Bosecrafts. We take on six to eight projects a year.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
