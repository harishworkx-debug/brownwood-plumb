import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/plumbing-system-replacement")({
  head: () => ({
    meta: [
      { title: "Plumbing System Replacement in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Replace outdated plumbing with complete plumbing system replacement services in Brownwood, TX. Quality workmanship backed by over 35 years of experience." },
      { property: "og:title", content: "Plumbing System Replacement in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Replace outdated plumbing with complete plumbing system replacement services in Brownwood, TX. Quality workmanship backed by over 35 years of experience." },
      { property: "og:url", content: "/plumbing-system-replacement" },
    ],
    links: [{ rel: "canonical", href: "/plumbing-system-replacement" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Plumbing System Replacement"
        title="Plumbing System Replacement"
        icon="Hammer"
        serviceName="Plumbing System Replacement"
        intro="When your home's plumbing system reaches the end of its life, patching one leak after another stops making sense. We design and install full plumbing system replacements across Brownwood, TX."
        bullets={["Whole-home repipes", "Drain line replacement", "Supply line upgrades", "Galvanized to PEX/copper", "Code-compliant installs", "Clean, minimally disruptive work"]}
        body={
          <>
            <p>Aging galvanized pipes, recurring leaks, low pressure, discolored water — these are signs your plumbing system may be due for replacement. We've been replacing plumbing systems in Brown County homes for decades, including older properties around <strong>Brownwood and Lake Brownwood</strong>.</p>
            <p>A repipe done right means decades more of trouble-free plumbing — better pressure, cleaner water, fewer surprises. We walk you through what's needed, give you a clear estimate, and complete the work as efficiently as possible.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}