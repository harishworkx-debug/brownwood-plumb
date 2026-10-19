import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "What should I do immediately if I smell gas in my home?",
    a: "Evacuate everyone (including pets) immediately. Do NOT touch light switches, unplug appliances, use a landline phone, or start your car near the home, as any small electrical arc can ignite gas. Once outside and safely away, call Atmos Energy (or your local propane provider) or 911. After the emergency responder secures the main shutoff, call M. Webb Plumbing to locate and repair the leak."
  },
  {
    q: "Why do I need a licensed plumber for gas line repairs in Texas?",
    a: "Under Texas law and Texas State Board of Plumbing Examiners (TSBPE) regulations, gas piping is strictly classified as plumbing work that can only be performed by licensed plumbers. Gas line repairs require formal pressure testing with a calibrated manometer and city inspection approvals before the utility company will restore your gas service."
  },
  {
    q: "How do you test and locate gas leaks?",
    a: "We isolate the gas piping system, disconnect sensitive appliances, and pressurize the line with compressed air or inert nitrogen. Using digital pressure manometers, we monitor for even the slightest pressure drop over 15 to 30 minutes. We then use electronic combustible gas sniffers and non-corrosive bubbling detection solution to identify the exact fitting or pipe flaw."
  },
  {
    q: "Can you run gas lines for outdoor kitchens, patio fire pits, and standby generators?",
    a: "Yes. We properly calculate gas volume requirements (BTU demand) and pipe sizing to ensure your whole-home generator, pool heater, outdoor grill, or fire pit receives full operating pressure without starving indoor appliances like your furnace or water heater."
  }
];

export const Route = createFileRoute("/gas-line-repair-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Gas Line Repair & Leak Detection in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Certified gas line leak detection, pressure testing, and repair in Brownwood, TX. Licensed Master Plumbers handling natural gas and propane systems safely." },
      { property: "og:title", content: "Gas Line Repair & Leak Detection in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Certified gas line leak detection, pressure testing, and repair in Brownwood, TX. Licensed Master Plumbers handling natural gas and propane systems safely." },
      { property: "og:url", content: `${BASE_URL}/gas-line-repair-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/gas-line-repair-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Licensed Gas Services"
        title="Gas Line Repair in Brownwood, TX"
        sectionHeading="Certified Gas Leak Detection & Safety Installations"
        icon="AlertTriangle"
        serviceName="Gas Line Repair"
        intro="Gas piping demands zero compromises. M. Webb Plumbing provides licensed gas leak detection, pressure testing, appliance hookups, and code-compliant repairs across Brownwood and Brown County."
        bullets={[
          "Texas Licensed Master Plumber Supervision",
          "Electronic Combustible Gas Sniffing",
          "Calibrated Nitrogen Pressure Drop Testing",
          "Gas Stove, Furnace & Water Heater Hookups",
          "Outdoor Kitchen & Generator Gas Lines",
          "City Permit & Inspection Sign-Offs"
        ]}
        body={
          <>
            <div className="rounded-2xl border-2 border-amber-500/25 bg-amber-500/5 p-6 dark:bg-amber-950/20">
              <h3 className="font-display text-xl font-bold text-amber-600 dark:text-amber-400">
                🚨 Gas Leak Safety Checklist: Act Immediately
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                Natural gas has a distinctive rotten-egg mercaptan additive for your protection. If you smell gas or hear a hissing pipe:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                <li>• <strong>Do NOT touch electrical switches:</strong> Flipping a light switch or thermostat can generate an ignition spark.</li>
                <li>• <strong>Evacuate immediately:</strong> Get all family members and pets outside into fresh air.</li>
                <li>• <strong>Shut off gas meter (if safe):</strong> Use an adjustable wrench to turn the valve 1/4 turn perpendicular to the pipe.</li>
                <li>• <strong>Call for help from outside:</strong> Call Atmos Energy or 911 first, then call M. Webb Plumbing at <strong>{business.phone}</strong>.</li>
              </ul>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Texas Licensed Gas Line Qualifications
            </h3>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
              In Texas, gas piping is strictly regulated to prevent catastrophic explosions and carbon monoxide poisoning. Every gas line diagnostic and repair performed by M. Webb Plumbing is backed by Texas State Board of Plumbing Examiners (TSBPE) licensed credentials. We pull all necessary municipal permits and ensure your system passes stringent city inspection tests before gas service is restored.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              Our Comprehensive Gas Line Capabilities
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-brand-deep">Gas Leak Diagnostics:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  Pinpoint micro-fissures and corroded pipe threads using sensitive combustible gas sniffers and electronic pressure manometers.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-brand-deep">Appliance Hookups:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  Safe installation of flexible stainless steel gas connectors and safety shutoff valves for gas ranges, dryers, and water heaters.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-cta">Outdoor Gas Lines:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  Trenching and poly gas piping with tracer wire for outdoor barbecue kitchens, fire bowls, and pool heaters.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <h4 className="font-semibold text-cta">Generator Supply Lines:</h4>
                <p className="mt-1 text-foreground/75 text-xs leading-relaxed">
                  High-capacity gas sizing to supply whole-home standby generators with uninterrupted emergency fuel.
                </p>
              </div>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Gas Line Repairs
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
        title="Need Certified Gas Line Repair in Brownwood?"
        subtitle={`Your safety is our top priority. Contact our licensed gas line specialists at ${business.phone} immediately.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
