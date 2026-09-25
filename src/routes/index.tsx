import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock4, Award, Wrench, Star, ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { business, services, testimonials, serviceAreas, faqs } from "@/data/business";
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
      { title: "Plumber in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Professional local Brownwood plumbing company offering residential plumbing, water heaters, drain & sewer, and leak repair. Trusted since 1990." },
      { name: "keywords", content: "plumber Brownwood TX, local plumber Brownwood, residential plumbing Brownwood, emergency plumbing Brownwood" },
      { property: "og:title", content: "Plumber in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Professional local Brownwood plumbing company offering residential plumbing, water heaters, drain & sewer, and leak repair. Trusted since 1990." },
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
  { icon: Wrench, label: "Residential Services" },
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
                <Sparkles className="h-3.5 w-3.5 text-cta" /> Professional Plumbing in Brownwood
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Plumber in <span className="text-gradient-brand">Brownwood, TX</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
                Professional residential plumbing services backed by honest workmanship, fast response, and real local expertise since 1990.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-cta transition hover:scale-[1.02]">
                  <Phone className="h-4 w-4" /> Call {business.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                  Request An Estimate <ArrowRight className="h-4 w-4" />
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
              <SectionEyebrow>About M. Webb Plumbing Co.</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Honest workmanship, fast response, and decades of local know-how.
              </h2>
              <p className="mt-5 text-foreground/75">
                M. Webb Plumbing Co. has been a trusted service provider in Brownwood, Texas since 1990. We are dedicated to doing the job right the first time — at a fair price, with respect for your home.
              </p>
              <p className="mt-4 text-foreground/75">
                From a leaky faucet to a full plumbing system replacement, our professionals provide straightforward advice, clean workmanship, and reliable follow-through.
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
                  { icon: Award, t: "Quality Workmanship", d: "Done right the first time by experienced professionals." },
                  { icon: MapPin, t: "Locally Trusted", d: "Reliable plumbers rooted in the Brownwood community since 1990." },
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
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Plumbing Services in Brownwood, TX</h2>
            <p className="mt-4 text-foreground/70">From small repairs to full system replacements, we provide professional solutions for every plumbing need across Brownwood and surrounding areas.</p>
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
                Burst pipe at 2 AM? Water gushing into your kitchen? Don't wait — every minute of an active leak means more damage. We provide on-call emergency plumbers around the clock for urgent plumbing emergencies across Brown County.
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
                <Link to="/emergency-plumbing-brownwood-tx" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">
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

      {/* PLUMBING REPAIR SECTION */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionEyebrow>Local Plumbing Repair</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Plumbing Repair in Brownwood, TX
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                When you need <Link to="/residential-plumbing-brownwood-tx" className="font-medium text-brand-deep underline-offset-4 hover:underline">residential plumbing repair</Link>, you want it done right the first time. M. Webb Plumbing Co. handles all types of repairs for homeowners. From <Link to="/piping-and-leaks-brownwood-tx" className="font-medium text-brand-deep underline-offset-4 hover:underline">fixing leaking pipes</Link> and <Link to="/water-heaters-brownwood-tx" className="font-medium text-brand-deep underline-offset-4 hover:underline">water heater issues</Link> to resolving low water pressure and clogged drains, our local plumbing company brings over 35 years of experience to every job.
              </p>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                We understand that dealing with plumbing issues is stressful. That's why we focus on fast response times, honest assessments, and dependable workmanship to get your plumbing system back to normal.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                 <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow">
                  Request a Repair <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Water Heater Repair",
                "Pipe & Leak Repair",
                "Drain Cleaning",
                "Toilet & Faucet Repair",
                "Gas Line Repair",
                "Sewer Line Repair"
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand-deep">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-foreground/90">{service}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Why Choose M. Webb Plumbing Co.</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Why Choose M. Webb Plumbing Co.</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, t: "Experienced Professionals", d: "Decades of real-world plumbing knowledge applied to every call." },
            { icon: Clock4, t: "Fast Response Times", d: "Same-day service and a true 24-hour emergency line." },
            { icon: MapPin, t: "Locally Trusted", d: "Reliable plumbers rooted in the Brownwood community." },
            { icon: Wrench, t: "Residential Experts", d: "From small homes to large estates, we handle it all." },
            { icon: ShieldCheck, t: "Quality Workmanship", d: "Done right the first time by dedicated professionals." },
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
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Areas We Serve</h2>
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
              <Link to={("/plumber-" + a.slug) as never} className="group block rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-elegant">
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
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-foreground/70">Still have questions? Call Mike directly at <a href={`tel:${business.phoneRaw}`} className="font-semibold text-brand-deep underline-offset-4 hover:underline">{business.phone}</a>.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-2xl border border-border bg-card p-5 open:shadow-elegant">
                  <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold">
                    {f.question}
                    <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition group-open:rotate-45 group-open:bg-cta group-open:text-cta-foreground">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner title="Contact M. Webb Plumbing Co." subtitle="Call now or request an estimate online to get your plumbing issues resolved by local experts." />
      <div className="h-24" />

      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={reviewSchema(testimonials)} />
    </>
  );
}
