import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "Why do my drains keep clogging again every few weeks?",
    a: "Recurring clogs almost always point to an issue deeper down the line than standard store-bought chemical cleaners can reach. Common culprits in Brown County include aggressive oak or pecan tree root intrusion into clay pipes, heavy grease buildup, belly sags in the pipe, or internal corrosion in older cast iron drains. A camera inspection will show the exact cause."
  },
  {
    q: "What is the difference between drain snaking and hydro jetting?",
    a: "Snaking (mechanical cabling) punches a hole through a localized clog (like a hair ball or toy) to restore flow. Hydro jetting uses high-pressure water streams (up to 3,500 PSI) with specialized reverse-jet nozzles to scour the entire inner pipe wall clean, removing years of grease, mineral scale, and tree root fibers so clogs don't return."
  },
  {
    q: "How does a sewer camera inspection work?",
    a: "We insert a flexible, fiber-optic video camera with an LED light head into your sewer cleanout or vent stack. The camera sends high-definition, real-time video to our field monitor, complete with digital distance counters and an electronic radio sonde transmitter so we can pinpoint the exact depth and location of any break under your yard."
  },
  {
    q: "Can tree roots destroy my home's sewer line?",
    a: "Yes. Seeking moisture and nutrients, fine hairline tree roots penetrate micro-cracks or loose mortar joints in sewer pipes. Once inside, they expand rapidly into dense root balls that trap toilet paper and solids, eventually causing total pipe collapse if left unaddressed."
  }
];

export const Route = createFileRoute("/drain-and-sewer-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Drain Cleaning & Sewer Repair in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Fast, reliable drain cleaning, hydro jetting, sewer camera inspections, and sewer line repairs in Brownwood, TX. Clear clogs today with M. Webb Plumbing." },
      { property: "og:title", content: "Drain Cleaning & Sewer Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Fast, reliable drain cleaning, hydro jetting, sewer camera inspections, and sewer line repairs in Brownwood, TX. Clear clogs today with M. Webb Plumbing." },
      { property: "og:url", content: `${BASE_URL}/drain-and-sewer-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/drain-and-sewer-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Drain & Sewer Services"
        title="Drain & Sewer Services in Brownwood, TX"
        sectionHeading="Camera Inspections, Clog Clearing & Sewer Line Repairs"
        icon="Drill"
        serviceName="Drain & Sewer Services"
        intro="Slow drains and messy sewage backups require more than temporary chemical fixes. We provide complete diagnostic drain clearing, high-pressure hydro jetting, and sewer line replacements across Brownwood."
        bullets={[
          "Motorized Mechanical Snaking",
          "HD Fiber-Optic Camera Diagnostics",
          "3,500 PSI High-Pressure Hydro Jetting",
          "Tree Root Removal & Chemical Treatments",
          "Sewer Cleanout Installations",
          "Full Main Sewer Line Excavation & Replacement"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              1. Residential Drain Cleaning & Clog Removal
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              From hair buildup in bathroom showers to solidified cooking oils and food debris in kitchen sinks, we use professional commercial motorized augers with specialized cutting heads to clear stubborn obstructions without scratching your porcelain fixtures or damaging PVC pipes.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              2. High-Pressure Hydro-Jetting
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              When grease, scale, and heavy sediment coat the entire circumference of your drain pipes, mechanical snaking only punches a small temporary hole. Our commercial hydro-jetter scours the interior pipe walls with 3,500 PSI streams of water, peeling away years of sludge and restoring pipes to near-original flow diameter.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              3. HD Fiber-Optic Sewer Camera Inspections
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Don't guess what is happening underground. Our high-definition sewer cameras travel through your entire waste system from cleanout to city main line, revealing the exact location of cracked pipes, offset joints, root intrusions, or low belly sections where water pools. You get to watch the real-time video footage with our technician.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              4. Sewer Line Repair & Replacement Capabilities
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              When a sewer pipe has collapsed, deteriorated from age, or suffered catastrophic root invasion, we handle the entire repair: underground utility line locating, cleanout installation for easier future maintenance, trench excavation, SDR-35 / Schedule 40 PVC pipe installation, city inspection approvals, and soil backfilling.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Drain & Sewer Services
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
        title="Dealing with Backed-Up Drains or Sewer Trouble in Brownwood?"
        subtitle={`Restore fast, sanitary drainage today. Call M. Webb Plumbing at ${business.phone} for honest service.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
