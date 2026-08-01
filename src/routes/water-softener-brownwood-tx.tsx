import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "How do I know if I need a water softener?",
    "a": "Signs of hard water include white crusty buildup on faucets, dry skin and hair after showering, and clothes that feel stiff after washing."
  }
];

export const Route = createFileRoute("/water-softener-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Water Softener Installation | M. Webb Plumbing" },
      { name: "description", content: "Protect your pipes, appliances, and skin with professional water softener installation and service." },
      { property: "og:title", content: "Water Softener Installation | M. Webb Plumbing" },
      { property: "og:description", content: "Protect your pipes, appliances, and skin with professional water softener installation and service." },
      { property: "og:url", content: `${BASE_URL}/water-softener-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/water-softener-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Water Quality"
        title="Water Softener Installation"
        icon="Droplet"
        serviceName="Water Softeners"
        intro="Protect your pipes, appliances, and skin with professional water softener installation and service."
        bullets={["Water Softener Installation","System Repair","Filter Replacements","Hard Water Testing","Whole-Home Filtration","Maintenance Services"]}
        body={
          <>
            <p>Hard water is a common problem in Central Texas, leading to scale buildup that destroys water heaters, clogs showerheads, and leaves spots on dishes. We install premium water softening systems that extend the life of your plumbing.</p>
          </>
        }
      />
      <CTABanner title="Need water softeners?" subtitle="Get it handled today. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
