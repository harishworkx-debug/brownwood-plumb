import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Lucide as unknown as Record<string, LucideIcon>)[name] ?? Lucide.Wrench;
  return <C className={className} />;
}