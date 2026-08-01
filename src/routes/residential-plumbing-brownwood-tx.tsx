import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "Do you offer free estimates for home plumbing?",
    "a": "Yes, we offer free estimates on most major residential plumbing projects and replacements."
  }
];

export const Route = createFileRoute("/residential-plumbing-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Complete Residential Plumbing | M. Webb Plumbing" },
      { name: "description", content: "From minor repairs to major installations, we provide trusted, high-quality plumbing services for homeowners throughout Central Texas." },
      { property: "og:title", content: "Complete Residential Plumbing | M. Webb Plumbing" },
      { property: "og:description", content: "From minor repairs to major installations, we provide trusted, high-quality plumbing services for homeowners throughout Central Texas." },
      { property: "og:url", content: `${BASE_URL}/residential-plumbing-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/residential-plumbing-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Residential Plumbing"
        title="Complete Residential Plumbing"
        icon="Home"
        serviceName="Residential Plumbing"
        intro="From minor repairs to major installations, we provide trusted, high-quality plumbing services for homeowners throughout Central Texas."
        bullets={["Fixture Repairs","Pipe Installations","Remodeling Plumbing","Maintenance Plans","Troubleshooting","System Upgrades"]}
        body={
          <>
            <p>Your home's plumbing system is critical to your daily life. We handle everything from a dripping faucet to a complete house repipe with the care and professionalism developed over 35 years of service.</p>
          </>
        }
      />
      <CTABanner title="Need residential plumbing?" subtitle="Get it handled today. Same-day appointments available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
