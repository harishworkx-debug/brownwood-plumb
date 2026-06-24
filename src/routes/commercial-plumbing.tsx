import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/commercial-plumbing")({
  head: () => ({
    meta: [
      { title: "Commercial Plumber Brownwood, TX | Restaurants, Offices, Retail | 24 Hr Service" },
      { name: "description", content: "Commercial plumber in Brownwood, TX. Restaurants, offices, retail & industrial plumbing. Fast response, minimal downtime. Call (325) 328-0435." },
      { name: "keywords", content: "commercial plumber, business plumbing, restaurant plumber, office plumbing, industrial plumbing, brownwood tx" },
      { property: "og:title", content: "Commercial Plumber in Brownwood, TX | Fast Service" },
      { property: "og:description", content: "Commercial plumbing for businesses across Brown County — installations, repairs and maintenance with minimal downtime." },
      { property: "og:url", content: "/commercial-plumbing" },
    ],
    links: [{ rel: "canonical", href: "/commercial-plumbing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Commercial Plumbing"
        title="Commercial Plumbing"
        icon="Building2"
        serviceName="Commercial Plumbing"
        intro="Commercial plumbing has different stakes — downtime costs money. M. Webb Plumbing Co. provides fast, professional commercial plumbing service to businesses throughout Brownwood, TX."
        bullets={["Restaurants & food service", "Offices & retail spaces", "Industrial properties", "New construction & build-outs", "Backflow & code compliance", "Preventive maintenance programs"]}
        body={
          <>
            <p>For more than three decades, Brown County businesses have called M. Webb Plumbing Co. when they need commercial plumbing work done right, on time and with minimal disruption. We understand the realities of operating a business: every hour your plumbing is down is an hour your operation isn't running.</p>
            <p>We service everything from small retail spaces to busy restaurants and industrial properties — handling repairs, replacements, new installations, code-required backflow work and ongoing preventive maintenance.</p>
            <p>Need a commercial plumber across <strong>Brownwood, Early, Bangs, Lake Brownwood or Zephyr, TX</strong>? Call <strong>(325) 328-0435</strong> for fast, professional service.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}