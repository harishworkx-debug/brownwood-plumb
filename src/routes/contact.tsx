import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact M. Webb Plumbing Co. — Brownwood, TX Plumber" },
      { name: "description", content: "Contact M. Webb Plumbing Co. in Brownwood, TX. (325) 328-0435, email webbplumbing@verizon.net, or request a free estimate online." },
      { property: "og:title", content: "Contact — M. Webb Plumbing Co., Brownwood TX" },
      { property: "og:description", content: "Get in touch with M. Webb Plumbing Co. for a free estimate or 24-hour emergency service." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Call, email or fill out the form below — we respond fast, and 24/7 for emergencies.</p>
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
              <h2 className="font-display text-2xl font-bold">Request a free estimate</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us about your plumbing project and we'll get right back to you.</p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <div className="h-24" />
    </>
  );
}