import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "What should I do if I smell gas?",
    "a": "Evacuate the building immediately, do not use any electronics or light switches, and call your gas provider or 911 from outside. Once the gas is shut off, call us for repairs."
  }
];

export const Route = createFileRoute("/gas-line-repair-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Gas Line Repair in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Licensed, safe, and professional gas line leak detection, repair, and new line installations." },
      { property: "og:title", content: "Gas Line Repair in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Licensed, safe, and professional gas line leak detection, repair, and new line installations." },
      { property: "og:url", content: `${BASE_URL}/gas-line-repair-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/gas-line-repair-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Gas Lines"
        title="Gas Line Repair in Brownwood, TX"
        icon="AlertTriangle"
        serviceName="Gas Line Repair"
        intro="Licensed, safe, and professional gas line leak detection, repair, and new line installations."
        bullets={["Gas Leak Detection","Gas Line Repair","New Gas Line Installation","Appliance Hookups","Outdoor Kitchen Gas Lines","Safety Inspections"]}
        body={
          <>
            <p>Gas line work requires a licensed professional. We take gas safety extremely seriously, offering comprehensive pressure testing, leak detection, and repair services for both natural gas and propane lines.</p>
          </>
        }
      />
      <CTABanner title="Gas Line Repair in Brownwood, TX" subtitle="Gas Line Repair in Brownwood, TX" />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
