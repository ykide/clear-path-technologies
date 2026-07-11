import {
  BarChart3,
  Blocks,
  Bot,
  Cloud,
  Compass,
  GitBranch,
  LayoutDashboard,
  Network,
  Settings2,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "operational-excellence"
  | "workflow-automation"
  | "process-modernization"
  | "custom-business-applications"
  | "executive-dashboards"
  | "business-intelligence"
  | "cloud-modernization"
  | "applied-ai"
  | "fractional-cto";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  problem: string;
  response: string;
  outcomes: readonly string[];
  icon: LucideIcon;
};

export type ServicePillar = {
  title: string;
  description: string;
  services: readonly ServiceSlug[];
  icon: LucideIcon;
};

export type EngagementModel = {
  title: string;
  bestFor: string;
  outputs: readonly string[];
};

export const services = [
  {
    slug: "operational-excellence",
    title: "Operational Excellence Consulting",
    shortTitle: "Operational Excellence",
    problem: "Work is fragmented across teams, tools, and undocumented processes.",
    response: "Assess the operating model, identify bottlenecks, and redesign how work, information, and decisions move.",
    outcomes: ["Reduced operational friction", "Clear ownership", "Better process consistency", "Measurable improvement roadmap"],
    icon: Network,
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    shortTitle: "Workflow Automation",
    problem: "Employees spend valuable time moving information, chasing approvals, and completing repetitive work.",
    response: "Design and automate workflows across existing systems and purpose-built applications.",
    outcomes: ["Less manual work", "Faster cycle times", "Fewer handoff errors", "More scalable operations"],
    icon: GitBranch,
  },
  {
    slug: "process-modernization",
    title: "Business Process Modernization",
    shortTitle: "Process Modernization",
    problem: "Critical processes still depend on spreadsheets, inboxes, paper, or legacy applications.",
    response: "Transform outdated processes into resilient, traceable, and user-centered digital systems.",
    outcomes: ["Standardized processes", "Improved accountability", "Better auditability", "Reduced operational risk"],
    icon: Waypoints,
  },
  {
    slug: "custom-business-applications",
    title: "Custom Business Applications",
    shortTitle: "Custom Applications",
    problem: "Off-the-shelf software does not match the organization’s real operating model.",
    response: "Design and build secure internal applications around the organization’s specific workflows and decisions.",
    outcomes: ["Better workflow fit", "Centralized information", "Reduced tool fragmentation", "Reusable platform capabilities"],
    icon: Blocks,
  },
  {
    slug: "executive-dashboards",
    title: "Executive Dashboards",
    shortTitle: "Executive Dashboards",
    problem: "Leadership lacks a trusted, current view of operations, delivery, finance, and risk.",
    response: "Create decision-focused dashboards supported by governed data and clear performance measures.",
    outcomes: ["Real-time visibility", "Faster decisions", "Shared performance view", "Earlier risk detection"],
    icon: LayoutDashboard,
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    shortTitle: "Business Intelligence",
    problem: "Data is available but difficult to reconcile, interpret, or use consistently.",
    response: "Build data models, reporting systems, analytics, and decision-ready information products.",
    outcomes: ["Trusted reporting", "Consistent metrics", "Better forecasting", "Improved decision quality"],
    icon: BarChart3,
  },
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization",
    shortTitle: "Cloud Modernization",
    problem: "Legacy platforms restrict scale, integration, security, and delivery speed.",
    response: "Modernize applications and infrastructure using secure, cloud-native, compliance-aware architecture.",
    outcomes: ["Improved resilience", "Faster delivery", "Better scalability", "Stronger security foundation"],
    icon: Cloud,
  },
  {
    slug: "applied-ai",
    title: "Applied AI Solutions",
    shortTitle: "Applied AI",
    problem: "Organizations see AI opportunities but struggle to connect them to practical, governed business value.",
    response: "Embed AI into document, knowledge, reporting, support, and decision workflows where it creates measurable value.",
    outcomes: ["Faster information processing", "Improved knowledge access", "Reduced repetitive analysis", "Governed AI adoption"],
    icon: Bot,
  },
  {
    slug: "fractional-cto",
    title: "Fractional CTO Services",
    shortTitle: "Fractional CTO",
    problem: "The organization needs senior technical leadership but does not yet require or cannot justify a full-time executive.",
    response: "Provide architecture, technology strategy, delivery governance, vendor guidance, and modernization leadership.",
    outcomes: ["Stronger technical decisions", "Reduced delivery risk", "Clear modernization roadmap", "Alignment between technology and business priorities"],
    icon: Settings2,
  },
] as const satisfies readonly Service[];

export const servicePillars = [
  {
    title: "Optimize Operations",
    description: "Improve how work moves across teams, systems, approvals, and decisions.",
    services: ["operational-excellence", "workflow-automation", "process-modernization"],
    icon: Compass,
  },
  {
    title: "Modernize Business Systems",
    description: "Replace fragmented tools and legacy processes with secure, scalable, connected systems.",
    services: ["custom-business-applications", "cloud-modernization", "applied-ai"],
    icon: Blocks,
  },
  {
    title: "Empower Leadership",
    description: "Give leaders trusted information, operational visibility, and technology direction.",
    services: ["executive-dashboards", "business-intelligence", "fractional-cto"],
    icon: LayoutDashboard,
  },
] as const satisfies readonly ServicePillar[];

export const engagementModels = [
  {
    title: "Operational Assessment",
    bestFor: "Organizations that need clarity before committing to a larger modernization effort.",
    outputs: [
      "Current-state operating model",
      "Friction and risk analysis",
      "Prioritized opportunity roadmap",
      "Recommended implementation plan",
    ],
  },
  {
    title: "Focused Modernization Engagement",
    bestFor: "Organizations with a defined workflow, dashboard, application, or process that needs improvement.",
    outputs: ["Target-state design", "Working implementation", "Adoption support", "Outcome measurement"],
  },
  {
    title: "Strategic Transformation Partnership",
    bestFor: "Organizations modernizing multiple connected areas of operations over time.",
    outputs: ["Multi-phase roadmap", "Reusable platform architecture", "Governance and delivery cadence", "Continuous optimization"],
  },
] as const satisfies readonly EngagementModel[];

export const serviceSequence = ["Assess", "Design", "Build", "Integrate", "Measure", "Improve"] as const;

const allServices: readonly Service[] = services;

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug);
}

export function getServicesBySlug(slugs: readonly ServiceSlug[]): Service[] {
  return slugs.map((slug) => getServiceBySlug(slug)).filter((service): service is Service => Boolean(service));
}
