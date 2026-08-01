import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Why do my drains keep clogging?",
    "a": "Recurring clogs often indicate a deeper problem like tree root intrusion, pipe scale buildup, or a collapsed sewer line. A camera inspection can identify the exact cause."
  }
];

export const Route = createFileRoute("/drain-and-sewer-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Drain Cleaning & Sewer Repair | M. Webb Plumbing" },
      { name: "description", content: "Complete drain and sewer solutions including professional drain cleaning, high-tech camera inspections, and sewer line repairs." },
      { property: "og:title", content: "Drain Cleaning & Sewer Repair | M. Webb Plumbing" },
      { property: "og:description", content: "Complete drain and sewer solutions including professional drain cleaning, high-tech camera inspections, and sewer line repairs." },
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
        eyebrow="Drain & Sewer"
        title="Drain Cleaning & Sewer Repair"
        icon="Drill"
        serviceName="Drain & Sewer Services"
        intro="Complete drain and sewer solutions including professional drain cleaning, high-tech camera inspections, and sewer line repairs."
        bullets={["Professional Drain Cleaning","Drain Camera Inspections","Sewer Line Repair","Hydro Jetting","Root Intrusion Removal","Main Line Clearing"]}
        body={
          <>
            <p>Clogged drains and sewer backups are unsanitary and frustrating. We use professional-grade equipment, including fiber-optic cameras, to accurately diagnose blockages. From simple snaking to high-pressure hydro jetting and complete sewer line excavation, we resolve the root cause of your drainage issues.</p>
          </>
        }
      />
      <CTABanner title="Need drain & sewer services?" subtitle="Get it handled today. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
