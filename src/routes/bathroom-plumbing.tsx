import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/bathroom-plumbing")({
  head: () => ({
    meta: [
      { title: "Bathroom Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Expert bathroom plumbing in Brownwood, TX. Toilet repair, shower installation, bathtub plumbing, sink repair, drain cleaning. Renovations welcome. Call (325) 328-0435." },
      { name: "keywords", content: "bathroom plumbing brownwood tx, toilet repair, shower installation brownwood, bathroom sink repair, bathtub plumbing" },
      { property: "og:title", content: "Bathroom Plumbing Services in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Expert bathroom plumbing in Brownwood, TX. Toilet, shower, tub, and sink services. Call (325) 328-0435." },
      { property: "og:url", content: `${BASE_URL}/bathroom-plumbing` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/bathroom-plumbing` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Bathroom Plumbing"
        title="Bathroom Plumbing Services"
        icon="Bath"
        serviceName="Bathroom Plumbing"
        intro="Bathrooms have more plumbing fixtures than any other room in your home. When something goes wrong, you need it fixed fast. M. Webb Plumbing Co. handles every bathroom plumbing need across Brownwood, TX."
        bullets={["Toilet repair & installation", "Shower & tub plumbing", "Bathroom sink service", "Faucet replacement", "Shower valve repair", "Bathroom remodels"]}
        body={
          <>
            <p>From the toilet and sink to the tub and shower, your bathroom's plumbing systems work hard every day. Leaks, clogs, and fixture failures can disrupt your routine and cause water damage if not addressed.</p>
            <p>Our bathroom plumbing services include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Toilets</strong> — Fix running toilets, clogs, leaks, and install new efficient models</li>
              <li><strong>Showers</strong> — Valve repair, head installation, leak fixes, pressure issues</li>
              <li><strong>Tubs</strong> — Drain service, faucet repair, overflow problems</li>
              <li><strong>Sinks</strong> — Faucet repair, drain clearing, trap replacement</li>
              <li><strong>Vanities</strong> — Install new sinks and fixtures</li>
              <li><strong>Bathroom additions & remodels</strong> — Complete plumbing rough-in and finishing</li>
            </ul>
            <p className="mt-4">Proper bathroom ventilation and maintenance prevent mold and water damage. We can assess your bathroom plumbing and recommend upgrades for better performance and water efficiency.</p>
            <p className="mt-2">Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and all Brown County communities.</p>
          </>
        }
      />
      <CTABanner title="Bathroom plumbing problem?" subtitle="We fix toilets, showers, sinks, and more. Same-day service." />
      <div className="h-24" />
    </>
  );
}
