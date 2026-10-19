import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "Why isn't a standard general home inspection enough when buying a house?",
    a: "General home inspectors check if faucets turn on and drains empty, but they do not perform static water pressure drop tests or insert fiber-optic cameras down sewer laterals. Hidden issues like cracked under-slab sewer lines or deteriorating galvanized water pipes can easily cost $8,000 to $15,000+ to fix shortly after closing. A specialized plumbing inspection uncovers these before your option period expires."
  },
  {
    q: "What is included in the digital inspection report deliverables?",
    a: "You receive an itemized, photo-documented digital PDF report detailing every fixture, supply line, shutoff valve, water heater component, and drainage pipe inspected. We categorize findings by immediate safety hazards, code non-compliance, and recommended future maintenance, complete with upfront repair estimates."
  },
  {
    q: "What water pressure is considered safe for Brownwood homes?",
    a: "Safe residential water pressure is between 45 and 65 PSI. If your home's water pressure exceeds 80 PSI, municipal surges will rapidly blow out washing machine hoses, crack toilet fill valves, and cause water heater relief valves to leak. If testing shows high pressure, we recommend installing a pressure-reducing valve (PRV)."
  },
  {
    q: "How long does a comprehensive plumbing inspection take?",
    a: "A typical whole-home plumbing inspection and sewer camera lateral run takes approximately 1.5 to 2 hours depending on home square footage, number of bathrooms, and accessibility of crawlspaces or cleanouts."
  }
];

export const Route = createFileRoute("/plumbing-inspections-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Plumbing Inspections in Brownwood, TX | Pre-Purchase & Sewer Scope" },
      { name: "description", content: "Comprehensive whole-home plumbing inspections and sewer camera scopes in Brownwood, TX. Detailed photo reports and honest pricing for home buyers and owners." },
      { property: "og:title", content: "Plumbing Inspections in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Comprehensive whole-home plumbing inspections and sewer camera scopes in Brownwood, TX. Detailed photo reports and honest pricing for home buyers and owners." },
      { property: "og:url", content: `${BASE_URL}/plumbing-inspections-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/plumbing-inspections-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Diagnostic Inspections"
        title="Plumbing Inspections in Brownwood, TX"
        sectionHeading="Thorough Pre-Purchase & Preventive Home Assessments"
        icon="ClipboardCheck"
        serviceName="Plumbing Inspections"
        intro="Whether buying a new home or safeguarding your current property against costly hidden failures, our licensed plumbing inspections and HD sewer camera scopes give you total clarity."
        bullets={[
          "Texas Real Estate Option Period Inspections",
          "Digital Photo & Video Inspection Deliverables",
          "HD Sewer Lateral Camera Scoping",
          "Static Line Water Pressure Testing",
          "Water Heater Safety Valve Inspections",
          "Supply Piping Material Identification"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              Pre-Purchase Real Estate Plumbing Inspections
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              In Texas real estate transactions, your option period is your only opportunity to negotiate critical repairs or price reductions with the seller. A general home inspection only tests basic functionality. Our licensed plumbers conduct an in-depth diagnostic audit to uncover hidden defects before you finalize your closing.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              Comprehensive Multi-Point Inspection Scope
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-brand-deep">Fresh Water Supply System:</h4>
                <ul className="mt-2 space-y-1 text-xs text-foreground/75">
                  <li>• Static municipal incoming water pressure (PSI test)</li>
                  <li>• Main curb stop and customer shutoff valve operability</li>
                  <li>• Supply line material check (galvanized, polybutylene, PEX)</li>
                  <li>• Angle stops and flex lines under all sinks & toilets</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-cta">Water Heater Safety:</h4>
                <ul className="mt-2 space-y-1 text-xs text-foreground/75">
                  <li>• Temperature & Pressure (T&P) relief valve inspection</li>
                  <li>• Thermal expansion tank pressure verification</li>
                  <li>• Exhaust flue draft & carbon monoxide risk check</li>
                  <li>• Tank age, corrosion, and sediment buildup check</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-brand-deep">Drain, Waste & Vent (DWV):</h4>
                <ul className="mt-2 space-y-1 text-xs text-foreground/75">
                  <li>• Individual fixture drain speeds and trap seals</li>
                  <li>• Toilet mounting stability and wax ring seal integrity</li>
                  <li>• Attic and roof vent stack obstruction check</li>
                  <li>• Moisture detection around tubs and shower pans</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-cta">HD Sewer Camera Scope:</h4>
                <ul className="mt-2 space-y-1 text-xs text-foreground/75">
                  <li>• Full lateral camera run from cleanout to city connection</li>
                  <li>• Identification of root intrusion, cracks, or collapsed lines</li>
                  <li>• Detection of low belly sags where waste accumulates</li>
                  <li>• Digital video footage provided for your records</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              What You Receive: Clear, Actionable Deliverables
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Within hours of completing the inspection, you receive a comprehensive digital PDF report complete with color photos, video timestamps, code violation notes, and an itemized repair estimate. You can hand this report directly to your real estate agent to use during contract negotiations.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Plumbing Inspections
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
        title="Buying a Home or Need Peace of Mind in Brownwood?"
        subtitle={`Schedule your thorough plumbing and sewer inspection today. Call M. Webb Plumbing at ${business.phone}.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
