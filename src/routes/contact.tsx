import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact M. Webb Plumbing | Brownwood, TX" },
      { name: "description", content: "Contact M. Webb Plumbing for residential and emergency plumbing services in Brownwood, TX. Call today to request an estimate." },
      { name: "keywords", content: "contact plumber, plumbing quote, brownwood plumber, emergency plumber" },
      { property: "og:title", content: "Contact M. Webb Plumbing | Brownwood, TX" },
      { property: "og:description", content: "Contact M. Webb Plumbing for residential and emergency plumbing services in Brownwood, TX. Call today to request an estimate." },
      { property: "og:url", content: `${BASE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/contact` }],
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Contact Us</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">Talk to a real local <span className="text-gradient-brand">plumber today</span></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Call or email our team directly — we respond fast, with 24/7 emergency service available.</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-5">
              <SectionEyebrow>Get in touch</SectionEyebrow>
              <h2 className="font-display text-3xl font-bold">Contact information</h2>
              <div className="space-y-3">
                {[
                  { icon: MapPin, label: "Address", value: business.address },
                  { icon: Phone, label: "Phone", value: business.phone, href: `tel:${business.phoneRaw}` },
                  { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
                  { icon: Clock, label: "Hours", value: "Mon–Fri 8:00 AM – 5:00 PM\nSat & Sun: Closed\n24-Hour Emergency Service Available" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand/10 text-brand-deep"><c.icon className="h-5 w-5" /></span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="mt-0.5 block text-base font-semibold text-foreground hover:text-brand-deep">{c.value}</a>
                      ) : (
                        <div className="mt-0.5 whitespace-pre-line text-sm font-medium text-foreground">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
                <iframe
                  src={business.mapEmbed}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="M. Webb Plumbing Co. on Google Maps"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand-deep uppercase tracking-wider">
                Direct Call Service
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold">Call for Fast Phone Estimates</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Skip the online forms and delayed email replies. When you call M. Webb Plumbing, you speak directly with our local plumbing team for immediate advice and scheduling.
              </p>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-brand/10 to-transparent border border-brand/20 p-6 text-center">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Direct Dispatch & Customer Care</div>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-cta px-6 py-4 text-lg font-bold text-cta-foreground shadow-cta transition hover:scale-105"
                >
                  <Phone className="h-5 w-5" /> {business.phone}
                </a>
                <p className="mt-2 text-xs text-muted-foreground">Available 24/7 for True Plumbing Emergencies</p>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="font-semibold text-sm text-foreground">Why Brown County Calls Mike Webb Directly:</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-cta font-bold">✓</span>
                    <span><strong>Instant answers:</strong> Discuss your leak, water heater, or drain problem with an experienced plumber immediately.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cta font-bold">✓</span>
                    <span><strong>Rapid arrival:</strong> 45–60 minute response times across Brownwood, Early, and surrounding areas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cta font-bold">✓</span>
                    <span><strong>Photo & blueprint reviews:</strong> Need to share inspection reports or photos? Email us directly at <a href={`mailto:${business.email}`} className="text-brand-deep underline font-medium">{business.email}</a>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <div className="h-24" />
    </>
  );
}