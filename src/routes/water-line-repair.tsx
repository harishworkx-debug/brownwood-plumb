import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/water-line-repair")({
  head: () => ({
    meta: [
      { title: "Water Line Repair in Brownwood, TX | M. Webb Plumbing" },
      { name: "description", content: "Water line repair and replacement in Brownwood, TX. We fix leaking, broken, and aging water lines with dependable, long-lasting solutions." },
      { property: "og:title", content: "Water Line Repair in Brownwood, TX | M. Webb Plumbing" },
      { property: "og:description", content: "Water line repair and replacement in Brownwood, TX. We fix leaking, broken, and aging water lines with dependable, long-lasting solutions." },
      { property: "og:url", content: "/water-line-repair" },
    ],
    links: [{ rel: "canonical", href: "/water-line-repair" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Water Line Repair"
        title="Water Line Repair"
        icon="Pipette"
        serviceName="Water Line Repair"
        intro="A damaged main water line means low pressure, soggy yards and sky-high water bills. M. Webb Plumbing Co. diagnoses and repairs water lines across Brownwood, TX."
        bullets={["Main water line repair", "Full line replacement", "Underground leak location", "Pressure & flow diagnosis", "Old galvanized line upgrades", "Service line tie-ins"]}
        body={
          <>
            <p>Your water service line is the artery that supplies the entire property. When it leaks or fails — often from age, corrosion, ground movement or root intrusion — it needs an experienced plumber who can correctly diagnose the issue and recommend the right fix.</p>
            <p>We've been repairing and replacing water lines in Brown County homes and businesses for decades. We'll trace the issue, walk you through repair vs. replacement, and complete the work cleanly with minimal disruption to your yard or property.</p>
            <p>Serving <strong>Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX</strong>.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}