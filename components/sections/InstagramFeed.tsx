"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`;

// Replace with a live Instagram feed integration (e.g. Behold, EmbedSocial,
// or the Instagram Basic Display API) and your client's real handle.
const posts = [
  u("photo-1576871337622-98d48d1cf531"),
  u("photo-1551488831-00ddcb6c6bd3"),
  u("photo-1620799140408-edc6dcb6d633"),
  u("photo-1583743814966-8936f5b7be1a"),
  u("photo-1610288311735-39b7facbd095"),
  u("photo-1576566588028-4147f3842f27"),
];

export default function InstagramFeed() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-editorial px-4 py-20 md:px-8 md:py-28">
        <Reveal className="mb-10 text-center md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl">Seen on Socials</h2>
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-sm tracking-wide2 text-smoke">
              <span className="font-medium text-ink">@yourbrand_</span>
              <span className="mx-3">·</span>159 Posts
              <span className="mx-3">·</span>6.7K Followers
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-2 !py-3"
            >
              <Instagram size={14} strokeWidth={1.5} />
              Follow on Instagram
            </a>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
          {posts.map((src, i) => (
            <StaggerItem key={src}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-ivory"
                aria-label={`Instagram post ${i + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 text-ivory opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
                  <Instagram size={20} strokeWidth={1.5} />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
