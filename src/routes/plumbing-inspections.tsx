import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/plumbing-inspections")({
  head: () => ({
    meta: [
      { title: "Plumbing Inspections in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Thorough plumbing inspections in Brownwood, TX. Pre-purchase, preventive and diagnostic inspections by a 35+ year local plumber." },
      { property: "og:title", content: "Plumbing Inspections in Brownwood, TX" },
      { property: "og:description", content: "Detailed plumbing inspections for buyers, sellers and homeowners across Brown County." },
      { property: "og:url", content: "/plumbing-inspections" },
    ],
    links: [{ rel: "canonical", href: "/plumbing-inspections" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Plumbing Inspections"
        title="Plumbing Inspections"
        icon="ClipboardCheck"
        serviceName="Plumbing Inspections"
        intro="Buying a home? Selling one? Worried about hidden plumbing issues? A professional inspection from M. Webb Plumbing Co. catches problems before they become expensive surprises."
        bullets={["Pre-purchase inspections", "Preventive maintenance checks", "Supply line & drain assessment", "Water heater & fixtures review", "Detailed written findings", "Honest, no-pressure recommendations"]}
        body={
          <>
            <p>A plumbing inspection is one of the smartest investments you can make — whether you're buying a home, selling one, or just want peace of mind about your current property. Aging supply lines, weakening drains, slow leaks and outdated fixtures often go unnoticed until they fail.</p>
            <p>We provide thorough, no-pressure plumbing inspections in Brownwood and surrounding areas. You'll get an honest assessment of what's working, what needs attention soon, and what's truly urgent — without any pushy upsells.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}