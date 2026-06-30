import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "How often should I have my drains cleaned?", a: "For preventive maintenance, professional drain cleaning every 1-2 years helps prevent major clogs. If you have slow drains or frequent backups, schedule service sooner." },
  { q: "Can I use chemical drain cleaners?", a: "We generally don't recommend frequent chemical cleaner use. They can damage older pipes, harm the environment, and often provide only temporary relief. Professional drain cleaning addresses the root cause." },
  { q: "Why do my drains keep clogging?", a: "Recurring clogs often indicate a deeper problem: tree root intrusion, pipe scale buildup, improper pipe slope, or damaged sewer lines. A camera inspection can identify the underlying cause." },
];

export const Route = createFileRoute("/drain-cleaning")({
  head: () => ({
    meta: [
      { title: "Drain Cleaning in Brownwood, TX | Clogged Drain Repair | M. Webb Plumbing" },
      { name: "description", content: "Professional drain cleaning in Brownwood, TX. Clear clogged drains, sewer lines, and main line blockages. Fast service, upfront pricing. Call (325) 328-0435." },
      { name: "keywords", content: "drain cleaning brownwood tx, clogged drain repair, drain unclogging, sewer drain cleaning, main line cleaning brownwood" },
      { property: "og:title", content: "Drain Cleaning in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Professional drain cleaning in Brownwood, TX. Clear clogged drains and sewer lines. Fast service. Call (325) 328-0435." },
      { property: "og:url", content: "/drain-cleaning" },
    ],
    links: [{ rel: "canonical", href: "/drain-cleaning" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Drain Cleaning"
        title="Drain Cleaning & Clog Removal"
        icon="Drill"
        serviceName="Drain Cleaning"
        intro="Slow draining sink? Standing water in the shower? Toilet backing up? M. Webb Plumbing Co. clears clogged drains quickly and completely throughout Brownwood, TX."
        bullets={["Kitchen drain cleaning", "Bathroom drain clearing", "Floor drain service", "Main sewer line cleaning", "Hydro jetting", "Preventive maintenance"]}
        body={
          <>
            <p>Clogged drains are one of the most common — and frustrating — plumbing problems. While store-bought drain cleaners might offer temporary relief, they rarely address the full blockage and can damage older pipes. Professional drain cleaning clears the entire line, not just enough to let water through.</p>
            <p><strong>Signs you need professional drain cleaning:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Water draining slowly from sinks, tubs, or showers</li>
              <li>Gurgling sounds from drains</li>
              <li>Water backing up in one fixture when another is used</li>
              <li>Frequent need for plunging</li>
              <li>Foul odors coming from drains</li>
              <li>Multiple clogged drains at once (indicates main line issue)</li>
            </ul>
            <p className="mt-4">We use professional-grade equipment to clear blockages caused by grease buildup, hair, soap scum, food waste, mineral deposits, and tree root intrusion. For tough blockages, hydro jetting uses high-pressure water to scour the inside of pipes clean.</p>
            <p className="mt-2">Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and all of Brown County.</p>
          </>
        }
      />
      <CTABanner title="Clogged drain driving you crazy?" subtitle="Get it cleared today. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
