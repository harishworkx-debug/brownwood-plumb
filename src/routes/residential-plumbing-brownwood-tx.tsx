import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "Do you offer upfront estimates before starting home plumbing repairs?",
    a: "Yes. Our technician diagnoses the problem, explains the solution, and provides an upfront, written price quote before beginning any repair work. You will never experience surprise fees or hidden add-ons on your bill."
  },
  {
    q: "What is included in an annual residential plumbing maintenance visit?",
    a: "Our annual maintenance checkup includes flushing sediment from your water heater tank, testing temperature and pressure relief valves, checking static household water pressure, inspecting emergency shutoff valves under every sink and toilet, checking washing machine supply hoses, and testing exposed crawlspace piping for early signs of corrosion or leaks."
  },
  {
    q: "How do I know whether my plumbing needs a quick repair or a complete replacement?",
    a: "If an issue is isolated to a single fixture (such as a worn faucet cartridge or a toilet flapper) and the surrounding piping is sound, a targeted repair is the best route. If your pipes are original galvanized iron suffering from recurrent pinhole leaks throughout the home, continuous spot repairs will cost more over time than an engineered whole-home Uponor PEX replacement."
  },
  {
    q: "Are your plumbers licensed and insured in the state of Texas?",
    a: "Yes. All work is performed under Texas State Board of Plumbing Examiners (TSBPE) licensed Master Plumber supervision, and our business carries comprehensive general liability and workers' compensation coverage for your complete peace of mind."
  }
];

export const Route = createFileRoute("/residential-plumbing-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Residential Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Complete home plumbing repairs, installations, maintenance, and replacements in Brownwood, TX. 35+ years of trusted local service. Upfront pricing." },
      { property: "og:title", content: "Residential Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Complete home plumbing repairs, installations, maintenance, and replacements in Brownwood, TX. 35+ years of trusted local service. Upfront pricing." },
      { property: "og:url", content: `${BASE_URL}/residential-plumbing-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/residential-plumbing-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Residential Services"
        title="Residential Plumbing in Brownwood, TX"
        sectionHeading="Dependable Home Plumbing Repairs, Maintenance & Installations"
        icon="Home"
        serviceName="Residential Plumbing"
        intro="From minor drips and clogged fixtures to whole-home repiping and emergency water heater replacements, M. Webb Plumbing delivers expert residential plumbing care for Brown County homeowners."
        bullets={[
          "Upfront, Transparent Written Pricing",
          "Plumbing Fixture Repairs & Rebuilds",
          "Appliance & Water Heater Installations",
          "Annual Preventative Maintenance Plans",
          "Whole-Home PEX Water Line Replacements",
          "Licensed, Clean & Respectful Technicians"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              Our Residential Plumbing Services at a Glance
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              We structure our residential plumbing services into four clear categories so you always know exactly what your home needs:
            </p>

            <div className="mt-4 space-y-4 text-sm">
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-display text-base font-bold text-brand-deep">1. Plumbing Repairs</h4>
                <p className="mt-1 text-foreground/80 leading-relaxed">
                  Fast diagnosis and permanent fixes for daily plumbing breakdowns: dripping faucets, running or wobbling toilets, leaking garbage disposals, clogged shower drains, low water pressure, and noisy water pipes. We arrive with stocked trucks to solve most common repairs on the spot.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-display text-base font-bold text-brand-deep">2. Professional Installations</h4>
                <p className="mt-1 text-foreground/80 leading-relaxed">
                  Expert installation of new plumbing fixtures and appliances: traditional and tankless water heaters, high-efficiency water softeners, garbage disposals, kitchen undermount sinks, designer faucets, walk-in showers, and comfort-height toilets.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-display text-base font-bold text-cta">3. Preventative Maintenance</h4>
                <p className="mt-1 text-foreground/80 leading-relaxed">
                  Avoid costly emergency water disasters with scheduled maintenance: water heater sediment flushes, anode rod replacements, water pressure regulator testing, sewer camera inspections, and winter freeze pipe insulation before cold weather hits.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-display text-base font-bold text-cta">4. Full System Replacements & Repiping</h4>
                <p className="mt-1 text-foreground/80 leading-relaxed">
                  When older plumbing has reached the end of its useful lifespan, we provide turnkey whole-home repiping (replacing crumbling galvanized iron or polybutylene with durable Uponor PEX-A) and main sewer lateral replacements with minimal yard disruption.
                </p>
              </div>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Residential Plumbing
            </h3>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground text-sm">{faq.q}</h4>
                  <p className="mt-1 text-sm text-foreground/75 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </>
        }
      />
      <CTABanner
        title="Looking for a Trusted Local Plumber for Your Home in Brownwood?"
        subtitle={`Enjoy upfront pricing, punctual arrival, and clean, respectful service. Call ${business.phone} today.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
