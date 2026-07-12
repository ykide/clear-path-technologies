import { ArrowRight, CheckCircle2, ClipboardCheck, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionListItem, Reveal, StaggerList } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { Service } from "@/content/capabilities";

export function CapabilityDetailSection({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const reversed = index % 2 === 1;

  return (
    <article
      id={service.slug}
      className="scroll-mt-28 rounded-[2rem] border border-line bg-gradient-to-br from-surface via-surface to-background/80 p-5 shadow-2xl shadow-black/10 sm:p-7 lg:p-9"
      aria-labelledby={`${service.slug}-title`}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className={cn("lg:sticky lg:top-28", reversed && "lg:order-last")}>
          <div className="flex size-12 items-center justify-center rounded-2xl border border-line bg-background text-signal shadow-glow">
            <Icon aria-hidden="true" className="size-6" />
          </div>
          <Eyebrow className="mt-7">Capability</Eyebrow>
          <h3 id={`${service.slug}-title`} className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            {service.title}
          </h3>
          <p className="mt-5 text-base leading-7 text-secondary">{service.response}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" arrow>
              Discuss {service.shortTitle}
            </Button>
            <Button href="#capability-navigation" variant="ghost">
              Back to anchors
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <CapabilityPanel
            icon={Target}
            eyebrow="Business problem"
            title="What slows the organization down"
            body={service.problem}
          />

          <CapabilityListPanel
            icon={CheckCircle2}
            eyebrow="Business outcomes"
            title="What the work is designed to improve"
            items={service.outcomes}
            accent="signal"
          />

          <CapabilityListPanel
            icon={ClipboardCheck}
            eyebrow="Typical engagements"
            title="Common starting points"
            items={service.engagements}
            accent="accent"
          />
        </div>
      </div>
    </article>
  );
}

function CapabilityPanel({
  icon: Icon,
  eyebrow,
  title,
  body,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal className="rounded-2xl border border-line bg-card/60 p-6">
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background text-signal">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
          <h4 className="mt-2 text-xl font-semibold tracking-tight">{title}</h4>
          <p className="mt-3 text-sm leading-6 text-secondary">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}

function CapabilityListPanel({
  icon: Icon,
  eyebrow,
  title,
  items,
  accent,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  items: readonly string[];
  accent: "signal" | "accent";
}) {
  return (
    <Reveal className="rounded-2xl border border-line bg-background/70 p-6">
      <div className="flex items-start gap-4">
        <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl bg-card", accent === "signal" ? "text-signal" : "text-accent")}>
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
          <h4 className="mt-2 text-xl font-semibold tracking-tight">{title}</h4>
          <StaggerList className="mt-4 grid gap-3">
            {items.map((item) => (
              <MotionListItem key={item} className="flex items-start gap-3 text-sm leading-6 text-secondary">
                <ArrowRight aria-hidden="true" className={cn("mt-1 size-4 shrink-0", accent === "signal" ? "text-signal" : "text-accent")} />
                <span>{item}</span>
              </MotionListItem>
            ))}
          </StaggerList>
        </div>
      </div>
    </Reveal>
  );
}
