import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { Reveal } from "./Reveal";

export function CTABanner({
  title = "Need a Plumber in Brownwood, TX?",
  subtitle = "Call now or request a free estimate — we respond fast, 24/7 for emergencies.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground md:p-14">
            <div className="absolute -top-16 right-10 h-48 w-48 rounded-full bg-cta/30 blur-3xl float-slow" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/40 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
                <p className="mt-3 max-w-2xl text-white/80">{subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-cta">
                  <Phone className="h-4 w-4" /> {business.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary">
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}