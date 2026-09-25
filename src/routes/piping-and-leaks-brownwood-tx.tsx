import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  {
    "q": "How do I know if I have a hidden leak?",
    "a": "Signs include an unexplained high water bill, the sound of running water when all fixtures are off, warm spots on the floor (slab leak), or sudden mold growth."
  }
];

export const Route = createFileRoute("/piping-and-leaks-brownwood-tx")({
  head: () => ({
    meta: [
      { title: "Leak Detection & Pipe Repair in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Fast, accurate leak detection, pipe repair, and full plumbing system replacements to protect your home from water damage." },
      { property: "og:title", content: "Leak Detection & Pipe Repair in Brownwood, TX | M. Webb Plumbing Co." },
      { property: "og:description", content: "Fast, accurate leak detection, pipe repair, and full plumbing system replacements to protect your home from water damage." },
      { property: "og:url", content: `${BASE_URL}/piping-and-leaks-brownwood-tx` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/piping-and-leaks-brownwood-tx` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Piping & Leaks"
        title="Leak Detection & Pipe Repair in Brownwood, TX"
        icon="Droplets"
        serviceName="Piping & Leaks"
        intro="Fast, accurate leak detection, pipe repair, and full plumbing system replacements to protect your home from water damage."
        bullets={["Non-Invasive Leak Detection","Slab Leak Repair","Water Line Repair","Pipe Replacement","Whole-Home Repiping","Winterization"]}
        body={
          <>
            <p>Hidden leaks can cause catastrophic damage to your foundation and walls. We use advanced non-invasive leak detection technology to pinpoint leaks without unnecessary destruction. Whether you need a single pipe repaired or an aging plumbing system completely replaced, we deliver permanent solutions.</p>

            <p className="mt-4">Our water leak detection services can pinpoint hidden water leaks and slab leaks before they cause major damage. Once located, we provide expert burst pipe repair, water line repair, and complete pipe replacement in Brownwood to secure your home's water supply lines.</p>
          </>
        }
      />
      <CTABanner title="Leak Detection & Pipe Repair in Brownwood, TX" subtitle="Leak Detection & Pipe Repair in Brownwood, TX" />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs.map(f => ({ q: f.q, a: f.a })))} />
    </>
  );
}
