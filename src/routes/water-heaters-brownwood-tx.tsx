import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Should I repair or replace my water heater?",
    "a": "If your tank is over 10 years old or leaking from the bottom, replacement is usually necessary. Most other issues can be repaired."
  },
  {
    "q": "What are the benefits of a tankless water heater?",
    "a": "Tankless systems provide endless hot water, use less energy by only heating water on demand, and take up much less space than traditional tanks."
  }
];

export const Route = createFileRoute("/water-heaters-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Water Heater Repair in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Never run out of hot water again. We offer comprehensive water heater repair, tankless upgrades, and recirculation pump installations." },
      { property: "og:title", content: "Water Heater Repair in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Never run out of hot water again. We offer comprehensive water heater repair, tankless upgrades, and recirculation pump installations." },
      { property: "og:url", content: `${BASE_URL}/water-heaters-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/water-heaters-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Water Heaters"
        title="Water Heater Repair in Brownwood, TX"
        icon="Flame"
        serviceName="Water Heaters"
        intro="Never run out of hot water again. We offer comprehensive water heater repair, tankless upgrades, and recirculation pump installations."
        bullets={["Traditional Tank Repair","Tankless Water Heaters","Recirculation Pumps","Anode Rod Replacement","Gas & Electric Models","Energy Efficient Upgrades"]}
        body={
          <>
            <p>Whether your traditional water heater is leaking, or you're ready to upgrade to a high-efficiency tankless system for endless hot water, our experts can help. We also install hot water recirculation pumps so you have instant hot water at every tap, saving time and water.</p>

            <p className="mt-4">From hot water heater repair for traditional units to tankless water heater installation, our team provides comprehensive water heater service. If you have no hot water, a water heater not heating, or a leaking water heater, we can quickly diagnose and perform the necessary water heater replacement or maintenance.</p>
          </>
        }
      />
      <CTABanner title="Water Heater Repair in Brownwood, TX" subtitle="Water Heater Repair in Brownwood, TX" />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
