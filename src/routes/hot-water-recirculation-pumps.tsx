import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/hot-water-recirculation-pumps")({
  head: () => ({
    meta: [
      { title: "Hot Water Recirculation Pump Installation | Brownwood, TX" },
      { name: "description", content: "Hot water recirculation pump installation in Brownwood, TX. Instant hot water at every faucet — save water and time. (325) 328-0435." },
      { property: "og:title", content: "Hot Water Recirculation Pumps — Brownwood, TX" },
      { property: "og:description", content: "Professional installation of hot water recirculation pumps for Brown County homes." },
      { property: "og:url", content: "/hot-water-recirculation-pumps" },
    ],
    links: [{ rel: "canonical", href: "/hot-water-recirculation-pumps" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Hot Water Recirculation Pumps"
        title="Hot Water Recirculation Pumps"
        icon="Flame"
        serviceName="Hot Water Recirculation Pumps"
        intro="Tired of waiting forever for hot water? A hot water recirculation pump gives you near-instant hot water at every faucet and shower — while saving thousands of gallons a year."
        bullets={["Energy-efficient installations", "Dedicated return line systems", "Crossover (no-return-line) options", "Pump sizing & selection", "Timer & smart controls", "Existing system retrofits"]}
        body={
          <>
            <p>Hot water recirculation pumps are one of the best small upgrades you can make to a home — especially for larger houses or homes where the water heater is far from the master bath. Instead of running the tap for two minutes waiting for hot water, you get it almost instantly.</p>
            <p>We help Brownwood homeowners select and install the right recirculation pump for their plumbing layout — whether that's a dedicated return-line system on a new build or a crossover-style retrofit for an existing home. The result: less wasted water, lower bills, and more comfort.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}