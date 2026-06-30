import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const BASE_URL = `https://${business.website}`;

const faqs = [
  { q: "What is a drain camera inspection?", a: "A specialized waterproof camera is inserted into your drain or sewer line, transmitting real-time video to a monitor. This allows us to see exactly what's causing problems without excavation." },
  { q: "When should I get a drain camera inspection?", a: "Before buying a home, when you have recurring drain problems, to locate a specific blockage, or to assess the condition of older sewer lines. It's also valuable for preventative maintenance." },
  { q: "Can camera inspection find all sewer problems?", a: "Camera inspection reveals most issues including cracks, root intrusion, pipe scale, blockages, and collapsed sections. For leaks, we may also use smoke testing or hydrostatic testing." },
];

export const Route = createFileRoute("/drain-camera-inspection")({
  head: () => ({
    meta: [
      { title: "Drain Camera Inspection in Brownwood, TX | Sewer Video Inspection | M. Webb" },
      { name: "description", content: "See inside your drains with video camera inspection in Brownwood, TX. Locate blockages, cracks, and pipe damage without digging. Pre-purchase inspections available. Call (325) 328-0435." },
      { name: "keywords", content: "drain camera inspection brownwood tx, sewer camera inspection, video pipe inspection, drain video inspection, sewer line inspection" },
      { property: "og:title", content: "Drain Camera Inspection in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "See inside your drains with video camera inspection in Brownwood, TX. Locate problems without digging. Call (325) 328-0435." },
      { property: "og:url", content: `${BASE_URL}/drain-camera-inspection` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/drain-camera-inspection` }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Drain Camera Inspection"
        title="Drain Camera Inspection"
        icon="Video"
        serviceName="Drain Camera Inspection"
        intro="Stop guessing about your drain problems. Video camera inspection lets us see exactly what's going on inside your pipes — no excavation required. Precise diagnosis across Brownwood, TX."
        bullets={["Real-time video inspection", "Sewer line assessment", "Pre-purchase inspections", "Blockage location", "Pipe condition assessment", "Post-repair verification"]}
        body={
          <>
            <p>Before modern technology, finding the source of a drain problem often meant digging up your yard or floors just to see what was going on. Today, drain camera inspection allows us to look inside your pipes and pinpoint problems with precision.</p>
            <p><strong>When you need a camera inspection:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Recurring drain problems that never fully resolve</li>
              <li>Slow drains with no obvious cause</li>
              <li>Pre-purchase plumbing inspection for homebuyers</li>
              <li>Locating the exact point of a blockage or break</li>
              <li>Assessing the condition of older sewer lines</li>
              <li>Identifying root intrusion in underground pipes</li>
              <li>Verifying proper installation after repairs</li>
            </ul>
            <p className="mt-4">The waterproof camera travels through your drain or sewer line, transmitting live video to our monitor. We can see cracks, collapsed sections, root intrusion, buildup, and foreign objects. You'll see exactly what we see, and we'll explain what it means for your plumbing system.</p>
            <p className="mt-2">Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and the entire Brown County area.</p>
          </>
        }
      />
      <CTABanner title="See what's happening in your drains" subtitle="Schedule a video inspection and get real answers." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
