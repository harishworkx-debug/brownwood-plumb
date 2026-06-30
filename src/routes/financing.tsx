import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "Plumbing Financing | Affordable Payment Plans | M. Webb Plumbing Brownwood TX" },
      { name: "description", content: "Flexible financing options for plumbing services in Brownwood, TX. Get the repairs you need now with affordable monthly payments. Call (325) 328-0435 to discuss options." },
      { property: "og:title", content: "Plumbing Financing | M. Webb Plumbing" },
      { property: "og:description", content: "Flexible financing options available. Get plumbing services now, pay over time." },
      { property: "og:url", content: `${BASE_URL}/financing` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/financing` }],
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              <ShieldCheck className="h-3.5 w-3.5" /> Financing Available
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              Get the plumbing you need <span className="text-gradient-brand">now, pay over time</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Don't let a plumbing emergency strain your budget. We offer flexible financing options so you can get essential repairs and upgrades without delay.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-cta"
              >
                <Phone className="h-4 w-4" /> Call to Discuss Options
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionEyebrow>Flexible Payment Options</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Plumbing services made affordable</h2>
              <p className="mt-5 text-foreground/80">
                We believe every Brownwood homeowner and business deserves access to quality plumbing services — even when the unexpected happens. Whether it's an emergency repair, a necessary replacement, or a planned upgrade, financing helps make it manageable.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { title: "Emergency Repairs", desc: "Don't wait until you can afford it — get the fix now and pay over time." },
                  { title: "Water Heater Replacement", desc: "Affordable monthly payments for a new energy-efficient water heater." },
                  { title: "Whole-House Repiping", desc: "Major plumbing projects are more accessible with financing." },
                  { title: "Commercial Projects", desc: "Keep your business running with flexible payment terms." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-display text-base font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h3 className="font-display text-xl font-bold">How Financing Works</h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand/10 text-sm font-bold text-brand-deep">1</span>
                  <div>
                    <h4 className="font-semibold">Request a Quote</h4>
                    <p className="mt-1 text-sm text-foreground/70">Get a free estimate for the work you need, either by phone or online.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand/10 text-sm font-bold text-brand-deep">2</span>
                  <div>
                    <h4 className="font-semibold">Discuss Payment Options</h4>
                    <p className="mt-1 text-sm text-foreground/70">Tell us financing would help. We'll review available options with you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand/10 text-sm font-bold text-brand-deep">3</span>
                  <div>
                    <h4 className="font-semibold">Get Quick Approval</h4>
                    <p className="mt-1 text-sm text-foreground/70">Most applications take only minutes. Many are approved on the spot.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand/10 text-sm font-bold text-brand-deep">4</span>
                  <div>
                    <h4 className="font-semibold">Complete Your Project</h4>
                    <p className="mt-1 text-sm text-foreground/70">We perform the work, and you make affordable monthly payments.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-primary/5 p-4">
                <p className="text-sm text-foreground/80">
                  <strong className="text-foreground">Subject to credit approval.</strong> Financing through third-party lenders. Terms, rates, and availability vary. Ask for details.
                </p>
              </div>

              <a
                href={`tel:${business.phoneRaw}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-semibold text-cta-foreground shadow-cta"
              >
                <Phone className="h-4 w-4" /> Call to Ask About Financing
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner title="Let's find a payment option that works for you" subtitle="Call {business.phone} to discuss financing for your plumbing project." />
      <div className="h-24" />
    </>
  );
}
