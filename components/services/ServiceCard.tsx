import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { MotionCard } from "@/components/ui/Reveal";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <MotionCard id={service.slug} className="group scroll-mt-28 rounded-2xl border border-line bg-surface p-6 transition-colors hover:bg-card sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div className="flex size-10 items-center justify-center rounded-xl border border-line bg-background text-signal">
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 rounded text-xs font-semibold uppercase tracking-[0.12em] text-muted transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          aria-label={`View ${service.title} service detail page`}
        >
          Details
          <ArrowUpRight aria-hidden="true" className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
      <div className="mt-5 grid gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Business problem</p>
          <p className="mt-2 text-sm leading-6 text-secondary">{service.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">ClearPath response</p>
          <p className="mt-2 text-sm leading-6 text-secondary">{service.response}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Primary outcomes</p>
          <ul className="mt-3 grid gap-2">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2 text-sm leading-5 text-muted">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-signal" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionCard>
  );
}
