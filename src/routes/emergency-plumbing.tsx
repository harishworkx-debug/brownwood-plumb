import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "Do you really answer the phone 24 hours a day?", a: "Yes. We maintain a true 24-hour on-call emergency line for plumbing emergencies throughout Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX." },
  { q: "What counts as a plumbing emergency?", a: "Burst pipes, major leaks, no water in the home, sewage backups, overflowing toilets and water heater failures all qualify. When in doubt, call." },
  { q: "Are emergency rates much higher?", a: "Emergency service does carry a call-out premium, but our pricing stays fair and we always give you an upfront estimate before starting work." },
];

export const Route = createFileRoute("/emergency-plumbing")({
  head: () => ({
    meta: [
      { title: "24 Hour Emergency Plumber Brownwood, TX | Call NOW (325) 328-0435" },
      { name: "description", content: "24-hour emergency plumber in Brownwood, Early, Bangs, Lake Brownwood & Zephyr TX. Burst pipes, leaks, no water. Fast response guaranteed. (325) 328-0435." },
      { name: "keywords", content: "emergency plumber brownwood tx, 24 hour plumber, burst pipe, emergency plumbing service, plumbing emergency" },
      { property: "og:title", content: "24 Hour Emergency Plumber — Brownwood, TX" },
      { property: "og:description", content: "Burst pipe? Major leak? Call M. Webb Plumbing Co. for fast 24-hour emergency plumbing service in Brownwood and surrounding areas." },
      { property: "og:url", content: "/emergency-plumbing" },
    ],
    links: [{ rel: "canonical", href: "/emergency-plumbing" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="24-Hour Emergency"
        title="Emergency Plumbing"
        icon="Siren"
        serviceName="Emergency Plumbing"
        intro="When water is pouring into your home or business, every minute matters. M. Webb Plumbing Co. provides 24-hour emergency plumbing service across Brownwood, TX and the surrounding communities."
        bullets={["Burst pipes & flooding", "Major water leaks", "Water line emergencies", "Overflowing toilets & fixtures", "Sewer & drain backups", "No-water situations"]}
        body={
          <>
            <p>A plumbing emergency in the middle of the night isn't just inconvenient — it can quickly turn into thousands of dollars of water damage. That's why we keep a true 24-hour on-call line for our Brownwood neighbors. Whether it's a burst pipe at 2 AM or a sudden flood under the kitchen sink, you'll talk to an experienced local plumber, not a call center.</p>
            <p>Our emergency plumbing service covers homes and businesses across <strong>Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX</strong>. We arrive prepared to stop the immediate problem, assess the underlying issue, and walk you through your repair options with honest, upfront pricing.</p>
            <p>If you're dealing with an active leak right now: shut off the main water valve to your home (usually near the street or in a utility area), move valuables away from the water, and call us at <strong>(325) 328-0435</strong>. We'll be on our way.</p>
          </>
        }
      />
      <CTABanner title="Plumbing emergency right now?" subtitle="Don't wait — call us 24/7 and we'll get someone out fast." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}