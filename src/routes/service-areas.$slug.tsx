import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MapPin, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { business, services, serviceAreas } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CTABanner } from "@/components/site/CTABanner";

const areaContent: Record<string, { intro: string; long: string }> = {
  "brownwood-tx": {
    intro: "M. Webb Plumbing Co. is headquartered in Brownwood and has been the local plumber families and businesses count on for over 35 years.",
    long: "As your hometown plumber, we know Brownwood's older neighborhoods, newer developments, and everything in between. From slab leaks in homes near Coggin Park to commercial plumbing for downtown businesses, we've worked on practically every type of property in the city. When you call us, you get a true local — same-day service whenever possible, fair pricing, and work that holds up.",
  },
  "early-tx": {
    intro: "Early is right next door, and we treat it like our own backyard. Trusted residential and commercial plumbing service throughout Early, TX.",
    long: "We service homes and businesses across Early, TX with the same care and quality we bring to every Brownwood call. Whether you need a fast emergency response, a faucet replaced, or a full plumbing system upgrade, our crew is just minutes away.",
  },
  "bangs-tx": {
    intro: "Reliable plumbing service for Bangs, TX homeowners and businesses — fast response, fair prices, real local experience.",
    long: "Bangs deserves a plumber who actually shows up. We've been serving Bangs and the surrounding Brown County communities for decades, with the same honest workmanship locals have come to expect from M. Webb Plumbing Co.",
  },
  "lake-brownwood-tx": {
    intro: "Lake Brownwood properties come with their own plumbing challenges — long supply lines, well systems, lake homes. We know them all.",
    long: "From year-round residences to weekend lake houses, Lake Brownwood properties often need a plumber who understands their unique systems. We service the entire Lake Brownwood area with everything from routine repairs to full system replacements.",
  },
  "zephyr-tx": {
    intro: "Zephyr, TX residents trust M. Webb Plumbing Co. for prompt, professional plumbing service — rural, residential, or commercial.",
    long: "Out in Zephyr, having a plumber willing to come to you matters. We proudly serve Zephyr homes and properties with the full range of plumbing services — including 24-hour emergency response when you really need it.",
  },
};

export const Route = createFileRoute("/service-areas/$slug")({
  loader: ({ params }) => {
    const area = serviceAreas.find((a) => a.slug === params.slug);
    if (!area) throw notFound();
    return { area, content: areaContent[params.slug]! };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { area } = loaderData;
    const title = `Plumber in ${area.name} | M. Webb Plumbing Co.`;
    const desc = `Trusted local plumber in ${area.name}. Residential, commercial & 24-hour emergency plumbing. Call +13253280435 for fast service.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/service-areas/${area.slug}` },
      ],
      links: [{ rel: "canonical", href: `/service-areas/${area.slug}` }],
    };
  },
  component: Page,
});

function Page() {
  const { area, content } = Route.useLoaderData();
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
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15">Get Free Estimate <ArrowRight className="h-4 w-4" /></Link>
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
                {["35+ years of local experience", "Same-day appointments when possible", "True 24-hour emergency service", "Honest, upfront pricing", "Residential & commercial work", "Licensed and insured"].map((b) => (
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

      <CTABanner title={`Need a plumber in ${area.name}?`} subtitle="We're local, fast, and easy to reach. Call now or request a free estimate." />
      <div className="h-24" />
    </>
  );
}