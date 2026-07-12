import {
  BarChart3,
  Blocks,
  Bot,
  Cloud,
  GitBranch,
  LayoutDashboard,
  Network,
  Settings2,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };
export type Service = { title: string; description: string; icon: LucideIcon };
export type Industry = { title: string; description: string };
export type MethodStep = { title: string; description: string };
export type Insight = { category: string; title: string; excerpt: string; readTime: string };
export type WhyPoint = { title: string; description: string };
export type OrganizationProfile = { title: string; description: string; signals: readonly string[] };

export const site = {
  name: "ClearPath Technologies",
  tagline: "We engineer operational excellence.",
  description:
    "Operational excellence consulting for government contractors and professional services firms. We modernize operations, automate workflows, and turn business data into executive clarity.",
  contact: {
    email: "hello@clearpathtechnologies.com",
    linkedin: "https://www.linkedin.com/company/clearpath-technologies/",
  },
  nav: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Company", href: "/company" },
    { label: "Industries", href: "/#industries" },
    { label: "Methodology", href: "/#methodology" },
    { label: "ClearPath OS", href: "/#clearpath-os" },
    { label: "Insights", href: "/insights" },
  ] satisfies NavItem[],
  audiences: [
    "Government Contractors",
    "Engineering Firms",
    "Consulting Firms",
    "Accounting Firms",
    "Architecture Firms",
  ],
  whyExists: {
    eyebrow: "Why ClearPath exists",
    title: "Most organizations do not need more tools. They need a clearer operating system.",
    description:
      "ClearPath exists for leaders who can feel operational friction but cannot solve it with another disconnected application, dashboard, or process workshop. We translate operating problems into working systems that improve how the business actually runs.",
    points: [
      {
        title: "Operations are increasingly technical",
        description:
          "Workflows, data, approvals, reporting, security, cloud platforms, and AI now shape how capacity is created or lost.",
      },
      {
        title: "Technology decisions are operating decisions",
        description:
          "The right system architecture should reflect how people work, how decisions are made, and what leadership needs to see.",
      },
      {
        title: "Recommendations should become systems",
        description:
          "Our advantage is moving from diagnosis to design, implementation, adoption, and continuous improvement.",
      },
    ] satisfies WhyPoint[],
  },
  operatingGap: {
    eyebrow: "The operating gap",
    title: "Most firms aren’t short on effort. They’re short on systems.",
    description:
      "Teams often work harder than the operating model allows. The gap shows up as manual coordination, fragile reporting, unclear ownership, and leadership decisions made from stale information.",
    before: [
      "Work depends on email, spreadsheets, and individual memory",
      "Teams coordinate status manually across disconnected tools",
      "Leaders wait for reporting instead of seeing operations clearly",
      "Process ownership blurs when work crosses departments",
      "Growth adds headcount faster than it adds capacity",
    ],
    after: [
      "Workflows move through clear, governed systems",
      "Information has defined owners, sources, and flow",
      "Executives see current performance, capacity, and risk",
      "Decisions and handoffs are traceable across teams",
      "Systems scale operational capacity without unnecessary complexity",
    ],
  },
  services: [
    { title: "Operational Excellence", description: "Assess and redesign how work, decisions, and information move through your organization.", icon: Network },
    { title: "Workflow Automation", description: "Eliminate repetitive work and connect the tools your teams already depend on.", icon: GitBranch },
    { title: "Process Modernization", description: "Replace spreadsheet, inbox, and paper-driven processes with resilient digital systems.", icon: Waypoints },
    { title: "Executive Dashboards", description: "Give leaders one trusted view of operations, finance, delivery, and risk.", icon: LayoutDashboard },
    { title: "Business Intelligence", description: "Turn scattered operational data into decision-ready information and reporting.", icon: BarChart3 },
    { title: "Cloud Modernization", description: "Build secure, scalable, compliance-aware foundations for modern operations.", icon: Cloud },
    { title: "Custom Business Systems", description: "Create purpose-built internal tools around the way your organization actually works.", icon: Blocks },
    { title: "Applied AI", description: "Embed practical AI into document, reporting, and knowledge workflows where it earns its place.", icon: Bot },
    { title: "Fractional Technology Leadership", description: "Align technology strategy, architecture, and delivery with measurable operating outcomes.", icon: Settings2 },
  ] satisfies Service[],
  organizations: [
    {
      title: "Government contractors",
      description:
        "Program delivery, compliance workflows, proposal operations, resource coordination, and executive visibility are often constrained by disconnected systems.",
      signals: ["20–250 employees", "Compliance-heavy delivery", "Program and proposal operations"],
    },
    {
      title: "Professional services firms",
      description:
        "Engineering, consulting, accounting, and architecture firms need clearer project flow, client delivery visibility, knowledge reuse, and operational reporting.",
      signals: ["Project-driven work", "Knowledge-heavy delivery", "Margin-sensitive operations"],
    },
    {
      title: "Growing operating teams",
      description:
        "Organizations reaching the limits of spreadsheets, inboxes, informal approvals, and tribal knowledge need systems that preserve quality as they scale.",
      signals: ["Manual coordination", "Reporting gaps", "Systems not matching the work"],
    },
  ] satisfies OrganizationProfile[],
  industries: [
    { title: "Government Contractors", description: "Compliance-heavy delivery, security requirements, and program visibility." },
    { title: "Engineering Firms", description: "Project operations, resourcing, and technical documentation at scale." },
    { title: "Consulting Firms", description: "Utilization, client delivery, and knowledge across engagements." },
    { title: "Accounting Firms", description: "Client workflows, reporting cycles, and accuracy under deadline." },
    { title: "Architecture Firms", description: "Project lifecycles, deliverables, and cross-team coordination." },
  ] satisfies Industry[],
  methodology: [
    { title: "Diagnose the operating reality", description: "Map how work actually moves, where decisions happen, and where friction accumulates." },
    { title: "Design the target system", description: "Define the workflows, data model, governance, measures, and technology architecture that should support the work." },
    { title: "Build and integrate", description: "Engineer the applications, automations, dashboards, integrations, and cloud foundations required." },
    { title: "Adopt and improve", description: "Launch with clear ownership, measure against the baseline, and refine as the organization evolves." },
  ] satisfies MethodStep[],
  insights: [
    { category: "Operations", title: "The real cost of manual workflows in government contracting", excerpt: "Why compliance overhead quietly becomes a margin problem—and how to address it structurally.", readTime: "6 min read" },
    { category: "Leadership", title: "What executive visibility actually requires", excerpt: "Dashboards fail when they sit on top of broken data. Visibility starts upstream.", readTime: "5 min read" },
    { category: "Technology", title: "Where applied AI earns its place in operations", excerpt: "A practical framework for separating real automation opportunity from AI theater.", readTime: "7 min read" },
  ] satisfies Insight[],
} as const;

