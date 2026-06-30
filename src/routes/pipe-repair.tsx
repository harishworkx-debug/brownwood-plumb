import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "How do I know if I have a pipe leak?", a: "Signs include unexplained water bills, water stains on walls or ceilings, reduced water pressure, sounds of running water when nothing is on, and warm spots on floors (for hot water lines)." },
  { q: "Can you fix a pipe without cutting into my wall?", a: "For certain situations, we can use access panels or repair from existing openings. In many cases, minimal opening of a wall is necessary to properly repair a leak. We always aim for the least invasive approach." },
  { q: "Should I repair or replace my old pipes?", a: "For isolated leaks in otherwise sound pipes, repair is usually sufficient. For widespread corrosion, multiple failures, or pipes past their expected lifespan, replacement provides a more lasting solution." },
];

export const Route = createFileRoute("/pipe-repair")({
  head: () => ({
    meta: [
      { title: "Pipe Repair in Brownwood, TX | Leak Repair & Pipe Patching | M. Webb Plumbing" },
      { name: "description", content: "Professional pipe repair in Brownwood, TX. Fix leaks, cracks, and corrosion in water and drain pipes. Emergency service available. Call (325) 328-0435." },
      { name: "keywords", content: "pipe repair brownwood tx, water pipe leak repair, drain pipe repair, plumbing pipe repair brownwood" },
      { property: "og:title", content: "Pipe Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Professional pipe repair in Brownwood, TX. Fix leaks, cracks, and corrosion. Call (325) 328-0435." },
      { property: "og:url", content: "/pipe-repair" },
    ],
    links: [{ rel: "canonical", href: "/pipe-repair" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Pipe Repair"
        title="Pipe Repair Services"
        icon="GitBranch"
        serviceName="Pipe Repair"
        intro="Leaking or damaged pipes need professional attention before small problems become major water damage. M. Webb Plumbing Co. repairs all types of pipes throughout Brownwood, TX."
        bullets={["Water pipe repair", "Drain pipe repair", "Supply line repair", "Joint and connection repair", "Corrosion fixes", "Frozen pipe repair"]}
        body={
          <>
            <p>Your plumbing system includes pipes throughout your home — behind walls, under floors, in the ceiling, and underground. When a pipe leaks, cracks, or corrodes, prompt repair prevents ongoing damage and waste.</p>
            <p><strong>Common pipe problems we repair:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Punctured or cracked pipes from accidents or freezing</li>
              <li>Leaking joints and connections</li>
              <li>Corrosion and rust-through in older metal pipes</li>
              <li>Pinhole leaks from water chemistry</li>
              <li>Failed fittings and couplings</li>
              <li>Copper, PVC, PEX, and galvanized repairs</li>
            </ul>
            <p className="mt-4">We locate the source of the leak, assess the condition of surrounding pipes, and make proper repairs using appropriate materials. For older systems with widespread issues, we'll also discuss whether pipe replacement would be more cost-effective.</p>
            <p className="mt-2">Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and Brown County.</p>
          </>
        }
      />
      <CTABanner title="Pipe leak causing damage?" subtitle="Get it repaired properly. Same-day service available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
