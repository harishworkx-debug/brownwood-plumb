import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { blogCategories } from "@/data/business";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Plumbing Blog | Tips & Guides | M. Webb Plumbing Brownwood TX" },
      { name: "description", content: "Expert plumbing tips, guides, and news from M. Webb Plumbing Co. Learn about water heaters, drain maintenance, emergency plumbing, and more. Serving Brownwood, TX." },
      { property: "og:title", content: "Plumbing Blog | M. Webb Plumbing" },
      { property: "og:description", content: "Expert plumbing tips and guides for Texas homeowners." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

const featuredPosts = [
  {
    slug: "what-to-do-plumbing-emergency",
    title: "What to Do During a Plumbing Emergency",
    excerpt: "A plumbing emergency can happen at any time. Learn the steps to take immediately when you discover a burst pipe, major leak, or sewage backup.",
    category: "Emergency Plumbing",
    date: "2025-01-15",
  },
  {
    slug: "signs-you-need-water-heater-replacement",
    title: "7 Signs You Need a New Water Heater",
    excerpt: "Is your water heater showing its age? Discover the warning signs that indicate replacement is more cost-effective than continued repairs.",
    category: "Water Heaters",
    date: "2025-01-10",
  },
  {
    slug: "preventing-clogged-drains-brownwood",
    title: "How to Prevent Clogged Drains in Your Brownwood Home",
    excerpt: "Preventive drain maintenance saves you from costly emergency calls. Learn what causes clogs and how to keep your drains flowing freely.",
    category: "Drain Cleaning",
    date: "2025-01-05",
  },
  {
    slug: "hard-water-brown-county",
    title: "Understanding Hard Water in Brown County, Texas",
    excerpt: "Hard water affects many Brown County homes. Learn how it impacts your plumbing and appliances, and what solutions exist.",
    category: "Texas Plumbing Tips",
    date: "2024-12-28",
  },
  {
    slug: "tankless-vs-traditional-water-heaters",
    title: "Tankless vs. Traditional Water Heaters: Which is Right for You?",
    excerpt: "Considering a water heater upgrade? Compare the pros and cons of tankless and traditional water heaters for Texas homes.",
    category: "Water Heaters",
    date: "2024-12-20",
  },
  {
    slug: "winter-plumbing-tips-texas",
    title: "Winter Plumbing Tips for Texas Homeowners",
    excerpt: "Even in Texas, winter temperatures can threaten your pipes. Prepare your plumbing for cold weather with these essential tips.",
    category: "Texas Plumbing Tips",
    date: "2024-12-15",
  },
];

function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-20 pt-20 text-primary-foreground md:pt-28">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Plumbing Blog
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              Expert Tips & <span className="text-gradient-brand">Plumbing Guides</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Helpful plumbing information for Brownwood homeowners and businesses. Learn how to maintain your plumbing, handle emergencies, and make informed decisions.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <Reveal>
              <SectionEyebrow>Featured Articles</SectionEyebrow>
            </Reveal>
            <div className="mt-8 grid gap-6">
              {featuredPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <article className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="rounded bg-secondary px-2 py-0.5 font-medium">{post.category}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {post.date}
                          </span>
                        </div>
                        <h2 className="mt-2 font-display text-lg font-bold group-hover:text-brand-deep transition">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
                        Read Article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <Reveal delay={200}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Categories</h3>
                <ul className="mt-4 space-y-2">
                  {blogCategories.map((cat) => (
                    <li key={cat.slug}>
                      <span className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground">
                        {cat.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Need a Plumber?</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Articles are helpful, but sometimes you need an expert on-site.
                </p>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-semibold text-cta-foreground shadow-cta"
                >
                  Call {business.phone}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <CTABanner title="Plumbing problem you can't solve alone?" subtitle="We're here to help." />
      <div className="h-24" />
    </>
  );
}
