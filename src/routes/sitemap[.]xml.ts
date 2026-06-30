import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, serviceAreas } from "@/data/business";

const BASE_URL = "https://mwebbplumbingco.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPages = [
          { path: "/", priority: "1.0", changefreq: "daily" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/services", priority: "0.9", changefreq: "weekly" },
          { path: "/service-areas", priority: "0.9", changefreq: "weekly" },
          { path: "/reviews", priority: "0.7", changefreq: "weekly" },
          { path: "/contact", priority: "0.7", changefreq: "monthly" },
          { path: "/faq", priority: "0.7", changefreq: "monthly" },
          { path: "/financing", priority: "0.7", changefreq: "monthly" },
          { path: "/blog", priority: "0.8", changefreq: "weekly" },
          { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
          { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
        ];

        const servicePages = services.map((s) => ({
          path: `/${s.slug}`,
          priority: "0.8",
          changefreq: "monthly",
        }));

        const areaPages = serviceAreas.map((a) => ({
          path: `/service-areas/${a.slug}`,
          priority: "0.8",
          changefreq: "monthly",
        }));

        const allPages = [...staticPages, ...servicePages, ...areaPages];

        const urls = allPages
          .map((p) => `  <url>\n    <loc>${BASE_URL}${p.path}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>\n  </url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});