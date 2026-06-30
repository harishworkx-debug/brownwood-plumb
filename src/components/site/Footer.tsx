import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { business, services, serviceAreas } from "@/data/business";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-primary text-primary-foreground">
      <div className="wave-divider absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-cta text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11z" /></svg>
            </span>
            <span className="font-display text-lg font-bold">M. Webb Plumbing Co.</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Family-owned plumbing company serving Brownwood, TX and surrounding areas with 35+ years of trusted experience. Licensed, insured, and committed to quality workmanship.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white/80">
            <ShieldCheck className="h-4 w-4 text-cta" /> Licensed & Insured
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={("/" + s.slug) as never} className="hover:text-cta transition">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            {serviceAreas.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link to={"/service-areas/$slug"} params={{ slug: a.slug }} className="hover:text-cta transition">Plumber in {a.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="font-medium hover:text-cta transition">All Service Areas →</Link>
            </li>
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
          <div className="mt-4">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-lg bg-cta px-4 py-2.5 text-sm font-semibold text-cta-foreground shadow-cta"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-primary-foreground/60 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <Link to="/service-areas" className="hover:text-white transition">Service Areas</Link>
            <Link to="/reviews" className="hover:text-white transition">Reviews</Link>
            <Link to="/financing" className="hover:text-white transition">Financing</Link>
            <Link to="/faq" className="hover:text-white transition">FAQ</Link>
            <Link to="/blog" className="hover:text-white transition">Blog</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition">Terms</Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p>© {currentYear} {business.name}. All rights reserved.</p>
            <p>Licensed Plumbers · {business.city}, {business.state}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}