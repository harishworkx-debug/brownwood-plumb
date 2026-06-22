import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { services } from "@/data/business";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Please pick a service"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function QuoteForm({ compact = false, defaultService }: { compact?: boolean; defaultService?: string }) {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const data = Object.fromEntries(fd.entries());
        const parsed = schema.safeParse(data);
        if (!parsed.success) {
          toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
          return;
        }
        setSubmitting(true);
        try {
          await new Promise((r) => setTimeout(r, 700));
          toast.success("Request received! We'll call you back shortly.");
          (e.target as HTMLFormElement).reset();
        } finally {
          setSubmitting(false);
        }
      }}
      className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <input name="name" placeholder="Full name *" className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/30 focus:ring-2" required />
      <input name="phone" placeholder="Phone number *" type="tel" className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/30 focus:ring-2" required />
      <input name="email" placeholder="Email (optional)" type="email" className={`rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/30 focus:ring-2 ${compact ? "" : "sm:col-span-2"}`} />
      <select
        name="service"
        defaultValue={defaultService ?? ""}
        className={`rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/30 focus:ring-2 ${compact ? "" : "sm:col-span-2"}`}
        required
      >
        <option value="" disabled>Select a service…</option>
        {services.map((s) => (
          <option key={s.slug} value={s.title}>{s.title}</option>
        ))}
        <option value="Other">Other / Not sure</option>
      </select>
      <textarea
        name="message"
        placeholder="Briefly describe your issue (optional)"
        rows={compact ? 2 : 3}
        className={`rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/30 focus:ring-2 ${compact ? "" : "sm:col-span-2"}`}
      />
      <button
        type="submit"
        disabled={submitting}
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-cta transition hover:brightness-110 disabled:opacity-70 ${compact ? "" : "sm:col-span-2"}`}
      >
        <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Request Free Estimate"}
      </button>
      <p className={`text-[11px] text-muted-foreground ${compact ? "" : "sm:col-span-2"}`}>
        By submitting you agree to be contacted about your plumbing request. We never share your info.
      </p>
    </form>
  );
}