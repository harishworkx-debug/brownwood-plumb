import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, services, serviceAreas } from "@/data/business";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-primary text-primary-foreground">
      <div className="wave-divider absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-cta text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11z" /></svg>
            </span>
            <span className="font-display text-lg font-bold">M. Webb Plumbing Co.</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Family-owned plumbing company serving Brownwood, TX and surrounding areas with 35+ years of trusted experience.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={("/" + s.slug) as never} className="hover:text-cta transition">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link to={"/service-areas/$slug"} params={{ slug: a.slug }} className="hover:text-cta transition">Plumber in {a.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-cta" /> {business.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-cta" /> <a href={`tel:${business.phoneRaw}`} className="hover:text-cta">{business.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-cta" /> <a href={`mailto:${business.email}`} className="hover:text-cta break-all">{business.email}</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-cta" /> {business.hours}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} M. Webb Plumbing Co. LLC. All rights reserved.</p>
          <p>Licensed Plumbers · Brownwood, Texas</p>
        </div>
      </div>
    </footer>
  );
}