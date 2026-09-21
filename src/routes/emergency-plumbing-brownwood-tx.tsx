import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Do you really offer 24/7 service?",
    "a": "Yes, we can connect you with plumbers on call 24 hours a day, 7 days a week, 365 days a year for true emergencies."
  }
];

export const Route = createFileRoute("/emergency-plumbing-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Plumbing in Brownwood | M. Webb Plumbing" },
      { name: "description", content: "Burst pipe? Major leak? Overflowing toilet? Find rapid 24-hour emergency plumbing response across Brownwood and Brown County." },
      { property: "og:title", content: "24/7 Emergency Plumbing in Brownwood | M. Webb Plumbing" },
      { property: "og:description", content: "Burst pipe? Major leak? Overflowing toilet? Find rapid 24-hour emergency plumbing response across Brownwood and Brown County." },
      { property: "og:url", content: `${BASE_URL}/emergency-plumbing-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/emergency-plumbing-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Emergency Plumbing"
        title="24/7 Emergency Plumbing in Brownwood"
        icon="Siren"
        serviceName="Emergency Plumbing"
        intro="Burst pipe? Major leak? Overflowing toilet? Find rapid 24-hour emergency plumbing response across Brownwood and Brown County."
        bullets={["24/7 Availability","Fast Response Times","Burst Pipe Repair","Severe Leak Stopping","Gas Leak Checks","Sewer Backups"]}
        body={
          <>
            <p>Plumbing emergencies don't wait for business hours. Get connected with true 24-hour emergency plumbing service to stop the damage and fix the problem fast. Connecting <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and all of Brown County.</p>
          </>
        }
      />
      <CTABanner title="Need emergency plumbing?" subtitle="Get it handled today. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
