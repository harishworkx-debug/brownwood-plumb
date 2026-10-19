import { createFileRoute } from "@tanstack/react-router";
import { AreaPageShell } from "@/components/site/AreaPageShell";
import { business, serviceAreas } from "@/data/business";
import { detailedServiceAreas } from "@/data/serviceAreasData";

const BASE_URL = `https://${business.website}`;
const SLUG = "bangs-tx";
const area = serviceAreas.find((a) => a.slug === SLUG)!;
const detail = detailedServiceAreas[SLUG];

export const Route = createFileRoute("/plumber-bangs-tx")({
  head: () => {
    const title = `Plumber in ${area.name} | M. Webb Plumbing Co.`;
    const desc = `${area.name} residential & emergency plumbing from M. Webb Plumbing. 35+ years experience, ${detail ? detail.responseTime.toLowerCase() : "fast local dispatch"}. Call (325) 208-2942.`;
    const keywords = detail ? detail.seoKeywords.join(", ") : `plumber ${area.name}, emergency plumber ${area.name}`;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `${BASE_URL}/plumber-${SLUG}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `${BASE_URL}/plumber-${SLUG}` }],
    };
  },
  component: () => <AreaPageShell area={area} />,
});
