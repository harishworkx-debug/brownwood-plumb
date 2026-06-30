import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/kitchen-plumbing")({
  head: () => ({
    meta: [
      { title: "Kitchen Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Complete kitchen plumbing services in Brownwood, TX. Sink installation, faucet repair, garbage disposal, dishwasher hookup, drain cleaning. Call (325) 328-0435." },
      { name: "keywords", content: "kitchen plumbing brownwood tx, kitchen sink installation, kitchen faucet repair, dishwasher installation brownwood" },
      { property: "og:title", content: "Kitchen Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Complete kitchen plumbing services in Brownwood, TX. Sink, faucet, disposal, and more. Call (325) 328-0435." },
      { property: "og:url", content: "/kitchen-plumbing" },
    ],
    links: [{ rel: "canonical", href: "/kitchen-plumbing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Kitchen Plumbing"
        title="Kitchen Plumbing Services"
        icon="ChefHat"
        serviceName="Kitchen Plumbing"
        intro="The kitchen is the heart of your home — and it has more plumbing than you might think. From sinks and faucets to drains and disposals, M. Webb Plumbing Co. handles it all in Brownwood, TX."
        bullets={["Sink repair & installation", "Kitchen faucet service", "Garbage disposal work", "Dishwasher hookup", "Ice maker lines", "Drain cleaning"]}
        body={
          <>
            <p>Kitchen plumbing encompasses everything under and behind your sink: supply lines, drain lines, faucet, disposal, and often connections to your dishwasher and refrigerator. Problems here affect your daily routines and can cause water damage if ignored.</p>
            <p>We handle all kitchen plumbing needs:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sinks</strong> — Repair leaks, replace worn sinks, install new farmhouse or undermount styles</li>
              <li><strong>Faucets</strong> — Fix drips, upgrade fixtures, install pull-down or commercial-style faucets</li>
              <li><strong>Drains</strong> — Clear clogs, repair leaks, install new basket strainers</li>
              <li><strong>Garbage disposals</strong> — Repair or install new units</li>
              <li><strong>Dishwashers</strong> — Install drain connections and supply lines</li>
              <li><strong>Refrigerator lines</strong> — Install or repair ice maker water supply</li>
            </ul>
            <p className="mt-4">Whether you have a simple faucet repair or are planning a full kitchen remodel, we provide the plumbing expertise needed. Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and surrounding areas.</p>
          </>
        }
      />
      <CTABanner title="Kitchen plumbing needs?" subtitle="From minor repairs to remodel hookups — we're here to help." />
      <div className="h-24" />
    </>
  );
}
