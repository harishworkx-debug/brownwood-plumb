import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/site/JsonLd";
import { localBusinessSchema, organizationSchema, websiteSchema, combineSchemas } from "@/lib/seo";
import { business } from "@/data/business";

const BASE_URL = `https://${business.website}`;

const rootSchema = combineSchemas(
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
);

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "M. Webb Plumbing Co. — Plumber Brownwood TX | 24-Hour Emergency Service | 35+ Years" },
      { name: "description", content: "Brownwood's trusted plumber for 35+ years. 24-hour emergency plumbing, leak detection, water heater repair, drain cleaning, residential & commercial services. Call (325) 328-0435. Licensed & insured." },
      { name: "keywords", content: "plumber brownwood tx, emergency plumber brownwood, 24 hour plumber, residential plumber, commercial plumber, water heater repair brownwood, drain cleaning brownwood tx, leak detection brownwood, m webb plumbing" },
      { name: "author", content: "M. Webb Plumbing Co. LLC" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: "M. Webb Plumbing Co." },
      { property: "og:title", content: "M. Webb Plumbing Co. — Plumber Brownwood TX | 24-Hour Emergency | 35+ Years" },
      { property: "og:description", content: "Brownwood's trusted plumber for 35+ years. 24-hour emergency plumbing, leak detection, water heater repair, drain cleaning. Call (325) 328-0435." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: `${BASE_URL}/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "M. Webb Plumbing Co. - Trusted Brownwood Plumber Since 1990" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mwebbplumbing" },
      { name: "theme-color", content: "#0e2747" },
      { name: "msapplication-TileColor", content: "#0e2747" },
      { name: "twitter:title", content: "M. Webb Plumbing Co. — Plumber Brownwood TX | 24-Hour Emergency" },
      { name: "twitter:description", content: "Brownwood's trusted plumber for 35+ years. 24-hour emergency plumbing, leak detection, water heater repair. Call (325) 328-0435." },
      { name: "twitter:image", content: `${BASE_URL}/og.jpg` },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "Brownwood" },
      { name: "geo.position", content: "31.702854;-98.990455" },
      { name: "ICBM", content: "31.702854, -98.990455" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: BASE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
      <Toaster richColors position="top-center" />
      <JsonLd data={rootSchema} />
    </QueryClientProvider>
  );
}
