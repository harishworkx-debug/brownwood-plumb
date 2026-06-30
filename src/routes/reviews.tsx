import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { business, testimonials } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { reviewSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Brownwood Plumber | M. Webb Plumbing Co." },
      { name: "description", content: "Read 5-star reviews from M. Webb Plumbing Co. customers across Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX." },
      { property: "og:title", content: "M. Webb Plumbing Co. Reviews — Brownwood, TX" },
      { property: "og:description", content: "What Brown County customers are saying about M. Webb Plumbing Co." },
      { property: "og:url", content: `${BASE_URL}/reviews` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/reviews` }],
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Reviews</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">What <span className="text-gradient-brand">Brownwood</span> is saying</h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-5 inline-flex items-center gap-1 text-cta">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
              <span className="ml-3 text-base font-semibold text-white">5.0 average from local customers</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionEyebrow>Customer Stories</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Real reviews from real neighbors</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-1 text-cta">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 font-bold text-brand-deep">{t.name[0]}</span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner title="Ready to experience the difference?" subtitle="Join hundreds of satisfied Brown County customers — call today." />
      <div className="h-24" />
      <JsonLd data={reviewSchema(testimonials)} />
    </>
  );
}