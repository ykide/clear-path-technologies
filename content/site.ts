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
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/#industries" },
    { label: "Methodology", href: "/#methodology" },
    { label: "ClearPath OS", href: "/#clearpath-os" },
    { label: "Insights", href: "/#insights" },
  ] satisfies NavItem[],
  audiences: [
    "Government Contractors",
    "Engineering Firms",
    "Consulting Firms",
    "Accounting Firms",
    "Architecture Firms",
  ],
  operatingGap: {
    eyebrow: "The operating gap",
    title: "Most firms aren’t short on effort. They’re short on systems.",
    description:
      "Work gets done—but through email threads, spreadsheets, and tribal knowledge instead of a system leadership can see and trust. That gap is where cost, risk, and slow decisions live.",
    before: [
      "Manual, repetitive work consumes senior time",
      "Business data lives in scattered, disconnected tools",
      "Leadership lacks real-time visibility into operations",
      "Decisions rely on stale or incomplete information",
      "Operating costs scale with headcount, not efficiency",
    ],
    after: [
      "Workflows run on automation, not headcount",
      "Business information lives in one system of record",
      "Executives see operations in real time, on one screen",
      "Decisions are backed by current, trusted data",
      "Systems scale capacity without scaling overhead",
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
  industries: [
    { title: "Government Contractors", description: "Compliance-heavy delivery, security requirements, and program visibility." },
    { title: "Engineering Firms", description: "Project operations, resourcing, and technical documentation at scale." },
    { title: "Consulting Firms", description: "Utilization, client delivery, and knowledge across engagements." },
    { title: "Accounting Firms", description: "Client workflows, reporting cycles, and accuracy under deadline." },
    { title: "Architecture Firms", description: "Project lifecycles, deliverables, and cross-team coordination." },
  ] satisfies Industry[],
  methodology: [
    { title: "Operational Assessment", description: "Map how work actually moves—not how the org chart says it does." },
    { title: "System Design", description: "Architect the target workflows, data model, tooling, and governance." },
    { title: "Build & Automate", description: "Engineer the applications, automations, dashboards, and infrastructure." },
    { title: "Deploy & Adopt", description: "Launch alongside your team with clear ownership and practical enablement." },
    { title: "Measure & Optimize", description: "Track outcomes against the baseline and refine as the business evolves." },
  ] satisfies MethodStep[],
  insights: [
    { category: "Operations", title: "The real cost of manual workflows in government contracting", excerpt: "Why compliance overhead quietly becomes a margin problem—and how to address it structurally.", readTime: "6 min read" },
    { category: "Leadership", title: "What executive visibility actually requires", excerpt: "Dashboards fail when they sit on top of broken data. Visibility starts upstream.", readTime: "5 min read" },
    { category: "Technology", title: "Where applied AI earns its place in operations", excerpt: "A practical framework for separating real automation opportunity from AI theater.", readTime: "7 min read" },
  ] satisfies Insight[],
} as const;
