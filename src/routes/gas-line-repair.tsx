import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "How do I know if I have a gas leak?", a: "Warning signs include a rotten egg smell (added to natural gas), hissing sounds near gas lines, dead vegetation near buried lines, or higher than expected gas bills. If you suspect a gas leak, leave the area and call your gas company immediately, then call us for repair." },
  { q: "Can you work on my gas lines?", a: "Yes. We're qualified to repair and install gas lines for appliances including water heaters, furnaces, stoves, and outdoor grills. We ensure all work meets code and safety requirements." },
  { q: "Do you offer emergency gas line service?", a: "For suspected gas leaks, first leave your home and call your gas company's emergency line. For non-emergency gas line repairs and installations, call us at (325) 328-0435 to schedule." },
];

export const Route = createFileRoute("/gas-line-repair")({
  head: () => ({
    meta: [
      { title: "Gas Line Repair in Brownwood, TX | Safe Gas Pipe Service | M. Webb Plumbing" },
      { name: "description", content: "Licensed gas line repair and installation in Brownwood, TX. Water heater gas lines, stove hookups, outdoor grill lines. Safety-focused service. Call (325) 328-0435." },
      { name: "keywords", content: "gas line repair brownwood tx, gas pipe repair, gas line installation, water heater gas line, stove gas line brownwood" },
      { property: "og:title", content: "Gas Line Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Licensed gas line repair and installation in Brownwood, TX. Safe, code-compliant service. Call (325) 328-0435." },
      { property: "og:url", content: "/gas-line-repair" },
    ],
    links: [{ rel: "canonical", href: "/gas-line-repair" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Gas Line Services"
        title="Gas Line Repair & Installation"
        icon="AlertTriangle"
        serviceName="Gas Line Repair"
        intro="Gas line work requires training, precision, and proper permitting. M. Webb Plumbing Co. provides safe gas line repair and installation for water heaters, appliances, and outdoor use throughout Brownwood, TX."
        bullets={["Gas leak diagnosis", "Water heater gas lines", "Stove & range hookups", "Outdoor grill lines", "Gas pipe repair", "Code-compliant installation"]}
        body={
          <>
            <p className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-red-800">
              <strong>Suspect a gas leak?</strong> Leave your home immediately. Do not operate electrical switches or create sparks. From a safe distance, call your gas company's emergency number. Then contact us for repair.
            </p>
            <p>Working with natural gas lines is serious business. Improper installation or repair can lead to dangerous leaks, fire hazards, and code violations. Our experienced plumbers handle gas line work with the care and expertise it demands.</p>
            <p><strong>Our gas line services:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Water heater gas supply lines</li>
              <li>Furnace and HVAC connections</li>
              <li>Stove and range gas hookups</li>
              <li>Outdoor barbecue and grill lines</li>
              <li>Gas line repair and leak detection</li>
              <li>Gas log lighter installation</li>
              <li>Pipe sizing for proper flow</li>
            </ul>
            <p className="mt-4">All gas work is performed to meet local codes and is pressure-tested for safety. We serve <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and Brown County.</p>
          </>
        }
      />
      <CTABanner title="Need gas line work?" subtitle="Safety first. Call for professional gas line service." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
