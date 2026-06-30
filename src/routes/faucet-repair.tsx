import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/faucet-repair")({
  head: () => ({
    meta: [
      { title: "Faucet Repair & Replacement in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "From dripping faucets to new fixture installation, M. Webb Plumbing provides professional faucet repair and replacement in Brownwood, TX." },
      { property: "og:title", content: "Faucet Repair & Replacement in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "From dripping faucets to new fixture installation, M. Webb Plumbing provides professional faucet repair and replacement in Brownwood, TX." },
      { property: "og:url", content: `${BASE_URL}/faucet-repair` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/faucet-repair` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Faucet Repair & Replacement"
        title="Faucet Repair & Replacement"
        icon="Wrench"
        serviceName="Faucet Repair & Replacement"
        intro="That constant drip is wasting more water than you think. We repair and replace kitchen, bath and utility faucets across Brownwood, TX — quickly and cleanly."
        bullets={["Leaky faucet repair", "Cartridge & valve replacement", "New faucet installation", "Shower & tub valves", "Outdoor hose bibs", "Fixture upgrades"]}
        body={
          <>
            <p>Faucet problems are some of the most common plumbing complaints — but they can also be deceptively tricky. The wrong cartridge or a small installation mistake leads to bigger leaks, water damage, and a repair you'll be doing twice.</p>
            <p>M. Webb Plumbing Co. handles faucet repair and replacement the right way: identifying the actual cause of the problem, using quality parts, and making sure the fixture is properly sealed and functioning before we leave.</p>
            <p>Available across <strong>Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX</strong>.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}