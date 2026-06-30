import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { business } from "@/data/business";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | M. Webb Plumbing Co." },
      { name: "description", content: "Terms of service for M. Webb Plumbing Co. LLC. Understanding the terms of using our plumbing services in Brownwood, TX." },
      { property: "og:title", content: "Terms of Service | M. Webb Plumbing Co." },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionEyebrow>Legal</SectionEyebrow>
            <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl">Terms of Service</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2025</p>
          </Reveal>

          <div className="mt-8 space-y-6 text-foreground/80">
            <Reveal>
              <h2 className="font-display text-xl font-bold text-foreground">Agreement to Terms</h2>
              <p className="mt-2">
                By requesting services from M. Webb Plumbing Co. LLC or using this website, you agree to these terms. If you do not agree, please do not use our services or website.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <h2 className="font-display text-xl font-bold text-foreground">Services</h2>
              <p className="mt-2">
                M. Webb Plumbing Co. LLC provides residential and commercial plumbing services in Brownwood, TX and surrounding areas. All services are performed by licensed professionals according to applicable building codes and industry standards.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display text-xl font-bold text-foreground">Estimates and Pricing</h2>
              <p className="mt-2">
                We provide estimates based on our assessment of the work required. Final costs may vary based on conditions discovered during work. Significant changes to scope will be communicated before proceeding. Payment is due upon completion unless other arrangements are made.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-xl font-bold text-foreground">Warranties</h2>
              <p className="mt-2">
                Workmanship is warrantied for the period specified at the time of service. Manufacturer warranties apply to installed parts and fixtures. Warranty does not cover damage from misuse, neglect, acts of nature, or work by others.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <h2 className="font-display text-xl font-bold text-foreground">Limitation of Liability</h2>
              <p className="mt-2">
                M. Webb Plumbing Co. LLC is not liable for damages beyond the scope of work performed. We are not responsible for pre-existing conditions, hidden defects, or issues outside of our contracted scope. Our total liability is limited to the amount paid for services rendered.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-xl font-bold text-foreground">Scheduling and Access</h2>
              <p className="mt-2">
                You agree to provide reasonable access to your property for scheduled services. We reserve the right to reschedule if access cannot be provided. Cancellations with less than 24 hours notice may be subject to a cancellation fee.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <h2 className="font-display text-xl font-bold text-foreground">Website Use</h2>
              <p className="mt-2">
                This website is provided for informational purposes. Content is subject to change without notice. We make reasonable efforts to ensure accuracy but cannot guarantee all information is current or complete.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <h2 className="font-display text-xl font-bold text-foreground">Governing Law</h2>
              <p className="mt-2">
                These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Brown County, Texas.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <h2 className="font-display text-xl font-bold text-foreground">Contact</h2>
              <p className="mt-2">For questions about these terms:</p>
              <div className="mt-3 rounded-xl border border-border bg-card p-4">
                <p className="font-semibold">{business.name}</p>
                <p>{business.address}</p>
                <p>Phone: <a href={`tel:${business.phoneRaw}`} className="text-brand-deep hover:underline">{business.phone}</a></p>
                <p>Email: <a href={`mailto:${business.email}`} className="text-brand-deep hover:underline">{business.email}</a></p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTABanner title="Questions about our terms?" subtitle="Reach out to us directly. We're happy to clarify." />
      <div className="h-24" />
    </>
  );
}
