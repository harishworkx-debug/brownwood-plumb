import { Link } from "@tanstack/react-router";
import { MapPin, Phone, CircleCheck as CheckCircle2, ArrowRight } from "lucide-react";
import { business, services, serviceAreas } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { locationBusinessSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const areaContent: Record<string, { intro: string; long: string }> = {
  "brownwood-tx": {
    intro: "M. Webb Plumbing Co. is headquartered in Brownwood and has been connecting families to local plumbers for over 35 years.",
    long: "As your hometown plumber connection service, we know Brownwood's older neighborhoods, newer developments, and everything in between. We've helped connect homeowners for practically every type of residential property in the city. When you call, you get connected with a true local — same-day service whenever possible, fair pricing, and work that holds up.",
  },
  "early-tx": {
    intro: "Early is right next door, and we treat it like our own backyard. Connect with trusted residential plumbing services throughout Early, TX.",
    long: "We help connect homes across Early, TX with quality plumbers. Whether you need a fast emergency response, a faucet replaced, or a full plumbing system upgrade, local professionals are just minutes away.",
  },
  "bangs-tx": {
    intro: "Reliable plumbing service for Bangs, TX homeowners — fast response, fair prices, real local experience.",
    long: "Bangs deserves a plumber who actually shows up. We connect Bangs and the surrounding Brown County communities with honest workmanship from experienced local plumbers.",
  },
  "lake-brownwood-tx": {
    intro: "Lake Brownwood properties come with their own plumbing challenges — long supply lines, well systems, lake homes. We know them all.",
    long: "From year-round residences to weekend lake houses, Lake Brownwood properties often need a plumber who understands their unique systems. We service the entire Lake Brownwood area with everything from routine repairs to full system replacements.",
  },
  "zephyr-tx": {
    intro: "Zephyr, TX residents trust M. Webb Plumbing to connect them with prompt, professional plumbing service for rural or residential properties.",
    long: "Out in Zephyr, having a plumber willing to come to you matters. We proudly connect Zephyr homes and properties with the full range of plumbing services — including 24-hour emergency response when you really need it.",
  },
  "blanket-tx": {
    intro: "Blanket, TX homeowners receive the same reliable plumbing service we've provided across Brown County for over 35 years.",
    long: "We've extended our service coverage to include Blanket and surrounding rural areas. Whether you need emergency repairs, routine maintenance, or new installations, our experienced team brings professional plumbing services right to your door.",
  },
  "may-tx": {
    intro: "Serving May, TX with professional plumbing services and emergency response for homes.",
    long: "We connect the May area with experienced plumbers for everything from fixing drips and clearing drains to full system installations. We understand rural Texas properties and provide dependable residential plumbing solutions.",
  },
  "brookesmith-tx": {
    intro: "Brookesmith, TX receives dedicated plumbing support from M. Webb Plumbing Co.'s experienced team.",
    long: "As part of the Brown County community, Brookesmith residents can rely on us for all their plumbing needs. We provide prompt service, fair pricing, and quality workmanship on every job.",
  },
  "comanche-tx": {
    intro: "Comanche, TX residents receive trusted plumbing services from the team that's served Central Texas for over 35 years.",
    long: "We connect Comanche County with quality workmanship and honest service for Central Texas homes. From water heater repairs to emergency plumbing, find professionals when you need them.",
  },
  "coleman-tx": {
    intro: "Coleman, TX homeowners get reliable plumbing service from professionals with 35+ years of experience.",
    long: "Serving Coleman County, we connect you with residential plumbing experts who bring care and professionalism to every job. Emergency service, repairs, and installations are all part of what they do.",
  },
  "santa-anna-tx": {
    intro: "Santa Anna, TX residents receive trusted plumbing services from the team that's served Central Texas for over 35 years.",
    long: "We've expanded our service coverage to Santa Anna and throughout Coleman County, bringing the same honest workmanship and reliable service to every call. Whether you need emergency repairs, drain cleaning, or water heater service, we're here when you need us.",
  },
  "rising-star-tx": {
    intro: "Rising Star, TX homeowners receive the same reliable plumbing service we've provided across Central Texas for over 35 years.",
    long: "Serving Rising Star and Eastland County, we bring professional plumbing expertise to rural Texas properties. From emergency repairs to routine maintenance, our experienced team provides the same quality workmanship and fair pricing we're known for throughout the region.",
  },
};

const defaultContent = {
  intro: "Trusted plumbing services for homes from M. Webb Plumbing — connecting Central Texas to experts for over 35 years.",
  long: "We're proud to connect professional plumbing services throughout Central Texas. Whether you need emergency repairs, routine maintenance, or new installations, we find you an experienced team that brings quality workmanship and fair pricing to every job.",
};

export function AreaPageShell({ area, content }: { area: any, content: any }) {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-16 pt-16 text-primary-foreground md:pt-24">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cta/30 blur-3xl float-slow" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:px-8">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"><MapPin className="h-3.5 w-3.5 text-cta" /> Service Area</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">Plumber in <span className="text-gradient-brand">{area.name}</span></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl text-lg text-white/80">{content.intro}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-cta"><Phone className="h-4 w-4" /> Call {business.phone}</a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">Get Connected <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="glass-dark rounded-2xl p-5 text-white">
              <h2 className="font-display text-lg font-semibold">Request service in {area.name}</h2>
              <p className="mt-1 text-sm text-white/70">Quick reply during business hours, 24/7 for emergencies.</p>
              <div className="mt-4"><QuoteForm compact /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div>
              <SectionEyebrow>Local plumbing in {area.name}</SectionEyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Why locals call us</h2>
              <p className="mt-5 leading-relaxed text-foreground/80">{content.long}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {["35+ years of local experience", "Same-day appointments when possible", "True 24-hour emergency service", "Honest, upfront pricing", "Dedicated residential plumbing", "Licensed and insured"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cta" /> {b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <aside className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <h3 className="font-display text-lg font-bold">Services available in {area.name}</h3>
              <ul className="mt-4 grid gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={("/" + s.slug) as never} className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-foreground/80 hover:border-border hover:bg-secondary">
                      <span className="inline-flex items-center gap-2"><Icon name={s.icon} className="h-4 w-4 text-brand-deep" /> {s.title}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-cta" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </Section>

      <CTABanner title={`Need a plumber in ${area.name}?`} subtitle="We connect you with local, fast, and easy-to-reach plumbers. Call now or request an estimate." />
      <div className="h-24" />
      <JsonLd data={locationBusinessSchema(area.name, "lat" in area ? area.lat : 31.702854, "lat" in area ? area.lng : -98.990455)} />
    </>
  );
}