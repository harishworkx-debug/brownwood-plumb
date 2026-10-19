import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "Why does my toilet constantly run or hiss intermittently?",
    a: "An intermittently hissing or running toilet is almost always caused by a degraded rubber flapper that allows water to seep slowly from the tank into the bowl. The fill valve then turns on automatically to refill the lost volume. In Brownwood, mineral-heavy water degrades flappers within 2–3 years. A simple rebuild kit or flapper replacement will instantly stop water waste."
  },
  {
    q: "My kitchen garbage disposal just hums but won't spin. Is it broken?",
    a: "Usually it is not broken, but mechanically jammed by a fruit pit, bone, or utensil. First, turn the wall switch OFF immediately so the motor does not burn out. We carry specialized hex wrenches to manually rotate the bottom flywheel and dislodge obstructions. If the motor is burnt out or leaking from the housing, we provide same-day replacement."
  },
  {
    q: "Can you replace a shower valve without tearing out all my bathroom tile?",
    a: "Yes. In many cases, we can replace the internal pressure-balancing cartridge directly through the existing trim opening. If the entire brass valve body behind the wall needs replacement, we often access it cleanly through an adjoining closet or drywall wall rather than demolishing expensive custom tilework."
  },
  {
    q: "What causes water to leak around the base of my toilet?",
    a: "Water pooling at the base of your toilet during or after flushing indicates a failed wax ring seal or loose closet flange bolts. This must be repaired promptly, as dirty water leaking beneath the toilet will quickly rot your home's subflooring and structural joists."
  }
];

export const Route = createFileRoute("/kitchen-and-bathroom-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Kitchen & Bathroom Plumbing in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Expert repair and installation for faucets, toilets, tubs, showers, and garbage disposals in Brownwood, TX. Upfront pricing & quality workmanship." },
      { property: "og:title", content: "Kitchen & Bathroom Plumbing in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Expert repair and installation for faucets, toilets, tubs, showers, and garbage disposals in Brownwood, TX. Upfront pricing & quality workmanship." },
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
        eyebrow="Kitchen & Bath Fixtures"
        title="Kitchen & Bathroom Plumbing in Brownwood, TX"
        sectionHeading="Reliable Fixture Repairs, Replacements & Bathroom Remodels"
        icon="Bath"
        serviceName="Kitchen & Bathroom Plumbing"
        intro="The kitchen and bathrooms are the heart of your home's daily comfort. From stopping annoying faucet drips and running toilets to installing luxury fixtures and quiet garbage disposals, M. Webb Plumbing delivers expert craftsmanship."
        bullets={[
          "Kitchen Sink & Faucet Upgrades",
          "Running Toilet Repairs & Flange Fixes",
          "Comfort-Height ADA Toilet Installs",
          "Shower Valve & Scald-Guard Cartridges",
          "Bathtub Drain & Overflow Replacements",
          "Garbage Disposal Unjamming & Installs"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              1. Faucet Repair & Sink Installation
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              A dripping faucet isn't just an annoyance; a single faucet dripping at one drop per second wastes over 3,000 gallons of water per year. We repair ceramic disc cartridges, fix sprayer hoses, eliminate aerator mineral clogs, and install high-arc pull-down kitchen faucets, undermount sinks, and designer vessel lavatories.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              2. Toilet Repair & Replacement
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Whether your toilet has a weak flush, runs continuously, or wobbles on an uneven floor, we carry the parts to fix it on the first visit. We replace worn wax rings that cause subfloor rot, replace broken closet flanges, install quiet fill valves, and upgrade older 3.5-gallon water-wasters to modern high-efficiency comfort-height toilets (Kohler, American Standard, Toto).
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              3. Bathtub & Shower Plumbing
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Experiencing sudden blasts of freezing or scalding water when someone flushes elsewhere in the house? We install and service pressure-balanced scald-guard shower valves (Moen, Delta, Kohler) that keep water temperature steady. We also repair corroded tub spout diverters, replace leaking drain shoe assemblies, and clear slow-draining shower traps.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              4. Garbage Disposal Installation & Unjamming
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Garbage disposals frequently jam on fibrous foods or seize from rust. We safely dislodge jammed impellers and test internal resets. When motors burn out or the lower chamber cracks, we install reliable, sound-insulated continuous-feed disposals (1/2 HP, 3/4 HP, and 1 HP units) with dedicated anti-vibration mounts.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Kitchen & Bath Plumbing
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
        title="Ready to Upgrade Your Kitchen or Bath Plumbing in Brownwood?"
        subtitle={`From simple faucet drip fixes to complete fixture upgrades, call M. Webb Plumbing at ${business.phone}.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
