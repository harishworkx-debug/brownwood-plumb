import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { business } from "@/data/business";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | M. Webb Plumbing Co." },
      { name: "description", content: "Privacy policy for M. Webb Plumbing Co. LLC. Learn how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy | M. Webb Plumbing Co." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
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
            <h1 className="mt-4 font-display text-3xl font-bold md:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2025</p>
          </Reveal>

          <div className="mt-8 space-y-6 text-foreground/80">
            <Reveal>
              <h2 className="font-display text-xl font-bold text-foreground">Information We Collect</h2>
              <p className="mt-2">
                M. Webb Plumbing Co. LLC collects information you provide directly, such as your name, phone number, email, and address when you request a quote, schedule service, or contact us through this website. We may also collect information about your plumbing needs to provide accurate estimates and appropriate service.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <h2 className="font-display text-xl font-bold text-foreground">How We Use Your Information</h2>
              <p className="mt-2">We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your service requests and inquiries</li>
                <li>Provide plumbing estimates and perform work</li>
                <li>Communicate about scheduled appointments</li>
                <li>Send occasional follow-up regarding completed services</li>
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display text-xl font-bold text-foreground">Information We Do Not Share</h2>
              <p className="mt-2">
                We do not sell, trade, or rent your personal information to third parties. We may share information only as necessary to complete services (such as ordering parts or coordinating with building management if required) or as required by law.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-xl font-bold text-foreground">Data Security</h2>
              <p className="mt-2">
                We implement reasonable security measures to protect your personal information. However, no electronic transmission or storage is 100% secure. We cannot guarantee absolute security of information transmitted through this website.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <h2 className="font-display text-xl font-bold text-foreground">Website Analytics</h2>
              <p className="mt-2">
                This website may use analytics tools to understand how visitors use the site. This information is aggregated and anonymous, used to improve user experience and cannot be used to identify individual visitors.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-display text-xl font-bold text-foreground">Cookies</h2>
              <p className="mt-2">
                This website may use cookies to improve your browsing experience, remember preferences, and understand site traffic. You can control cookies through your browser settings.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <h2 className="font-display text-xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-2">
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
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

      <CTABanner title="Questions or concerns?" subtitle="Reach out to us directly. We're here to help." />
      <div className="h-24" />
    </>
  );
}
