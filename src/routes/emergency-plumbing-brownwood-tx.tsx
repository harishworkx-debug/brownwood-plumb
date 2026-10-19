import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    q: "How fast can an emergency plumber arrive at my Brownwood home?",
    a: "For true plumbing emergencies within Brownwood and Early, our on-call technicians typically arrive within 45 to 60 minutes of your call. Response times for rural Brown County locations vary based on distance, and our dispatchers will provide an immediate estimated arrival time over the phone."
  },
  {
    q: "What should I do immediately while waiting for the plumber?",
    a: "Immediately shut off your home's main water shutoff valve (usually located near your water meter or where the main supply line enters your home). Next, turn off electricity to any flooded rooms or your water heater at the breaker box, open outdoor hose bibs to relieve residual line pressure, and avoid touching standing water if electrical outlets are submerged."
  },
  {
    q: "Do you really offer 24/7 emergency service in Brownwood?",
    a: "Yes. Plumbing disasters don't wait for business hours. We maintain licensed plumbers on call 24 hours a day, 7 days a week, 365 days a year across Brownwood and surrounding communities for burst pipes, severe sewer backups, gas leaks, and flooding water heaters."
  },
  {
    q: "Will you provide documentation for my homeowner's insurance claim?",
    a: "Yes. In the event of burst pipes or sudden water damage, we provide detailed, itemized invoices and technician notes describing the cause of failure, which you can submit directly to your insurance adjuster."
  }
];

export const Route = createFileRoute("/emergency-plumbing-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Plumber in Brownwood, TX | Fast Response | M. Webb Plumbing" },
      { name: "description", content: "Burst pipe? Severe leak? Flooded water heater? Call M. Webb Plumbing at (325) 208-2942 for 24/7 emergency plumbing response across Brownwood, Early, and Brown County." },
      { property: "og:title", content: "24/7 Emergency Plumber in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Burst pipe? Severe leak? Flooded water heater? Call M. Webb Plumbing at (325) 208-2942 for 24/7 emergency plumbing response across Brownwood, Early, and Brown County." },
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
        eyebrow="24/7 Emergency Response"
        title="Emergency Plumber in Brownwood, TX"
        sectionHeading="Immediate 24-Hour Dispatch for Urgent Plumbing Disasters"
        icon="Siren"
        serviceName="Emergency Plumbing"
        intro="When a pipe bursts, sewage backs up, or your water heater ruptures, every minute counts. M. Webb Plumbing provides around-the-clock emergency plumbing dispatch across Brownwood, Early, and Brown County."
        bullets={[
          "24/7 On-Call Emergency Dispatch",
          "45-60 Min Typical Local Response",
          "Burst Pipe Thawing & Repair",
          "Severe Water Leak Mitigation",
          "Emergency Sewer Backup Clearing",
          "Gas Leak Safety Testing & Isolation"
        ]}
        body={
          <>
            <div className="rounded-2xl border-2 border-red-500/20 bg-red-500/5 p-6 dark:bg-red-950/20">
              <h3 className="font-display text-xl font-bold text-red-600 dark:text-red-400">
                ⚠️ Emergency Plumbing Protocol: What to Do Right Now
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                Take these four steps immediately to protect your home and prevent catastrophic structural water damage before our technician arrives:
              </p>
              <ol className="mt-4 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">1</span>
                  <span><strong>Shut off the main water valve:</strong> Turn the valve clockwise (or perpendicular to the pipe) to immediately halt pressurized water flow into your home.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">2</span>
                  <span><strong>Kill electrical power:</strong> If water is near electrical outlets or pooling around your water heater, switch off the corresponding circuit breakers at your main panel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
                  <span><strong>Relieve residual line pressure:</strong> Open outdoor garden hose faucets and lowest-level sinks to drain residual water trapped inside your lines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">4</span>
                  <span><strong>Call our 24/7 emergency dispatch:</strong> Call <strong>{business.phone}</strong> for rapid dispatch directly to your address.</span>
                </li>
              </ol>
            </div>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              True 24/7 Emergency Coverage Across Brown County
            </h3>
            <p className="mt-3">
              Plumbing emergencies don't wait for regular business hours. A burst copper pipe in the attic or a collapsed main sewer line during a holiday weekend demands immediate, skilled intervention. Unlike referral networks that pass your call between out-of-town call centers, M. Webb Plumbing connects you directly with experienced local plumbers based right here in Brownwood.
            </p>

            <h3 className="mt-6 font-display text-xl font-bold text-foreground">
              What Qualifies as a Plumbing Emergency?
            </h3>
            <p className="mt-2">
              If you aren't sure whether your situation requires immediate late-night dispatch, consider these emergency conditions:
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                "Burst pipes from hard Texas winter freezes",
                "Raw sewage backing up into bathtubs or toilets",
                "Uncontrollable pressurized water leaks behind walls",
                "Ruptured water heater flooding garages or closets",
                "Sulfur or rotten egg smell indicating a gas leak",
                "Complete loss of running water to the entire home",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="text-red-500 font-bold">•</span> {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xl font-bold text-foreground">
              Frequently Asked Questions About Emergency Plumbing
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
        title="Facing a Plumbing Emergency in Brown County?"
        subtitle={`Don't let water damage destroy your home. Call our 24-hour dispatch line at ${business.phone} right now for immediate emergency service.`}
      />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
