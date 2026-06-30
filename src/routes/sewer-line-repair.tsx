import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  { q: "How do I know if my sewer line needs repair?", a: "Watch for multiple slow drains, sewage odors, lush patches of grass in your yard, gurgling toilets, or water backing up in floor drains. A camera inspection confirms the problem and location." },
  { q: "What causes sewer line damage in Brownwood?", a: "Common causes include tree root intrusion, pipe aging and corrosion, ground shifting, grease buildup, and foreign objects flushed down toilets. Brown County's clay soil can also stress older pipes." },
  { q: "Do you have to dig up my yard to repair a sewer line?", a: "Not always. For certain repairs, we offer trenchless options like pipe lining that minimize excavation. We'll explain all options after inspecting your specific situation." },
];

export const Route = createFileRoute("/sewer-line-repair")({
  head: () => ({
    meta: [
      { title: "Sewer Line Repair in Brownwood, TX | Sewer Pipe Replacement | M. Webb Plumbing" },
      { name: "description", content: "Expert sewer line repair and replacement in Brownwood, TX. Fix cracks, blockages, root intrusion, and collapsed sewer pipes. Trenchless options available. Call (325) 328-0435." },
      { name: "keywords", content: "sewer line repair brownwood tx, sewer pipe repair, sewer replacement, trenchless sewer repair, main sewer line repair" },
      { property: "og:title", content: "Sewer Line Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Expert sewer line repair and replacement in Brownwood, TX. Fix cracks, blockages, and root intrusion. Call (325) 328-0435." },
      { property: "og:url", content: `${BASE_URL}/sewer-line-repair` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/sewer-line-repair` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Sewer Line Repair"
        title="Sewer Line Repair & Replacement"
        icon="ArrowDownToLine"
        serviceName="Sewer Line Repair"
        intro="Sewer line problems don't get better on their own — they get worse. M. Webb Plumbing Co. repairs and replaces damaged sewer lines throughout Brownwood, TX, with solutions for every situation."
        bullets={["Sewer line camera inspection", "Crack and break repair", "Root intrusion removal", "Trenchless pipe lining", "Full sewer replacement", "Emergency sewer service"]}
        body={
          <>
            <p>Your sewer line carries all the waste water from your home to the municipal system or septic tank. When it's damaged, blocked, or collapsed, the consequences can be costly and unpleasant.</p>
            <p><strong>Signs of sewer line problems:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Multiple drains backing up at once</li>
              <li>Gurgling sounds from toilets or drains</li>
              <li>Unpleasant sewage odors around your property</li>
              <li>Lush, unusually green patches in your yard</li>
              <li>Water pooling around floor drains</li>
              <li>Sinkholes or depressions in your yard</li>
            </ul>
            <p className="mt-4">Common causes of sewer line damage in the Brown County area include tree root intrusion (roots seek water and nutrients in sewer pipes), aging cast iron or clay pipes, ground shifting, and buildup of grease or debris.</p>
            <p className="mt-2">After a camera inspection identifies the problem, we'll explain your repair options. Depending on the situation, we may recommend spot repair, trenchless pipe lining (rehabilitation without major excavation), or complete pipe replacement. We serve <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and surrounding communities.</p>
          </>
        }
      />
      <CTABanner title="Sewer line emergency?" subtitle="Sewage backups need immediate attention. Call now for 24-hour service." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
