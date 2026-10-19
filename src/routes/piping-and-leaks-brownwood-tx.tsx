import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "How do you detect a slab leak without breaking up my concrete foundation?",
    a: "We use non-invasive acoustic listening equipment, thermal imaging cameras, and digital line pressure isolation tests. By listening to the precise frequency of water escaping pressurized lines under concrete, we pinpoint the exact leak location within a few inches before any foundation work is considered."
  },
  {
    q: "What is an overhead PEX reroute, and why is it often better than breaking a slab?",
    a: "Instead of jackhammering through finished tile, hardwood, and structural slab concrete to fix a broken copper pipe underneath your foundation, an overhead reroute runs a new continuous, durable PEX-A water line through your attic and interior walls down to the affected fixture. This eliminates foundation disruption, preserves your flooring, and permanently bypasses the buried leak."
  },
  {
    q: "How can I tell if my home has a hidden water leak?",
    a: "Key signs include an unexplained spike in your monthly municipal water bill, hearing water running behind walls when all fixtures are turned off, unexplained warm spots on carpet or tile floors (hot water slab leak), spinning meter dials with all faucets closed, or sudden musty odors and damp baseboards."
  },
  {
    q: "When is whole-home repiping necessary instead of spot repairs?",
    a: "If your home was built before the late 1980s with galvanized iron pipes that now deliver rust-colored water and low pressure, or has polybutylene piping prone to sudden brittle fractures, multiple spot repairs will only chase the problem from room to room. A whole-home Uponor PEX repipe replaces all fresh water lines with durable, freeze-resistant piping."
  }
];

export const Route = createFileRoute("/piping-and-leaks-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Leak Detection & Pipe Repair in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Pinpoint hidden leaks, repair foundation slab leaks, and replace damaged water pipes in Brownwood, TX. Non-invasive acoustic detection & PEX repiping." },
      { property: "og:title", content: "Leak Detection & Pipe Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Pinpoint hidden leaks, repair foundation slab leaks, and replace damaged water pipes in Brownwood, TX. Non-invasive acoustic detection & PEX repiping." },
      { property: "og:url", content: `${BASE_URL}/piping-and-leaks-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/piping-and-leaks-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Piping & Leak Specialists"
        title="Leak Detection & Pipe Repair in Brownwood, TX"
        sectionHeading="Non-Invasive Leak Detection & Long-Lasting Pipe Fixes"
        icon="Droplets"
        serviceName="Piping & Leaks"
        intro="Hidden water leaks can quietly compromise your home's foundation and cause severe structural damage. M. Webb Plumbing uses precision acoustic diagnostics and modern PEX repiping to protect Brown County homes."
        bullets={[
          "Ultrasonic Acoustic Leak Detection",
          "Foundation Slab Leak Solutions",
          "Overhead Attic PEX Rerouting",
          "Whole-Home Repiping Services",
          "Burst Pipe Thawing & Winter Repairs",
          "Main Water Service Line Replacements"
        ]}
        body={
          <>
            <h3 className="font-display text-xl font-bold text-foreground">
              1. Non-Invasive Acoustic & Electronic Leak Detection
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Never let an inexperienced contractor punch random exploratory holes in your walls or break concrete blindly. We use electronic acoustic sensors and digital line pressure gauges that listen through drywall, tile, and concrete slabs to locate subterranean pinhole leaks with pin-point accuracy.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              2. Foundation & Slab Leak Solutions for Central Texas Homes
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Brown County's heavy clay soil shrinks and swells dramatically between dry summer heat and heavy rains, putting tremendous bending stress on copper water pipes embedded beneath slab foundations. We specialize in two proven approaches:
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-brand-deep">Overhead PEX Reroutes (Recommended):</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  Bypasses the ruptured under-slab pipe completely by routing new continuous PEX-A tubing through ceilings and walls directly to fixtures, keeping your flooring and foundation untouched.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-cta">Precision Spot Repairs:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  When a reroute is impractical, we perform precision single-point slab excavation directly over the acoustically verified leak location, replacing the failed section and patching concrete.
                </p>
              </div>
            </div>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              3. Whole-Home Repiping Services
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              If your home suffers from corroded galvanized pipes that choke water pressure and deliver rust, or brittle polybutylene pipes that burst without warning, our crew provides clean, turnkey whole-home repiping using Uponor PEX-A. PEX-A expands and contracts during freezing temperatures, resists mineral scale buildup, and comes backed by a 25-year manufacturer warranty.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              4. Winter Freeze Burst Pipe Repair & Winterization
            </h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Central Texas freezes can rapidly split exterior copper and PVC lines. We provide emergency burst pipe repairs, install frost-proof anti-siphon sillcocks (hose bibs), and insulate exposed crawlspace and attic piping.
            </p>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Leak Detection & Repiping
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
        title="Suspect a Hidden Water or Slab Leak in Brownwood?"
        subtitle={`Don't let underground water undermine your foundation. Call our leak detection specialists at ${business.phone}.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
