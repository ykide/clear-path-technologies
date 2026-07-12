import type { Metadata } from "next";
import { ArrowUpRight, Building2, CloudCog, Compass, Gauge, LayoutDashboard, Route, Workflow } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionCard, Reveal, Stagger } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { absoluteUrl, breadcrumbJsonLd, defaultOgImage, jsonLdScriptProps } from "@/lib/seo";

const title = "Company | ClearPath Technologies";
const description =
  "ClearPath Technologies is an operational excellence and enterprise systems company helping leaders modernize workflows, dashboards, cloud foundations, and business operations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/company" },
  openGraph: {
    title,
    description,
    url: "/company",
    siteName: site.name,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Company",
  url: absoluteUrl("/company"),
  description,
  about: {
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    sameAs: [site.contact.linkedin],
    slogan: site.tagline,
  },
};

const companyBreadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
]);

const trustSignals = [
  { label: "Operating model", value: "Workflow, ownership, and decision clarity" },
  { label: "Systems lens", value: "Architecture, automation, cloud, and data" },
  { label: "Leadership view", value: "Executive dashboards and performance visibility" },
];

const philosophy = [
  {
    title: "Clarity before technology",
    description:
      "A better system starts with the work itself: who owns it, where it slows down, what decisions depend on it, and which information must be trusted.",
  },
  {
    title: "Architecture should serve operations",
    description:
      "Applications, automations, dashboards, and cloud foundations are designed around operating outcomes instead of isolated feature requests.",
  },
  {
    title: "Execution must be measurable",
    description:
      "Modernization is valuable when leaders can see capacity improve, risk decline, decisions accelerate, and teams spend less effort coordinating the basics.",
  },
];

const leadershipFocus = [
  { icon: Gauge, text: "Operational excellence and process modernization" },
  { icon: Workflow, text: "Workflow automation across cross-functional teams" },
  { icon: CloudCog, text: "Cloud engineering and enterprise architecture" },
  { icon: LayoutDashboard, text: "Executive dashboards, BI, and decision systems" },
  { icon: Building2, text: "Custom enterprise systems that match how work moves" },
];

export default function CompanyPage() {
  return (
    <>
      <script {...jsonLdScriptProps([companyBreadcrumbs, companyStructuredData])} />
      <CompanyHero />
      <WhyClearPathExists />
      <MissionVision />
      <OurPhilosophy />
      <Leadership />
      <LookingAhead />
    </>
  );
}

function CompanyHero() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24 sm:py-28 lg:py-36">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />
      <Container>
        <Reveal className="max-w-5xl">
          <Eyebrow>Company</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Built for leaders who need operations they can trust.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary">
            ClearPath Technologies helps organizations turn operational friction into durable systems: clearer workflows,
            better data, stronger cloud foundations, and executive visibility that supports confident decisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" arrow>
              Book a discovery call
            </Button>
            <Button href="/capabilities" variant="secondary">
              Explore capabilities
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-16 grid gap-4 lg:grid-cols-3">
          {trustSignals.map((signal) => (
            <MotionCard key={signal.label} className="rounded-xl border border-line bg-surface/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal">{signal.label}</p>
              <p className="mt-4 text-base leading-7 text-secondary">{signal.value}</p>
            </MotionCard>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function WhyClearPathExists() {
  return (
    <Section id="why-clearpath-exists">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Why ClearPath Exists</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Modern organizations are often limited by the systems behind the work.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-secondary">
            <p>
              Many teams have talented people, capable tools, and genuine urgency, but still depend on manual handoffs,
              fragmented reporting, unclear ownership, and technology that does not reflect how the business actually runs.
            </p>
            <p>
              ClearPath exists to close that operating gap. We help leaders define the system their organization needs,
              then build the workflows, applications, dashboards, integrations, and cloud foundations that make better
              execution repeatable.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function MissionVision() {
  return (
    <Section id="mission" className="bg-surface/35">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-line bg-background/70 p-7 sm:p-9">
            <Compass aria-hidden="true" className="size-7 text-signal" strokeWidth={1.5} />
            <Eyebrow className="mt-7">Mission</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Engineer operational clarity into the way organizations work.
            </h2>
            <p className="mt-5 leading-7 text-secondary">
              Our mission is to help leaders modernize the operating systems of their businesses: the workflows, data,
              automation, cloud platforms, and decision structures that determine how work moves and how performance is seen.
            </p>
          </Reveal>
          <Reveal className="rounded-xl border border-line bg-background/70 p-7 sm:p-9" delay={0.08}>
            <Route aria-hidden="true" className="size-7 text-signal" strokeWidth={1.5} />
            <Eyebrow className="mt-7">Vision</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Every growing organization should be able to operate from one trusted view.
            </h2>
            <p className="mt-5 leading-7 text-secondary">
              We envision organizations where leaders can understand capacity, risk, delivery, finance, and operational
              momentum without chasing status updates or reconciling disconnected tools.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function OurPhilosophy() {
  return (
    <Section id="our-philosophy">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <Eyebrow>Our Philosophy</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Trust is created by systems that make the right work easier to do.
          </h2>
        </Reveal>
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {philosophy.map((item) => (
            <MotionCard key={item.title} className="rounded-xl border border-line bg-surface p-7">
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
            </MotionCard>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

function Leadership() {
  return (
    <Section id="leadership" className="bg-surface/35">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Practitioner-led, enterprise-minded, outcome focused.
            </h2>
          </div>
          <div className="rounded-xl border border-line bg-background/70 p-7 sm:p-9">
            <p className="text-lg leading-8 text-secondary">
              ClearPath was founded by an enterprise architect focused on operational excellence, workflow automation,
              cloud engineering, executive dashboards, and enterprise systems. The company is built from a practical
              understanding that better operations require both business discipline and strong technical architecture.
            </p>
            <ul className="mt-8 grid gap-3" aria-label="Leadership focus areas">
              {leadershipFocus.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 border-l border-line pl-4 text-sm leading-6 text-muted">
                  <Icon aria-hidden="true" className="size-5 shrink-0 text-signal" strokeWidth={1.5} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function LookingAhead() {
  return (
    <Section id="looking-ahead" className="overflow-hidden border-b-0">
      <Container>
        <Reveal className="relative rounded-xl border border-line bg-surface p-8 sm:p-10 lg:p-12">
          <div aria-hidden="true" className="absolute right-8 top-8 hidden size-24 rounded-full border border-signal/25 lg:block" />
          <Eyebrow>Looking Ahead</Eyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            ClearPath OS is the long-term platform vision behind the company.
          </h2>
          <p className="mt-6 max-w-3xl leading-7 text-secondary">
            Today, ClearPath delivers consulting, architecture, automation, dashboards, and custom systems for organizations
            that need stronger operating foundations. Over time, those patterns inform ClearPath OS: a platform vision for
            bringing workflows, data, decisions, and executive visibility into one coherent operating layer.
          </p>
          <Link
            href="/#clearpath-os"
            className="mt-8 inline-flex items-center gap-2 rounded text-sm font-semibold text-signal transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            View the platform vision
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
