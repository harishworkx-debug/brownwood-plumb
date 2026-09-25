import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Can you fix a running toilet?",
    "a": "Yes, running toilets usually just need a new flapper, fill valve, or minor adjustment. We carry parts to fix most toilets on the spot."
  }
];

export const Route = createFileRoute("/kitchen-and-bathroom-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Kitchen & Bathroom Plumbing in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Expert repairs and installations for faucets, toilets, garbage disposals, and all kitchen and bathroom fixtures." },
      { property: "og:title", content: "Kitchen & Bathroom Plumbing in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Expert repairs and installations for faucets, toilets, garbage disposals, and all kitchen and bathroom fixtures." },
      { property: "og:url", content: `${BASE_URL}/kitchen-and-bathroom-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/kitchen-and-bathroom-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Kitchen & Bath"
        title="Kitchen & Bathroom Plumbing in Brownwood, TX"
        icon="Bath"
        serviceName="Kitchen & Bathroom Plumbing"
        intro="Expert repairs and installations for faucets, toilets, garbage disposals, and all kitchen and bathroom fixtures."
        bullets={["Toilet Repair & Installation","Faucet Repair","Garbage Disposals","Shower & Tub Plumbing","Sink Installations","Fixture Upgrades"]}
        body={
          <>
            <p>The kitchen and bathroom are the most heavily used plumbing areas in your home. From fixing a running toilet and unjamming a garbage disposal to installing luxurious new shower fixtures, we ensure everything works flawlessly and looks great.</p>
          </>
        }
      />
      <CTABanner title="Kitchen & Bathroom Plumbing in Brownwood, TX" subtitle="Kitchen & Bathroom Plumbing in Brownwood, TX" />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
