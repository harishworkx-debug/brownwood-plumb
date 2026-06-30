import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  { q: "Are tankless water heaters worth it in Brownwood?", a: "Tankless water heaters offer endless hot water, lower energy bills (up to 50% savings), and last longer than tank models. They're especially valuable for homes with high hot water demand or limited space." },
  { q: "How much does a tankless water heater installation cost?", a: "Installation costs vary based on the unit size, gas line requirements, and ventilation needs. We provide free in-home estimates so you know the exact cost upfront — no surprises." },
  { q: "Do tankless water heaters work with Brownwood's hard water?", a: "Yes, but they require proper maintenance. Hard water can cause mineral buildup. We recommend annual flushing and can install water treatment systems to extend your tankless unit's life." },
];

export const Route = createFileRoute("/tankless-water-heater")({
  head: () => ({
    meta: [
      { title: "Tankless Water Heater in Brownwood, TX | Installation & Repair | M. Webb" },
      { name: "description", content: "Endless hot water with tankless water heater installation in Brownwood, TX. Energy-efficient, space-saving units with expert installation and repair. Call (325) 328-0435." },
      { name: "keywords", content: "tankless water heater brownwood tx, tankless water heater installation, on demand water heater, instant hot water heater, tankless repair" },
      { property: "og:title", content: "Tankless Water Heater in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Endless hot water with tankless water heater installation in Brownwood, TX. Energy-efficient, expert installation. Call (325) 328-0435." },
      { property: "og:url", content: `${BASE_URL}/tankless-water-heater` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/tankless-water-heater` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Tankless Water Heaters"
        title="Tankless Water Heater Installation & Repair"
        icon="Zap"
        serviceName="Tankless Water Heater"
        intro="Never run out of hot water again. Tankless water heaters provide endless hot water on demand while cutting energy costs by up to 50%. Expert installation and repair across Brownwood, TX."
        bullets={["New tankless installation", "Tankless unit repair", "Gas line sizing & upgrades", "Electric tankless systems", "Annual maintenance flushing", "Unit sizing consultation"]}
        body={
          <>
            <p>Traditional tank water heaters keep 40-80 gallons of water hot around the clock — whether you need it or not. A tankless water heater heats water only when you need it, delivering endless hot water while using significantly less energy.</p>
            <p><strong>Benefits of going tankless:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Endless hot water</strong> — No more cold showers when everyone else has already bathed</li>
              <li><strong>Energy savings</strong> — Up to 50% lower energy bills compared to tank models</li>
              <li><strong>Longer lifespan</strong> — Tankless units typically last 20+ years</li>
              <li><strong>Space savings</strong> — Mounts on the wall, freeing up floor space</li>
              <li><strong>Cleaner water</strong> — No tank to collect sediment and rust</li>
            </ul>
            <p className="mt-4">Proper installation is critical for tankless water heaters. The gas line, venting, and water flow must all be correctly sized. With 35+ years of experience, we've installed tankless systems throughout <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and the surrounding region.</p>
            <p className="mt-2">We service and repair all major tankless brands including Rinnai, Navien, Bosch, and Rheem. Regular maintenance flushing extends life and maintains efficiency.</p>
          </>
        }
      />
      <CTABanner title="Ready for endless hot water?" subtitle="Get a free estimate on tankless water heater installation." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
