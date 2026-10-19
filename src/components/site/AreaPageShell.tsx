import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  CircleCheck as CheckCircle2,
  ArrowRight,
  Clock,
  Navigation,
  Wrench,
  ShieldCheck,
  HelpCircle,
  Briefcase,
} from "lucide-react";
import { business, services } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { locationBusinessSchema, faqSchema } from "@/lib/seo";
import { detailedServiceAreas } from "@/data/serviceAreasData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AreaPageShell({
  area,
  content,
}: {
  area: { slug: string; name: string; lat?: number; lng?: number; population?: string; description?: string };
  content?: { intro?: string; long?: string };
}) {
  const detail = detailedServiceAreas[area.slug];

  const introText = detail?.intro || content?.intro || `Professional residential plumbing services in ${area.name} from M. Webb Plumbing Co. 35+ years of trusted local service.`;
  const longText = content?.long || `Serving ${area.name} with reliable residential and emergency plumbing services. Locally owned and operated in Brown County.`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero pb-16 pt-16 text-primary-foreground md:pt-20">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cta/30 blur-3xl float-slow" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:px-8">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                <MapPin className="h-3.5 w-3.5 text-cta" />
                Service Area · {detail?.county || "Central Texas"}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Plumber in <span className="text-gradient-brand">{area.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">{introText}</p>
            </Reveal>

            {/* Quick Dispatch Signals */}
            {detail && (
              <Reveal delay={200}>
                <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/90">
                    <Clock className="h-4 w-4 flex-none text-cta" />
                    <span><strong>Response:</strong> {detail.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/90">
                    <Navigation className="h-4 w-4 flex-none text-cta" />
                    <span><strong>Route:</strong> {detail.highwayAccess}</span>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-cta-foreground shadow-cta transition hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" /> Call {business.phone}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
                >
                  Contact & Hours <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="glass-dark rounded-2xl p-6 text-white shadow-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-cta/20 px-2.5 py-0.5 text-xs font-semibold text-cta">
                Direct Dispatch to {area.name}
              </div>
              <h2 className="mt-3 font-display text-xl font-bold">Call for Fast Service</h2>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Direct dispatch from our Brownwood shop at 305 E Commerce St. Talk directly with our licensed plumbing crew.
              </p>
              
              <div className="mt-5 rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Brown County Dispatch</div>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-base font-bold text-cta-foreground shadow-cta transition hover:brightness-110"
                >
                  <Phone className="h-5 w-5" /> {business.phone}
                </a>
                <div className="mt-2 text-[11px] text-white/70">24/7 Response for Emergencies in {area.name}</div>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-white/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cta flex-none" /> Free Over-the-Phone Estimates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cta flex-none" /> Experienced Master Plumbers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cta flex-none" /> Zero Hidden Travel Fees
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local Insights & Characteristics */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div>
              <SectionEyebrow>Local Plumbing Profile</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                {detail ? detail.localCharacteristics.heading : `Why Locals in ${area.name} Choose M. Webb Plumbing`}
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/80">
                {detail ? detail.localCharacteristics.description : longText}
              </p>

              {detail && (
                <div className="mt-6 rounded-2xl border border-border bg-card/60 p-5 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Plumbing Factors in {area.name}
                  </h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {detail.localCharacteristics.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cta" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Issues in this Town */}
              {detail && detail.commonIssues.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold">
                    Common Plumbing Problems We Fix in {area.name}
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {detail.commonIssues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border bg-card p-4 transition hover:border-cta/40 hover:shadow-sm"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cta/10 text-cta">
                          <Wrench className="h-4 w-4" />
                        </div>
                        <h4 className="mt-3 font-semibold text-sm text-foreground">{issue.title}</h4>
                        <p className="mt-1.5 text-xs text-foreground/70 leading-relaxed">
                          {issue.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-6">
              {/* Coverage Snapshot Card */}
              {detail && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
                  <h3 className="font-display text-lg font-bold">Service Coverage Summary</h3>
                  <dl className="mt-4 divide-y divide-border text-sm">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">Location:</dt>
                      <dd className="font-semibold text-foreground text-right">{detail.name}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">County:</dt>
                      <dd className="font-semibold text-foreground text-right">{detail.county}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">Distance:</dt>
                      <dd className="font-semibold text-foreground text-right">{detail.distanceFromHQ}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">Primary Access:</dt>
                      <dd className="font-semibold text-foreground text-right">{detail.highwayAccess}</dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-muted-foreground">Emergency Hotline:</dt>
                      <dd className="font-semibold text-cta text-right">
                        <a href={`tel:${business.phoneRaw}`}>{business.phone}</a>
                      </dd>
                    </div>
                  </dl>
                </div>
              )}

              {/* Services List Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
                <h3 className="font-display text-lg font-bold">Services Available in {area.name}</h3>
                <ul className="mt-4 grid gap-1.5">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={("/" + s.slug) as never}
                        className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-foreground/80 hover:border-border hover:bg-secondary transition"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Icon name={s.icon} className="h-4 w-4 text-brand-deep" />
                          {s.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-cta" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* Real Local Projects Section */}
      {detail && detail.recentProjects.length > 0 && (
        <section className="bg-secondary/40 py-16 border-y border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                  <Briefcase className="h-3.5 w-3.5 text-cta" />
                  Local Field Experience
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                  Recent Plumbing Work in & around {area.name}
                </h2>
                <p className="mt-3 text-foreground/70">
                  Examples of real residential and emergency jobs completed by our licensed plumbers in this community.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {detail.recentProjects.map((proj, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div>
                      <span className="inline-block rounded-full bg-cta/10 px-3 py-1 text-xs font-semibold text-cta">
                        {proj.category}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold text-brand-deep">
                      <ShieldCheck className="h-4 w-4 text-cta" />
                      Completed to Texas Plumbing Code
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City-Specific FAQs */}
      {detail && detail.faqs.length > 0 && (
        <Section>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <SectionEyebrow>Local Questions</SectionEyebrow>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                  Plumbing FAQs for {area.name} Homeowners
                </h2>
                <p className="mt-3 text-foreground/70">
                  Clear, honest answers to common questions about plumbing service, travel, and water conditions in {area.name}.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  {detail.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-cta">
                        <span className="inline-flex items-center gap-2.5">
                          <HelpCircle className="h-4 w-4 flex-none text-cta" />
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-foreground/80 pl-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* CTA Banner */}
      <CTABanner
        title={`Need a Licensed Plumber in ${area.name}?`}
        subtitle={`From urgent repairs to routine installations, Mike Webb Plumbing delivers fast response and fair, upfront pricing in ${area.name}.`}
      />

      <div className="h-20" />

      {/* Structured Data */}
      <JsonLd
        data={locationBusinessSchema(
          area.name,
          "lat" in area && area.lat ? area.lat : 31.702854,
          "lng" in area && area.lng ? area.lng : -98.990455
        )}
      />

      {detail && detail.faqs.length > 0 && (
        <JsonLd data={faqSchema(detail.faqs.map((f) => ({ q: f.q, a: f.a })))} />
      )}
    </>
  );
}