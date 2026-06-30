import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { business, services } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Explore our complete plumbing services in Brownwood, TX, including residential, commercial, emergency plumbing, leak detection, water line repair, and more." },
      { property: "og:title", content: "Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Explore our complete plumbing services in Brownwood, TX, including residential, commercial, emergency plumbing, leak detection, water line repair, and more." },
      { property: "og:url", content: `${BASE_URL}/services` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-20 pt-20 text-primary-foreground md:pt-28">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Plumbing Services</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">Complete plumbing services across <span className="text-gradient-brand">Brownwood, TX</span></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Everything from a quick faucet repair to a full plumbing system replacement — handled by an experienced local team you can trust.</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionEyebrow>What we offer</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Pick a service to learn more</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <Link to={("/" + s.slug) as never} className="group block h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-elegant">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
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