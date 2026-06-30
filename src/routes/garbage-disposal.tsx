import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";
import { faqSchema } from "@/lib/seo";

const faqs = [
  { q: "What should I do if my garbage disposal jams?", a: "First, turn it off and never put your hand inside. Most units have a reset button on the bottom. If that doesn't work, use the Allen wrench (usually stored under the sink) in the center socket to manually free the jam." },
  { q: "How long should a garbage disposal last?", a: "With proper use and care, a quality garbage disposal typically lasts 10-15 years. If you're experiencing frequent jams, loud noises, or rust, replacement may be more cost-effective than repair." },
  { q: "What shouldn't I put down my garbage disposal?", a: "Avoid fibrous foods (celery, corn husks), grease/oil, bones, fruit pits, pasta and rice, egg shells, and coffee grounds. These can dull blades, cause jams, or clog pipes." },
];

export const Route = createFileRoute("/garbage-disposal")({
  head: () => ({
    meta: [
      { title: "Garbage Disposal Repair & Installation in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Garbage disposal repair and installation in Brownwood, TX. Fix jams, leaks, and humming units. New disposal installation available. Call (325) 328-0435." },
      { name: "keywords", content: "garbage disposal repair brownwood tx, garbage disposal installation, disposer repair, kitchen disposal, garbage disposal replacement" },
      { property: "og:title", content: "Garbage Disposal Repair & Installation in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Garbage disposal repair and installation in Brownwood, TX. Fix jams and leaks. Call (325) 328-0435." },
      { property: "og:url", content: "/garbage-disposal" },
    ],
    links: [{ rel: "canonical", href: "/garbage-disposal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Garbage Disposal"
        title="Garbage Disposal Repair & Installation"
        icon="Recycle"
        serviceName="Garbage Disposal"
        intro="Garbage disposal making strange noises? Won't turn on? Leaking? We repair and install all brands of garbage disposals across Brownwood, TX."
        bullets={["Disposal jam repair", "Motor replacement", "Leak repair", "New disposal installation", "Upgrades and replacements", "Electrical connections"]}
        body={
          <>
            <p>When your garbage disposal works, you barely think about it. When it doesn't, you notice — jammed, leaking, making awful noises, or simply dead. We diagnose and fix disposal problems quickly, and install new units when repair isn't the right choice.</p>
            <p><strong>Common garbage disposal problems:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Jammed unit (humming but not spinning)</li>
              <li>Water leaking from disposal body or connections</li>
              <li>Loud grinding or metallic noises</li>
              <li>Unit won't turn on at all</li>
              <li>Bad odors that won't go away</li>
              <li>Slow draining despite disposal running</li>
            </ul>
            <p className="mt-4">Many issues are repairable, especially with newer units. But if your disposal is over 10 years old, rusted, or frequently jamming, a new installation often provides better reliability and performance.</p>
            <p className="mt-2">We install quality units from InSinkErator, Waste King, and other trusted brands. Serving <strong>Brownwood, Early, Bangs, Lake Brownwood, Zephyr</strong> and Brown County.</p>
          </>
        }
      />
      <CTABanner title="Disposal problems?" subtitle="Get it working again. Same-day service available." />
      <div className="h-24" />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
