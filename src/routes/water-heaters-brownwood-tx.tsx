import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "How do I know whether to repair or replace my water heater?",
    a: "As a rule of thumb: If your water heater is under 8 to 10 years old and experiencing a component failure (such as a faulty heating element, bad thermocouple, or failed thermostat), repair is typically the most cost-effective choice. However, if your tank is over 10 years old, leaking from the steel tank itself, or heavily corroded by Central Texas hard water minerals, replacement is necessary, as tank ruptures cannot be safely patched."
  },
  {
    q: "What are the benefits of upgrading to a tankless water heater?",
    a: "Tankless water heaters heat water on-demand rather than keeping 40-50 gallons hot 24/7. This delivers endless hot water (perfect for large families), cuts water heating energy costs by up to 30%, frees up significant closet/garage floor space, and has an expected lifespan of 20+ years compared to 10-12 years for standard tanks."
  },
  {
    q: "Why is my water heater making a loud popping or rumbling sound?",
    a: "In Brownwood and Brown County, heavy limestone and mineral content precipitates out of the water as it heats, forming a thick layer of sediment at the bottom of the tank. The popping or rumbling noise is steam bubbles boiling up through that mineral crust. An annual tank flush and anode rod replacement can often resolve this before the tank overheats and cracks."
  },
  {
    q: "What warranties do you provide on new water heater installations?",
    a: "All new water heaters installed by M. Webb Plumbing include manufacturer warranties ranging from 6 to 10 years on tanks and parts, backed by our own 1-year comprehensive workmanship warranty on all piping, valves, and connections."
  }
];

export const Route = createFileRoute("/water-heaters-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Water Heater Repair & Installation in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Expert water heater repair, replacement, and tankless conversions in Brownwood, TX. Gas & electric models, upfront pricing, and fast local service." },
      { property: "og:title", content: "Water Heater Repair & Installation in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Expert water heater repair, replacement, and tankless conversions in Brownwood, TX. Gas & electric models, upfront pricing, and fast local service." },
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
        eyebrow="Water Heater Specialists"
        title="Water Heater Repair in Brownwood, TX"
        sectionHeading="Tank & Tankless Water Heater Repair, Replacement & Upgrades"
        icon="Flame"
        serviceName="Water Heaters"
        intro="Never run out of hot water again. Whether you need an emergency element replacement, a leaking tank swap, or a continuous-flow tankless upgrade, M. Webb Plumbing has you covered."
        bullets={[
          "Traditional Tank Repair & Replacements",
          "High-Efficiency Tankless Conversions",
          "Hot Water Recirculation Loops",
          "Anode Rod & Flush Maintenance",
          "Gas & Electric System Specialists",
          "Thermal Expansion Tank Installations"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              Repair vs. Replacement: Making the Right Decision
            </h3>
            <p className="mt-3">
              When hot water stops flowing, you need honest guidance on whether to invest in repairs or replace the unit. Our licensed technicians diagnose the root cause and provide clear upfront options:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-semibold text-brand-deep">When to Repair:</h4>
                <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                  <li>• Unit is under 8–10 years old</li>
                  <li>• Faulty heating element or thermostat</li>
                  <li>• Worn pilot thermocouple or gas control valve</li>
                  <li>• Minor pressure relief valve drip</li>
                  <li>• Repair cost is less than 50% of replacement</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="font-semibold text-cta">When to Replace:</h4>
                <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                  <li>• Unit is 10–15+ years old</li>
                  <li>• Steel tank is leaking from bottom or seam</li>
                  <li>• Heavy corrosion and rusty brown tap water</li>
                  <li>• Constant loud rumbling from deep sediment bake</li>
                  <li>• Frequent costly breakdowns</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Traditional Tanks vs. On-Demand Tankless Systems
            </h3>
            <p className="mt-3">
              We install and service both traditional storage tanks (40, 50, and 75-gallon models from trusted brands like Bradford White and Rheem) and high-efficiency tankless units (Navien, Rinnai).
            </p>
            <div className="mt-4 space-y-3 text-sm text-foreground/85">
              <p>
                <strong>Traditional Storage Tanks:</strong> Lower upfront installation cost, simple operation, and dependable performance. Excellent for straightforward like-for-like swaps when your existing unit fails unexpectedly.
              </p>
              <p>
                <strong>Tankless Water Heaters:</strong> Heats water only when you turn on a faucet, providing continuous, uninterrupted hot water for simultaneous showers, laundry, and dishwashing. Takes up a fraction of wall space and lasts twice as long as standard tanks.
              </p>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              6 Warning Signs Your Water Heater Needs Immediate Attention
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-foreground/85">
              {[
                "Lukewarm water that runs out within minutes",
                "Rusty or discolored water from hot taps only",
                "Moisture, puddling, or dripping around base of tank",
                "Loud popping, knocking, or cracking sounds",
                "Frequent pilot light outages on gas models",
                "Tripping electrical circuit breakers on electric models",
              ].map((sign) => (
                <li key={sign} className="flex items-start gap-2">
                  <span className="text-cta font-bold">•</span> {sign}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Our Professional Installation Standards
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Every water heater replacement includes complete code-compliant plumbing: new full-port brass shutoff valves, stainless steel braided flex water connectors, code-required thermal expansion tanks, temperature-and-pressure (T&P) relief valve discharge piping routed to code, pan with drain line, and proper gas or electrical hookup.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Water Heaters
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
        title="Running Out of Hot Water in Brownwood?"
        subtitle={`Get same-day diagnostic service or upgrade to endless hot water. Call our team at ${business.phone} today.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
