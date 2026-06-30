import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "Do I need a water softener in Brownwood, TX?", a: "Brown County water tends to be moderately hard. Signs you could benefit from a softener include white scale buildup on fixtures, soap that won't lather well, dry skin and hair after bathing, and spots on dishes after washing." },
  { q: "How long does a water softener last?", a: "With proper maintenance, a quality water softener typically lasts 15-20 years. Regular salt refills and occasional cleaning extend the life of your system." },
  { q: "Will a water softener reduce my water usage?", a: "Indirectly, yes. Soft water lathers better, so you use less soap, detergent, and shampoo. It also prevents scale buildup in pipes and water heaters, improving efficiency and preventing premature replacement." },
];

export const Route = createFileRoute("/water-softener")({
  head: () => ({
    meta: [
      { title: "Water Softener Installation & Repair in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Water softener installation and service in Brownwood, TX. Hard water solutions, salt-based systems, and maintenance. Protect your pipes and fixtures. Call (325) 328-0435." },
      { name: "keywords", content: "water softener brownwood tx, water softener installation, hard water treatment, water softening system brownwood" },
      { property: "og:title", content: "Water Softener Installation & Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Water softener installation and service in Brownwood, TX. Hard water solutions. Call (325) 328-0435." },
      { property: "og:url", content: "/water-softener" },
    ],
    links: [{ rel: "canonical", href: "/water-softener" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Water Softeners"
        title="Water Softener Installation & Service"
        icon="Droplet"
        serviceName="Water Softener"
        intro="Hard water causes scale buildup, damages appliances, and leaves your skin feeling dry. A quality water softener protects your home and improves daily comfort. Expert installation throughout Brownwood, TX."
        bullets={["New system installation", "Water softener repair", "Salt tank maintenance", "System upgrades", "Hard water testing", "Whole-home treatment"]}
        body={
          <>
            <p>Hard water contains dissolved minerals — primarily calcium and magnesium. While not harmful to drink, hard water creates problems throughout your home: scale in pipes and water heaters, spotted dishes, stiff laundry, soap that won't lather, and dry skin and hair.</p>
            <p><strong>Signs you may need a water softener:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>White scale on faucets, showerheads, and fixtures</li>
              <li>Spots on glassware after washing</li>
              <li>Soap and shampoo that don't lather well</li>
              <li>Dry, itchy skin after bathing</li>
              <li>Stiff, scratchy laundry</li>
              <li>Reductions in water pressure over time</li>
              <li>Shortened water heater life</li>
            </ul>
            <p className="mt-4">We install and service water softeners from quality manufacturers. Proper sizing and installation ensures effective treatment without wasting water or salt. We also provide maintenance to keep your system running efficiently.</p>
            <p className="mt-2">Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and the entire Brown County area.</p>
          </>
        }
      />
      <CTABanner title="Tired of hard water problems?" subtitle="Get a water softener installed. Free estimates available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
