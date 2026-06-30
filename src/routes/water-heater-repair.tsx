import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  { q: "How long does a water heater typically last in Brownwood?", a: "Most tank water heaters last 10-15 years with proper maintenance. Tankless models can last 20+ years. If yours is over 10 years old and having issues, replacement often makes more financial sense than repair." },
  { q: "Why is my hot water running out so quickly?", a: "Common causes include sediment buildup in the tank, a failing heating element (electric), broken dip tube, or undersized water heater for your household. We can diagnose and fix the exact issue." },
  { q: "Is it worth repairing an old water heater?", a: "For units under 8 years old with minor issues, repair is usually cost-effective. For older units or major failures like tank leaks, replacement typically provides better long-term value and energy savings." },
];

export const Route = createFileRoute("/water-heater-repair")({
  head: () => ({
    meta: [
      { title: "Water Heater Repair in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Fast water heater repair and installation in Brownwood, TX. Tank and tankless water heater service, emergency repairs, and energy-efficient upgrades. Call (325) 328-0435." },
      { name: "keywords", content: "water heater repair brownwood tx, water heater installation, hot water heater, tankless water heater repair, water heater replacement brownwood" },
      { property: "og:title", content: "Water Heater Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Fast water heater repair and installation in Brownwood, TX. Tank and tankless water heater service. Call (325) 328-0435." },
      { property: "og:url", content: `${BASE_URL}/water-heater-repair` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/water-heater-repair` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Water Heater Repair"
        title="Water Heater Repair & Installation"
        icon="Flame"
        serviceName="Water Heater Repair"
        intro="No hot water? Strange noises? Leaking tank? M. Webb Plumbing Co. repairs and installs all types of water heaters across Brownwood, TX — tank, tankless, gas, and electric."
        bullets={["Tank water heater repair", "Tankless water heater service", "Electric water heater repair", "Gas water heater repair", "Water heater replacement", "Emergency same-day service"]}
        body={
          <>
            <p>Your water heater works silently in the background — until it doesn't. When you turn on the tap and get cold water, notice rusty water, hear rumbling from the tank, or find a puddle around the unit, you need a plumber who can quickly diagnose the problem and get your hot water flowing again.</p>
            <p>We've been repairing and replacing water heaters in Brown County homes and businesses for over 35 years. From simple thermostat replacements to complete tank upgrades, we handle the full range of water heater issues. We'll help you decide whether repair or replacement makes more sense for your situation and budget.</p>
            <p><strong>Signs you need water heater service:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Not enough hot water or water running cold too quickly</li>
              <li>Rusty or discolored hot water</li>
              <li>Strange noises (rumbling, popping, cracking)</li>
              <li>Water pooling around the base of the tank</li>
              <li>Water that smells like rotten eggs</li>
              <li>Higher than normal energy bills</li>
            </ul>
            <p className="mt-4">We service <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and surrounding communities. Emergency water heater service is available.</p>
          </>
        }
      />
      <CTABanner title="Need water heater service today?" subtitle="Call now — hot water shouldn't wait. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
