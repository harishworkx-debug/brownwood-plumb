import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "Why does my toilet keep running?", a: "Common causes include a worn flapper, faulty fill valve, or improperly adjusted float. These are usually simple fixes that save water and stop the annoyance." },
  { q: "Should I repair or replace my toilet?", a: "For common issues like running, clogs, or minor leaks, repair is usually the best option. Consider replacement for cracks in the tank or bowl, serious rust/corrosion, or if upgrading to a more water-efficient model." },
  { q: "What causes a toilet to rock or wobble?", a: "A rocking toilet usually means the flange is damaged, the wax seal has failed, or the flooring underneath is deteriorating. This can lead to leaks and should be addressed promptly." },
];

export const Route = createFileRoute("/toilet-repair")({
  head: () => ({
    meta: [
      { title: "Toilet Repair & Installation in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Fast toilet repair in Brownwood, TX. Fix running toilets, clogs, leaks, and install new toilets. Upfront pricing, same-day service available. Call (325) 328-0435." },
      { name: "keywords", content: "toilet repair brownwood tx, running toilet repair, clogged toilet, toilet installation brownwood, toilet replacement" },
      { property: "og:title", content: "Toilet Repair & Installation in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Fast toilet repair in Brownwood, TX. Fix running toilets, clogs, leaks. Call (325) 328-0435." },
      { property: "og:url", content: "/toilet-repair" },
    ],
    links: [{ rel: "canonical", href: "/toilet-repair" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Toilet Repair"
        title="Toilet Repair & Installation"
        icon="Toilet"
        serviceName="Toilet Repair"
        intro="A running toilet can waste hundreds of gallons a day. A clogged toilet stops everything. From leaks and wobbles to complete replacements, M. Webb Plumbing Co. handles all toilet repairs in Brownwood, TX."
        bullets={["Running toilet repair", "Clog removal", "Leak repair", "Fill valve replacement", "Flange repair", "New toilet installation"]}
        body={
          <>
            <p>Toilets are simple fixtures, but when something goes wrong, the problems are frustrating and wasteful. A running toilet can silently waste over 200 gallons of water per day — adding up on your water bill and straining your septic system.</p>
            <p><strong>Common toilet problems we fix:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Running or continuously trickling water</li>
              <li>Frequent clogs or slow flushing</li>
              <li>Weak or incomplete flushes</li>
              <li>Water leaking around the base</li>
              <li>Rocking or unstable toilet</li>
              <li>Handle that won't work or sticks</li>
              <li>Fill problems (tank not filling or overfilling)</li>
            </ul>
            <p className="mt-4">Most issues are solved with replacement of inexpensive internal parts — flapper, fill valve, flush valve, or handle. For toilets with cracks, persistent problems, or outdated inefficient models, we also install new water-saving fixtures.</p>
            <p className="mt-2">We serve <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and all of Brown County with honest assessments and quality workmanship.</p>
          </>
        }
      />
      <CTABanner title="Toilet giving you trouble?" subtitle="Get it fixed fast. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
