import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "./Section";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function ServicePageShell({
  eyebrow,
  title,
  icon,
  intro,
  bullets,
  body,
  serviceName,
}: {
  eyebrow: string;
  title: string;
  icon: string;
  intro: string;
  bullets: string[];
  body: ReactNode;
  serviceName: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pt-12 pb-20 text-primary-foreground md:pt-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cta/30 blur-3xl float-slow" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:px-8">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-cta" /> {eyebrow}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
                <span className="inline-flex items-center gap-3">
                  <Icon name={icon} className="h-10 w-10 text-cta" />
                  {title}
                </span>
                <span className="mt-2 block text-base font-medium uppercase tracking-[0.18em] text-white/60">in Brownwood, TX</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl text-lg text-white/80">{intro}</p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cta" /> {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-cta">
                  <Phone className="h-4 w-4" /> Call {business.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
                  Get Free Estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="glass-dark rounded-2xl p-5 text-white">
              <h2 className="font-display text-lg font-semibold">Request service for {serviceName}</h2>
              <p className="mt-1 text-sm text-white/70">Tell us what's going on and we'll get right back to you.</p>
              <div className="mt-4">
                <QuoteForm compact defaultService={serviceName} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div>
              <SectionEyebrow>What we do</SectionEyebrow>
              <div className="mt-4 space-y-5 text-base leading-relaxed text-foreground/85">{body}</div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <aside className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h3 className="font-display text-lg font-bold">Why customers choose M. Webb</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {[
                  "35+ years of plumbing experience",
                  "Locally owned and operated in Brownwood",
                  "Honest, upfront pricing",
                  "24-hour emergency availability",
                  "Residential & commercial expertise",
                  "Clean, respectful workmanship",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cta" /> {x}</li>
                ))}
              </ul>
              <a href={`tel:${business.phoneRaw}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-semibold text-cta-foreground shadow-cta">
                <Phone className="h-4 w-4" /> Call {business.phone}
              </a>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}