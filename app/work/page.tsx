import type { Metadata } from "next";
import WorkGrid, { WorkIntro } from "@/components/sections/WorkGrid";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description:
    "Selected brand identity, packaging, web, and strategy projects from Bosecrafts.",
};

export default function WorkPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <div className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-28">
        <WorkIntro />
        <WorkGrid />
      </div>
    </div>
  );
}
