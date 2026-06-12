"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/data";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-[var(--header-h)]">
      <div className="mx-auto grid max-w-editorial gap-16 px-6 py-20 md:grid-cols-2 md:gap-24 md:px-10 md:py-28">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Get in Touch</p>
            <h1 className="font-serif text-5xl leading-[1.05] md:text-6xl">
              Tell us about <span className="italic">your</span> project.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-smoke">
              The form takes about two minutes. We reply within 24 hours, every
              working day. If we&apos;re not the right fit, we&apos;ll tell you
              and point you to someone who is.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Email", value: site.email, href: `mailto:${site.email}` },
              { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
              { label: "Studio", value: "Siliguri, India" },
              { label: "Response Time", value: "< 24 hours" },
            ].map((item) => (
              <div key={item.label} className="border border-sand bg-cream p-5">
                <p className="text-[10px] uppercase tracking-wide2 text-smoke">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-sm font-medium hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="border border-sand bg-cream p-8 md:p-10"
          >
            <input type="hidden" name="access_key" value="0fd1aa4b-5743-43d7-a969-7dce15ed7c83" />
            <input type="hidden" name="subject" value="New Project Enquiry — Bosecrafts" />
            <input type="hidden" name="from_name" value="Bosecrafts Website" />

            <h2 className="font-serif text-2xl">Project Enquiry</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-[10px] uppercase tracking-wide2 text-smoke">
                  Your Name *
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-b border-sand bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-wide2 text-smoke">
                  Email Address *
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full border-b border-sand bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="text-[10px] uppercase tracking-wide2 text-smoke">
                Company / Brand
              </span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                className="mt-2 w-full border-b border-sand bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
              />
            </label>

            <label className="mt-6 block">
              <span className="text-[10px] uppercase tracking-wide2 text-smoke">
                Project Type
              </span>
              <select
                name="project-type"
                className="mt-2 w-full border-b border-sand bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a type
                </option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Brand Strategy">Brand Strategy</option>
                <option value="Packaging">Packaging</option>
                <option value="Website / Digital">Website / Digital</option>
                <option value="Full Brand Build">Full Brand Build</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="mt-6 block">
              <span className="text-[10px] uppercase tracking-wide2 text-smoke">
                Tell us about the project *
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y border border-sand bg-ivory p-3 text-sm focus:border-ink focus:outline-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-ghost mt-8 disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Message Sent"
                  : "Send Enquiry"}
            </button>

            {status === "error" && (
              <p className="mt-4 text-sm text-rose-600">
                Something went wrong. Please email us directly at{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </p>
            )}
            {status === "sent" && (
              <p className="mt-4 text-sm text-smoke">
                Thank you — we&apos;ll be in touch within 24 hours.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
