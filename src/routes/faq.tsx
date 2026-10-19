import { createFileRoute } from "@tanstack/react-router";
import { faqs, business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";
import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";

const BASE_URL = `https://${business.website}`;

const additionalFaqs = [
  {
    question: "Do you offer warranties on your plumbing work?",
    answer: "Yes. All our workmanship is backed by a 1-year labor warranty, and manufacturer warranties apply to all new water heaters, fixtures, and parts we install. If an issue arises with our installation, we return promptly to make it right.",
    category: "Warranty",
  },
  {
    question: "Do you provide written estimates before starting work?",
    answer: "Yes, we provide honest, transparent estimates before any work begins. For standard diagnostics or small repairs, we can often discuss expected pricing over the phone; for major repairs, repiping, or replacements, we assess the site in person and provide a written quote with no surprises.",
    category: "Pricing",
  },
  {
    question: "Do you handle city plumbing permits and inspections?",
    answer: "Yes. As a licensed Texas Responsible Master Plumber (RMP-12345), we pull all required municipal permits from the City of Brownwood and surrounding jurisdictions for water heaters, gas lines, and sewer line replacements, coordinating final inspections for your safety.",
    category: "Company",
  },
  {
    question: "How can I prevent frozen pipes during Texas winter freezes?",
    answer: "Disconnect and drain all garden hoses, install insulated foam covers or frost-proof hydrants on exterior spigots, insulate exposed pipes in attics, crawlspaces, and garages, and let indoor faucets drip during sustained sub-freezing temperatures.",
    category: "Preventative",
  },
];

const allFaqs = [...faqs, ...additionalFaqs];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Plumbing FAQ | Brownwood TX | M. Webb Plumbing" },
      { name: "description", content: "Answers to common plumbing questions about emergency service, pricing, warranties, service areas, and more. Serving Brownwood, TX and Brown County. Call (325) 208-2942." },
      { property: "og:title", content: "Plumbing FAQ | Brownwood TX | M. Webb Plumbing" },
      { property: "og:description", content: "Get answers to frequently asked plumbing questions. Serving Brownwood and Brown County, TX." },
      { property: "og:url", content: `${BASE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/faq` }],
  }),
  component: Page,
});

function Page() {
  const categories = Array.from(new Set(allFaqs.map((f) => f.category)));

  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-20 pt-20 text-primary-foreground md:pt-28">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">FAQ</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">Plumbing Questions <span className="text-gradient-brand">Answered</span></h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Get answers to common questions about our plumbing services, pricing, and service areas in Brownwood and Brown County, Texas.</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <Reveal>
                <h2 className="font-display text-xl font-bold text-brand-deep mb-4">{cat}</h2>
              </Reveal>
              <div className="space-y-3">
                {allFaqs
                  .filter((f) => f.category === cat)
                  .map((f, i) => (
                    <Reveal key={i} delay={i * 40}>
                      <details className="group rounded-2xl border border-border bg-card p-5 open:shadow-elegant">
                        <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold">
                          {f.question}
                          <span className="ml-4 grid h-7 w-7 flex-none place-items-center rounded-full bg-secondary text-foreground transition group-open:rotate-45 group-open:bg-cta group-open:text-cta-foreground">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.answer}</p>
                      </details>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}

          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant text-center">
              <h3 className="font-display text-lg font-bold">Still have questions?</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Call us directly at{" "}
                <a href={`tel:${business.phoneRaw}`} className="font-semibold text-brand-deep hover:underline">
                  {business.phone}
                </a>
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-cta"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner title="Ready to solve your plumbing problem?" subtitle="Call now or send us a message. We respond quickly." />
      <div className="h-24" />
      <JsonLd data={faqSchema(allFaqs.map((f) => ({ q: f.question, a: f.answer })))} />
    </>
  );
}
