import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Should I get a plumbing inspection before buying a house?",
    "a": "Absolutely. Standard home inspections often miss deep plumbing issues. A dedicated plumbing inspection, especially with a sewer camera, can save you thousands of dollars."
  }
];

export const Route = createFileRoute("/plumbing-inspections-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Plumbing Inspections in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Comprehensive pre-purchase and preventive plumbing inspections to catch problems before they become disasters." },
      { property: "og:title", content: "Plumbing Inspections in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Comprehensive pre-purchase and preventive plumbing inspections to catch problems before they become disasters." },
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
        eyebrow="Inspections"
        title="Plumbing Inspections in Brownwood, TX"
        icon="ClipboardCheck"
        serviceName="Plumbing Inspections"
        intro="Comprehensive pre-purchase and preventive plumbing inspections to catch problems before they become disasters."
        bullets={["Pre-Purchase Inspections","Preventive Maintenance","Camera Line Inspections","Water Pressure Testing","Fixture Checks","Safety Evaluations"]}
        body={
          <>
            <p>Buying a new home? Want peace of mind before winter? Our thorough plumbing inspections provide a detailed report on the health of your water lines, drains, water heater, and fixtures.</p>
          </>
        }
      />
      <CTABanner title="Plumbing Inspections in Brownwood, TX" subtitle="Plumbing Inspections in Brownwood, TX" />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
