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
    "a": "Yes, we provide plumbers on call 24 hours a day, 7 days a week, 365 days a year for true emergencies."
  }
];

export const Route = createFileRoute("/emergency-plumbing-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Emergency Plumber in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Burst pipe? Major leak? Overflowing toilet? Find rapid 24-hour emergency plumbing response across Brownwood and Brown County." },
      { property: "og:title", content: "Emergency Plumber in Brownwood, TX | M. Webb Plumbing Co." },
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
        title="Emergency Plumber in Brownwood, TX"
        icon="Siren"
        serviceName="Emergency Plumbing"
        intro="Burst pipe? Major leak? Overflowing toilet? Find rapid 24-hour emergency plumbing response across Brownwood and Brown County."
        bullets={["24/7 Availability","Fast Response Times","Burst Pipe Repair","Severe Leak Stopping","Gas Leak Checks","Sewer Backups"]}
        body={
          <>
            <p>Plumbing emergencies don't wait for business hours. Call our true 24-hour emergency plumbing service to stop the damage and fix the problem fast. Connecting <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and all of Brown County.</p>

            <p className="mt-4">Whether you are dealing with a burst pipe, an emergency water leak, or a severe sewer backup, our 24 hour emergency plumber team is ready to respond. We provide urgent plumbing repair and emergency drain service to mitigate damage and restore your plumbing system quickly.</p>
          </>
        }
      />
      <CTABanner title="Emergency Plumber in Brownwood, TX" subtitle="Emergency Plumber in Brownwood, TX" />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
