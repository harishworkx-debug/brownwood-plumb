import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { business } from "@/data/business";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/emergency-plumbing", label: "Emergency" },
  { to: "/service-areas", label: "Areas" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-elegant transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11z" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight text-foreground">M. Webb Plumbing</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Brownwood, TX · 35+ Yrs</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground shadow-cta transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 text-sm font-semibold text-cta-foreground"
            >
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}