import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/residential-plumbing")({
  head: () => ({
    meta: [
      { title: "Residential Plumber in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Trusted residential plumbing services in Brownwood, TX. We repair leaks, replace fixtures, install plumbing systems, and keep your home's plumbing running smoothly." },
      { name: "keywords", content: "residential plumber, home plumber, plumbing repair, water heater repair, drain cleaning, brownwood tx" },
      { property: "og:title", content: "Residential Plumber in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Trusted residential plumbing services in Brownwood, TX. We repair leaks, replace fixtures, install plumbing systems, and keep your home's plumbing running smoothly." },
      { property: "og:url", content: `${BASE_URL}/residential-plumbing` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/residential-plumbing` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Residential Plumbing"
        title="Residential Plumbing"
        icon="Home"
        serviceName="Residential Plumbing"
        intro="From a dripping faucet to a full repipe, M. Webb Plumbing Co. handles every kind of home plumbing project across Brownwood, TX — with the care and honesty your home deserves."
        bullets={["Leak detection & repair", "Faucet & fixture installation", "Water heaters & recirculation pumps", "Drain cleaning", "Toilet repair & replacement", "Whole-home repipes"]}
        body={
          <>
            <p>Your home's plumbing system runs constantly behind the scenes — and when something goes wrong, you want a plumber you can actually trust in your house. M. Webb Plumbing Co. has been the residential plumber Brownwood families call for over 35 years, because we treat every home like it's our own.</p>
            <p>We service all common home plumbing systems including supply lines, drain lines, fixtures, faucets, toilets, garbage disposals, water heaters and more. Whether it's a small repair, a remodel, or an aging plumbing system that finally needs replacing, we'll walk you through the options, give you a fair upfront price and do the work the right way.</p>
            <p>Serving homeowners in <strong>Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX</strong>.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}