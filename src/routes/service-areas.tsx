import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { serviceAreas } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | Brown County Plumber | M. Webb Plumbing" },
      { name: "description", content: "M. Webb Plumbing proudly serves Brownwood, Early, Bangs, Lake Brownwood, Zephyr, and surrounding Brown County communities with reliable plumbing services." },
      { property: "og:title", content: "Service Areas | Brown County Plumber | M. Webb Plumbing" },
      { property: "og:description", content: "M. Webb Plumbing proudly serves Brownwood, Early, Bangs, Lake Brownwood, Zephyr, and surrounding Brown County communities with reliable plumbing services." },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-20 pt-20 text-primary-foreground md:pt-28">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Service Areas</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">Local plumber across <span className="text-gradient-brand">Brown County, TX</span></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Proudly serving Brownwood and the surrounding communities with full-service plumbing for over 35 years.</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionEyebrow>Where we work</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Choose your location</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <Link to="/service-areas/$slug" params={{ slug: a.slug }} className="group block rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-elegant">
                  <MapPin className="h-5 w-5" />
                </span>
                <Link to="/service-areas/$slug" params={{ slug: a.slug }} className="mt-5 block font-display text-lg font-bold text-brand hover:text-brand-deep transition underline decoration-2 underline-offset-2">
                  Plumber in {a.name}
                </Link>
                <p className="mt-2 text-sm text-foreground/70">Residential, commercial and 24-hour emergency plumbing services in {a.name}.</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">View area <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner />
      <div className="h-24" />
    </>
  );
}