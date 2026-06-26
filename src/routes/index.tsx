import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock4, Award, Wrench, Star, ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { business, services, testimonials, serviceAreas } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema, reviewSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plumber in Brownwood, TX | Emergency & Residential Plumbing | M. Webb Plumbing" },
      { name: "description", content: "M. Webb Plumbing provides residential, commercial, and 24-hour emergency plumbing services in Brownwood, TX. Trusted local plumbers with over 35 years of experience." },
      { name: "keywords", content: "plumber brownwood tx, emergency plumbing, residential plumbing, commercial plumbing, local plumber" },
      { property: "og:title", content: "Plumber in Brownwood, TX | Emergency & Residential Plumbing | M. Webb Plumbing" },
      { property: "og:description", content: "M. Webb Plumbing provides residential, commercial, and 24-hour emergency plumbing services in Brownwood, TX. Trusted local plumbers with over 35 years of experience." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

const trustBadges = [
  { icon: Award, label: "35+ Years Experience" },
  { icon: ShieldCheck, label: "Licensed Professionals" },
  { icon: Clock4, label: "24/7 Emergency Service" },
  { icon: Wrench, label: "Residential & Commercial" },
];

const faqs = [
  { q: "Do you offer 24-hour emergency plumbing in Brownwood, TX?", a: "Yes. M. Webb Plumbing Co. provides 24-hour on-call emergency plumbing services for burst pipes, major leaks, overflowing fixtures and other urgent issues across Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX." },
  { q: "How quickly can a plumber arrive at my home?", a: "We pride ourselves on fast response times. Most emergency calls in Brownwood and surrounding areas are answered the same day, with many serviced within the hour." },
  { q: "Are you licensed and insured?", a: "Yes — M. Webb Plumbing Co. LLC is fully licensed and insured for both residential and commercial plumbing work in Texas." },
  { q: "Do you handle commercial plumbing?", a: "Absolutely. We service offices, restaurants, retail spaces and industrial properties throughout the Brownwood area with the same care and quality as our residential work." },
  { q: "How much does a plumbing repair cost?", a: "Pricing depends on the issue. We give honest, upfront estimates before any work begins — no surprises. (325) 328-0435 for a free estimate." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute inset-0 wave-divider opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8 lg:pt-24 lg:pb-28">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-cta" /> Brownwood's Trusted Plumbers Since 35+ Years
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Trusted Plumbing Experts in <span className="text-gradient-brand">Brownwood, TX</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
                Professional residential & commercial plumbing services backed by 35+ years of honest workmanship, fast response, and real local expertise.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-cta transition hover:scale-[1.02]">
                  <Phone className="h-4 w-4" /> Call {business.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                  Request Free Estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
           
          </div>

         <Reveal delay={320}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {trustBadges.map((b) => (
                  <li key={b.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-cta/20 text-cta">
                      <b.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white/90">{b.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
        </div>

        {/* Marquee strip */}
        <div className="relative border-t border-white/10 bg-black/10 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60 lg:px-8">
            <span>Brownwood</span><span className="text-cta">•</span>
            <span>Early</span><span className="text-cta">•</span>
            <span>Bangs</span><span className="text-cta">•</span>
            <span>Lake Brownwood</span><span className="text-cta">•</span>
            <span>Zephyr</span><span className="text-cta">•</span>
            <span>24-Hour Emergency Service</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionEyebrow>About M. Webb Plumbing</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Honest workmanship, fast response, and three decades of local know-how.
              </h2>
              <p className="mt-5 text-foreground/75">
                M. Webb Plumbing Co. LLC is a locally owned plumbing company based right here in Brownwood, Texas. For more than 35 years, owner Mike Webb has built a reputation across Brown County for doing the job right the first time — at a fair price, with respect for your home or business.
              </p>
              <p className="mt-4 text-foreground/75">
                From a leaky faucet to a full plumbing system replacement, you'll get the same straightforward advice, clean workmanship and reliable follow-through that's made us the plumber locals call when it really matters.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { n: "35+", l: "Years Experience" },
                  { n: "24/7", l: "Emergency Service" },
                  { n: "5★", l: "Local Reputation" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                    <div className="font-display text-2xl font-bold text-brand-deep">{s.n}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                  Our Story <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                  <Phone className="h-4 w-4" /> {business.phone}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/20 to-cta/20 blur-2xl" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, t: "Licensed & Insured", d: "Fully licensed plumbers serving Brown County, TX." },
                  { icon: Clock4, t: "Fast Response", d: "Same-day appointments and 24-hour emergency calls." },
                  { icon: Award, t: "Quality Workmanship", d: "Done right the first time — guaranteed satisfaction." },
                  { icon: MapPin, t: "Locally Trusted", d: "Family-owned, deeply rooted in the Brownwood community." },
                ].map((c, i) => (
                  <div key={c.t} className={`rounded-2xl border border-border bg-card p-5 shadow-elegant ${i % 2 ? "translate-y-6" : ""}`}>
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand-deep">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold">{c.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="bg-surface-muted">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Plumbing Services</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Full-service plumbing for homes and businesses</h2>
            <p className="mt-4 text-foreground/70">From small repairs to full system replacements, we handle every plumbing need across Brownwood and surrounding areas.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to={("/" + s.slug) as never}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 transition group-hover:bg-cta/15" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-elegant">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EMERGENCY */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cta/40 bg-cta/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                <span className="h-1.5 w-1.5 rounded-full bg-cta water-pulse" /> 24-Hour Emergency
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold md:text-5xl">24-Hour Emergency Plumber in Brownwood, TX</h2>
              <p className="mt-4 max-w-xl text-white/75">
                Burst pipe at 2 AM? Water gushing into your kitchen? Don't wait — every minute of an active leak means more damage. We're on-call around the clock for urgent plumbing emergencies across Brown County.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {["Burst pipes & flooding","Major water leaks","Water line emergencies","Overflowing fixtures","Sewer & drain backups","Urgent plumbing repairs"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-white/85"><CheckCircle2 className="h-4 w-4 text-cta" /> {t}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-cta">
                  <Phone className="h-4 w-4" /> Call Now {business.phone}
                </a>
                <Link to="/emergency-plumbing" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
                  Emergency Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-elegant">
              <div className="absolute -top-6 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-cta text-cta-foreground shadow-cta">
                <Phone className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/60">Emergency Hotline</p>
              <a href={`tel:${business.phoneRaw}`} className="mt-2 block font-display text-4xl font-bold text-white">{business.phone}</a>
              <p className="mt-4 text-sm text-white/70">Available 24 hours · 7 days a week across Brownwood, Early, Bangs, Lake Brownwood & Zephyr, TX.</p>
              <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">
                <strong className="text-white">Pro tip:</strong> Shut off your home's main water valve immediately if you have an active leak — then call us.
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Why Choose Us</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Brownwood's go-to plumber for over three decades</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, t: "35+ Years Experience", d: "Decades of real-world plumbing knowledge applied to every call." },
            { icon: Clock4, t: "Fast Response Times", d: "Same-day service and a true 24-hour emergency line." },
            { icon: MapPin, t: "Locally Trusted Company", d: "Family-owned, deeply rooted in the Brownwood community." },
            { icon: Wrench, t: "Residential & Commercial Experts", d: "From homes to restaurants, we do it all." },
            { icon: ShieldCheck, t: "Quality Workmanship", d: "Done right the first time — we stand behind our work." },
            { icon: Phone, t: "Emergency Service Available", d: "24-hour on-call plumbing when you need us most." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-elegant">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand-deep transition group-hover:bg-cta/15 group-hover:text-cta">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-foreground/70">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section className="bg-surface-muted">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Service Areas</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Proudly serving Brown County, Texas</h2>
              <p className="mt-3 max-w-xl text-foreground/70">Local, dependable plumbing across Brownwood and the surrounding communities we call home.</p>
            </div>
            <Link to="/service-areas" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              All Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceAreas.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <Link to="/service-areas/$slug" params={{ slug: a.slug }} className="group block rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-elegant">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand-deep group-hover:bg-cta/15 group-hover:text-cta">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold">{a.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Plumber</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Customer Reviews</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">What our Brownwood neighbors say</h2>
            <div className="mt-3 inline-flex items-center gap-1 text-cta">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-foreground">5.0 from local customers</span>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
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

      {/* FAQ */}
      <Section className="bg-surface-muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <SectionEyebrow>FAQs</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Common plumbing questions in Brownwood, TX</h2>
              <p className="mt-4 text-foreground/70">Still have questions? Call Mike directly at <a href={`tel:${business.phoneRaw}`} className="font-semibold text-brand-deep underline-offset-4 hover:underline">{business.phone}</a>.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-2xl border border-border bg-card p-5 open:shadow-elegant">
                  <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold">
                    {f.q}
                    <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-secondary text-foreground transition group-open:rotate-45 group-open:bg-cta group-open:text-cta-foreground">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner />
      <div className="h-24" />

      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={reviewSchema(testimonials)} />
    </>
  );
}
