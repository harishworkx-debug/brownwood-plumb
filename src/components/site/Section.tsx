import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${containerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-cta" />
      {children}
    </div>
  );
}