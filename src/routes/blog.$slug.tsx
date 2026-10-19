import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { business } from "@/data/business";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/site/CTABanner";
import { JsonLd } from "@/components/site/JsonLd";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Article Not Found | M. Webb Plumbing" }] };
    }
    return {
      meta: [
        { title: `${post.title} | M. Webb Plumbing Co.` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | M. Webb Plumbing Co.` },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `${BASE_URL}/blog/${post.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `${BASE_URL}/blog/${post.slug}` }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.lastModified,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "PlumbingService",
        name: business.name,
      },
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <section className="relative overflow-hidden gradient-hero pb-16 pt-16 text-primary-foreground md:pt-24 md:pb-20">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cta/25 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to all guides
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-white/75">
              <span className="rounded-full bg-white/20 px-3 py-1 font-semibold uppercase tracking-wider text-white">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl text-white">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5 text-sm text-white/90">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-bold text-white">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-xs text-white/75">{post.authorRole} • Verified for Texas Codes</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_320px]">
          <main>
            <Reveal>
              <div className="rounded-2xl border-l-4 border-brand bg-secondary/50 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-deep">Core Customer Question:</span>
                <p className="mt-1 font-display text-base font-semibold text-foreground italic">
                  "{post.targetQuestion}"
                </p>
              </div>
            </Reveal>

            <article className="mt-8 space-y-8">
              {post.content.map((sec, idx) => (
                <Reveal key={sec.heading} delay={idx * 60}>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      {sec.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {sec.bullets && (
                      <ul className="mt-4 space-y-2.5 rounded-xl border border-border bg-card p-5 text-sm text-foreground/85">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cta" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </article>

            <Reveal delay={180}>
              <div className="mt-10 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/5 to-transparent p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep">
                  <ShieldCheck className="h-4 w-4" /> Need Professional Service?
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  Connect with our team for {post.serviceName}
                </h3>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  Have questions about your system or need an on-site diagnosis in Brownwood or Brown County? We offer upfront pricing, honest recommendations, and 24/7 emergency dispatch.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground shadow-cta"
                  >
                    <Phone className="h-4 w-4" /> Call {business.phone}
                  </a>
                  <Link
                    to={post.serviceLink as never}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition"
                  >
                    View {post.serviceName} Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </main>

          <aside className="space-y-6">
            <Reveal delay={120}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold">Related Service</h3>
                <p className="mt-2 text-sm text-foreground/75">
                  This guide directly covers technical issues resolved by our <strong>{post.serviceName}</strong> team.
                </p>
                <Link
                  to={post.serviceLink as never}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:underline"
                >
                  Explore {post.serviceName} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold">Other Help Guides</h3>
                <div className="mt-4 space-y-4">
                  {relatedPosts.map((r) => (
                    <div key={r.slug} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs text-muted-foreground">{r.category}</span>
                      <h4 className="mt-1 font-semibold text-sm text-foreground hover:text-brand-deep transition">
                        <Link to={`/blog/${r.slug}` as never}>
                          {r.title}
                        </Link>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <CTABanner
        title="Ready to Resolve Your Plumbing Problem?"
        subtitle={`Speak with Master Plumber Mike Webb's team today at ${business.phone} for prompt, reliable service.`}
      />
      <div className="h-24" />
      <JsonLd data={articleSchema} />
    </>
  );
}
