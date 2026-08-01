import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Do you handle restaurant plumbing?",
    "a": "Yes, we specialize in commercial kitchen plumbing, including grease traps, floor drains, and high-capacity fixtures."
  }
];

export const Route = createFileRoute("/commercial-plumbing-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Expert Commercial Plumbing | M. Webb Plumbing" },
      { name: "description", content: "Reliable, efficient plumbing services for businesses, restaurants, and industrial facilities in Brown County." },
      { property: "og:title", content: "Expert Commercial Plumbing | M. Webb Plumbing" },
      { property: "og:description", content: "Reliable, efficient plumbing services for businesses, restaurants, and industrial facilities in Brown County." },
      { property: "og:url", content: `${BASE_URL}/commercial-plumbing-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/commercial-plumbing-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Commercial Plumbing"
        title="Expert Commercial Plumbing"
        icon="Building2"
        serviceName="Commercial Plumbing"
        intro="Reliable, efficient plumbing services for businesses, restaurants, and industrial facilities in Brown County."
        bullets={["Restaurant Plumbing","Retail Facilities","Industrial Systems","Backflow Testing","Grease Traps","Commercial Water Heaters"]}
        body={
          <>
            <p>We understand that plumbing issues mean downtime for your business. Our team provides fast, professional commercial plumbing services to keep your operations running smoothly.</p>
          </>
        }
      />
      <CTABanner title="Need commercial plumbing?" subtitle="Get it handled today. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
