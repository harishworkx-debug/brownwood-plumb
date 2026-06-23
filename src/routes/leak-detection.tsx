import { createFileRoute } from "@tanstack/react-router";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/leak-detection")({
  head: () => ({
    meta: [
      { title: "Leak Detection in Brownwood, TX | M. Webb Plumbing Co." },
      { name: "description", content: "Expert leak detection in Brownwood, TX. Find and fix hidden water leaks fast before they cause expensive damage. (325) 328-0435." },
      { property: "og:title", content: "Leak Detection in Brownwood, TX" },
      { property: "og:description", content: "Non-invasive leak detection across Brown County — pinpoint hidden leaks before they damage your home." },
      { property: "og:url", content: "/leak-detection" },
    ],
    links: [{ rel: "canonical", href: "/leak-detection" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <ServicePageShell
        eyebrow="Leak Detection"
        title="Leak Detection"
        icon="Droplets"
        serviceName="Leak Detection"
        intro="A hidden leak can quietly destroy your floors, walls, and foundation. M. Webb Plumbing Co. pinpoints leaks fast across Brownwood, TX — without tearing up your home."
        bullets={["Slab leak detection", "Wall & ceiling leaks", "Underground water line leaks", "High water bill diagnosis", "Foundation leak location", "Full repair after detection"]}
        body={
          <>
            <p>Mysteriously high water bill? Damp spots on the floor? The sound of running water when nothing's on? These are all signs of a hidden plumbing leak — and the longer it goes undiagnosed, the more damage (and money) it costs.</p>
            <p>Our leak detection service in Brownwood combines decades of plumbing experience with the right tools to locate leaks precisely, with the least possible disruption to your home or business. Once we find it, we handle the repair too — start to finish, one call.</p>
            <p>Serving <strong>Brownwood, Early, Bangs, Lake Brownwood and Zephyr, TX</strong>.</p>
          </>
        }
      />
      <CTABanner />
      <div className="h-24" />
    </>
  );
}