import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Clock4, Wrench, MapPin, Phone, Users, Heart } from "lucide-react";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About M. Webb Plumbing | Brownwood, TX" },
      { name: "description", content: "Learn about M. Webb Plumbing, a local plumbing company providing Brownwood, TX homeowners with reliable residential plumbing who provide honest workmanship." },
      { property: "og:title", content: "About M. Webb Plumbing | Brownwood, TX" },
      { property: "og:description", content: "Learn about M. Webb Plumbing, a local plumbing company providing Brownwood, TX homeowners with reliable residential plumbing who provide honest workmanship." },
      { property: "og:url", content: `${BASE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-20 pt-20 text-primary-foreground md:pt-28">
        <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">About M. Webb Plumbing Co.</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">Trusted Brownwood plumbers for <span className="text-gradient-brand">35+ years</span></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Honest workmanship. Fair pricing. Real local roots. Find it all with M. Webb Plumbing.</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionEyebrow>Our Mission</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Providing you with honest and dependable plumbing services.</h2>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                <p>M. Webb Plumbing is a dedicated services based in Brownwood, Texas. We provide homeowners across Brown County with the kind of straightforward, dependable residential plumbing service that's harder and harder to find these days.</p>
                <p>We're not a faceless franchise. When you use our service, you're hiring local professionals who genuinely care about doing right by our neighbors. They show up when they say they will, explain the problem in plain English, quote fair prices upfront, and treat your home with respect.</p>
                <p>From a small dripping faucet to a complete repipe, or a midnight residential emergency — we ensure you can find the right professional for the job.</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Our Services</Link>
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground"><Phone className="h-4 w-4" /> {business.phone}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, t: "Local Expertise", d: "Decades of experience with Brown County's homes, soils, and plumbing systems." },
                { icon: Heart, t: "Honest Workmanship", d: "Work with professionals who tell you what's wrong, what it'll cost, and what your options are." },
                { icon: Clock4, t: "Reliable Service", d: "Local providers show up on time and finish the job right." },
                { icon: Users, t: "Customer Satisfaction", d: "A network of providers trusted by repeat customers and word-of-mouth referrals." },
                { icon: ShieldCheck, t: "Fast Response", d: "Same-day appointments and true 24-hour emergency availability." },
                { icon: MapPin, t: "Community First", d: "Family-owned, deeply rooted, and proud to serve our Brownwood neighbors." },
              ].map((v, i) => (
                <div key={v.t} className={`rounded-2xl border border-border bg-card p-5 shadow-sm ${i % 2 ? "sm:translate-y-6" : ""}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand-deep"><v.icon className="h-5 w-5" /></span>
                  <h3 className="mt-3 font-display text-base font-bold">{v.t}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface-muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "35+", l: "Years of Experience" },
            { n: "5★", l: "Average Local Rating" },
            { n: "24/7", l: "Emergency Availability" },
            { n: "100%", l: "Locally Owned" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="font-display text-4xl font-bold text-brand-deep">{s.n}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner title="Talk to a local professional" subtitle="No runaround. Just an experienced local plumber on the other end of the line." />
      <div className="h-24" />
    </>
  );
}