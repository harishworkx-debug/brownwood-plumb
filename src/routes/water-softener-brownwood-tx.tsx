import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "How hard is the water in Brownwood and Brown County?",
    a: "Water in Brownwood, Early, and surrounding areas draws heavily from limestone-rich Texas aquifer and surface sources, typically testing between 12 and 18+ grains per gallon (GPG). Anything over 10.5 GPG is classified by the Water Quality Association as 'Very Hard,' making a water softener essential to protect appliances."
  },
  {
    q: "How do you determine what size water softener my home needs?",
    a: "System sizing is based on a simple calculation: number of people in the household multiplied by daily water usage (typically 75 gallons/person), multiplied by the grains per gallon (GPG) hardness rating. This calculates weekly grain capacity so we install a correctly sized system (e.g., 32,000, 48,000, or 64,000 grains) that regenerates efficiently without wasting salt."
  },
  {
    q: "Will a water softener save me money?",
    a: "Yes. Studies show soft water increases water heater operating efficiency by up to 24%, prolongs appliance lifespans (dishwashers, washing machines, coffee makers) by 30–50%, and reduces soap and detergent consumption by up to 50%."
  },
  {
    q: "Can I use potassium chloride instead of sodium chloride salt?",
    a: "Yes. If someone in your home is on a strict low-sodium medical diet, potassium chloride pellets can be used directly in any of our modern water softener brine tanks without modification."
  }
];

export const Route = createFileRoute("/water-softener-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Water Softener Installation & Repair in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Combat Central Texas hard water with high-efficiency water softeners and filtration systems in Brownwood, TX. Protect appliances and pipes. Call today." },
      { property: "og:title", content: "Water Softener Installation & Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Combat Central Texas hard water with high-efficiency water softeners and filtration systems in Brownwood, TX. Protect appliances and pipes. Call today." },
      { property: "og:url", content: `${BASE_URL}/water-softener-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/water-softener-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Water Conditioning Specialists"
        title="Water Softeners in Brownwood, TX"
        sectionHeading="Protect Your Plumbing with Whole-Home Water Conditioning"
        icon="Droplet"
        serviceName="Water Softeners"
        intro="Central Texas limestone creates notoriously hard water that ruins water heaters and leaves chalky scale on fixtures. M. Webb Plumbing provides high-efficiency water softener installation, sizing, and repair."
        bullets={[
          "Free In-Home Water Hardness Testing",
          "Custom Grain-Capacity System Sizing",
          "High-Efficiency Metered Demand Regeneration",
          "Whole-Home Bypass Valve Setup",
          "Brine Tank Maintenance & Resin Cleanings",
          "Whole-Home Carbon Filtration Add-Ons"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              The Real Cost of Hard Water in Brown County
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              With water hardness in Brown County frequently exceeding 15 grains per gallon (GPG), every gallon that enters your home is laden with dissolved calcium and magnesium. When this water is heated, minerals bake onto interior surfaces:
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-brand-deep">Appliance Destruction:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  Limescale builds up inside water heater tanks, dishwasher heating coils, and washing machine valves, drastically shortening appliance lifespans and increasing utility bills.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-cta">Fixtures & Daily Life:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  Chalky white crust clogs faucet aerators, clouds glassware, causes dingy stiff laundry, and strips natural protective oils from skin and hair.
                </p>
              </div>
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              How We Size Your Water Softening System
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              A one-size-fits-all approach leads to either hard water breakthrough or excessive salt consumption. We test your incoming water hardness and evaluate your household size to specify the optimal grain capacity (32,000 to 64,000 grains). Our systems feature smart metered regeneration valves that measure actual gallons used, regenerating only when necessary to save you money on water and salt.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              Turnkey Installation & Ongoing Maintenance
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Every installation includes a full 3-valve bypass loop (allowing you to easily water outdoor lawns without using softened water), a dedicated drain discharge line, and heavy-duty brine tank. We also service and repair all major softener brands, replace worn resin beds, and clear salt bridges.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Water Softeners
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
        title="Tired of Hard Water Stains & Appliance Scale in Brownwood?"
        subtitle={`Schedule a water test or request an estimate for a high-efficiency softening system. Call ${business.phone}.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
