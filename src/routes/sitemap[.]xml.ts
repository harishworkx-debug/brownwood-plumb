import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, serviceAreas, business } from "@/data/business";
import { blogPosts } from "@/data/blogPosts";

const BASE_URL = `https://${business.website}`;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPages = [
          { path: "", lastmod: "2025-01-19" },
          { path: "/about", lastmod: "2025-01-18" },
          { path: "/services", lastmod: "2025-01-18" },
          { path: "/service-areas", lastmod: "2025-01-18" },
          { path: "/reviews", lastmod: "2025-01-15" },
          { path: "/contact", lastmod: "2025-01-18" },
          { path: "/faq", lastmod: "2025-01-15" },
          { path: "/financing", lastmod: "2025-01-12" },
          { path: "/blog", lastmod: "2025-01-15" },
          { path: "/privacy-policy", lastmod: "2025-01-01" },
          { path: "/terms-of-service", lastmod: "2025-01-01" },
        ];

        const servicePages = services.map((s) => ({
          path: `/${s.slug}`,
          lastmod: "2025-01-18",
        }));

        const areaPages = serviceAreas.map((a) => ({
          path: `/plumber-${a.slug}`,
          lastmod: "2025-01-17",
        }));

        const blogArticlePages = blogPosts.map((p) => ({
          path: `/blog/${p.slug}`,
          lastmod: p.lastModified,
        }));

        const allPages = [...staticPages, ...servicePages, ...areaPages, ...blogArticlePages];

        const urls = allPages
          .map((p) => `  <url>\n    <loc>${BASE_URL}${p.path}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n  </url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});