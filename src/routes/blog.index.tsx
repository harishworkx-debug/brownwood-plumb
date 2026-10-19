import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { blogCategories, business } from "@/data/business";
import { blogPosts } from "@/data/blogPosts";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Plumbing Blog & Homeowner Guides | M. Webb Plumbing Brownwood TX" },
      { name: "description", content: "Expert plumbing guides, diagnostic tips, and FAQs written and verified by Texas Master Plumber Mike Webb. Serving Brownwood, TX and Brown County." },
      { property: "og:title", content: "Plumbing Blog & Homeowner Guides | M. Webb Plumbing" },
      { property: "og:description", content: "Expert plumbing tips and homeowner guides for Texas homes." },
      { property: "og:url", content: `${BASE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-20 pt-20 text-primary-foreground md:pt-28">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Plumbing Blog & Guides
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              Expert Advice & <span className="text-gradient-brand">Plumbing Guides</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Helpful, customer-focused plumbing answers for Brownwood and Brown County homeowners. Written and verified by Master Plumber Mike Webb.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <Reveal>
              <SectionEyebrow>Featured Guides</SectionEyebrow>
            </Reveal>
            <div className="mt-8 grid gap-6">
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <article className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="rounded bg-secondary px-2 py-0.5 font-medium">{post.category}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {post.date}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="text-foreground/75 font-medium">By {post.author}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="mt-3 font-display text-lg font-bold group-hover:text-brand-deep transition">
                          <Link to={`/blog/${post.slug}` as never} className="hover:underline">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                      <Link
                        to={`/blog/${post.slug}` as never}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:underline"
                      >
                        Read Full Guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                      <Link
                        to={post.serviceLink as never}
                        className="text-xs text-muted-foreground hover:text-foreground transition underline"
                      >
                        Related: {post.serviceName}
                      </Link>
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
