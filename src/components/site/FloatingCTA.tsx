import { Phone, ClipboardList } from "lucide-react";
import { business } from "@/data/business";
import { Link } from "@tanstack/react-router";

export function FloatingCTA() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
        <a
          href={`tel:${business.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-3 py-3 text-sm font-semibold text-cta-foreground shadow-cta"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
        >
          <ClipboardList className="h-4 w-4" /> Free Estimate
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.03]"
        >
          <ClipboardList className="h-4 w-4" /> Get Free Estimate
        </Link>
        <a
          href={`tel:${business.phoneRaw}`}
          className="group inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-cta transition hover:scale-[1.03]"
        >
          <span className="relative grid h-6 w-6 place-items-center">
            <span className="absolute inset-0 rounded-full bg-white/30 water-pulse" />
            <Phone className="relative h-3.5 w-3.5" />
          </span>
          Call {business.phone}
        </a>
      </div>
    </>
  );
}