import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  { q: "How do I know if my house needs repiping?", a: "Signs include multiple leaks, discolored water, reduced water pressure throughout the house, water that smells metallic, pipes that have been repaired repeatedly, or a home with original galvanized pipes over 40 years old." },
  { q: "How long does a whole-house repipe take?", a: "Most residential repipes are completed in 1-3 days. We work efficiently to restore your water service each evening so your home remains livable during the project." },
  { q: "What type of pipe do you recommend for repiping?", a: "We primarily use PEX (cross-linked polyethylene) for repiping due to its durability, flexibility, resistance to corrosion, and cost-effectiveness. Copper is used when specifically requested or when local conditions warrant it." },
];

export const Route = createFileRoute("/pipe-replacement")({
  head: () => ({
    meta: [
      { title: "Pipe Replacement & Repiping in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Whole-house repiping and pipe replacement in Brownwood, TX. Replace old galvanized or failing pipes with modern PEX or copper. Free estimates. Call (325) 328-0435." },
      { name: "keywords", content: "pipe replacement brownwood tx, whole house repiping, repipe specialist, pipe replacement cost brownwood" },
      { property: "og:title", content: "Pipe Replacement & Repiping in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Whole-house repiping and pipe replacement in Brownwood, TX. Replace old pipes with modern materials. Call (325) 328-0435." },
      { property: "og:url", content: `${BASE_URL}/pipe-replacement` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/pipe-replacement` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Pipe Replacement"
        title="Pipe Replacement & Repiping"
        icon="Replace"
        serviceName="Pipe Replacement"
        intro="When pipe repairs become frequent, or old pipes are failing throughout your home, replacement offers a lasting solution. M. Webb Plumbing Co. specializes in whole-house repiping across Brownwood, TX."
        bullets={["Whole-house repiping", "Galvanized pipe replacement", "PEX installation", "Copper pipe installation", "Minimal wall disruption", "Long-term warranties"]}
        body={
          <>
            <p>Older homes often have plumbing systems that have simply reached the end of their service life. Galvanized steel pipes corrode from the inside, copper develops pinhole leaks, and repeated repairs add up. A complete repipe solves these problems for decades to come.</p>
            <p><strong>When to consider repiping:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Multiple leaks in different locations</li>
              <li>Galvanized pipes over 40 years old</li>
              <li>Rusty or discolored water from pipes</li>
              <li>Significantly reduced water pressure</li>
              <li>Visible corrosion on exposed pipes</li>
              <li>Frequent pinhole leaks</li>
              <li>Home has polybutylene pipes (1970s-1990s)</li>
            </ul>
            <p className="mt-4">Modern PEX tubing offers excellent durability, resists scale and corrosion, and can be installed with fewer wall openings than rigid pipe. We plan repiping projects to minimize disruption, keeping your home functional throughout the process.</p>
            <p className="mt-2">Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and Brown County. Free estimates for repiping projects.</p>
          </>
        }
      />
      <CTABanner title="Ready for worry-free plumbing?" subtitle="Get a free repiping estimate. Financing available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
