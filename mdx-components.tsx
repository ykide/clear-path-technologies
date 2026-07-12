import type { MDXComponents } from "mdx/types";
import type React from "react";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getText).join("");
  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2
        id={toSlug(getText(children))}
        className="mt-14 scroll-mt-28 border-t border-line pt-10 text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="mt-10 text-2xl font-semibold tracking-tight text-ink">{children}</h3>,
    p: ({ children }) => <p className="mt-6 text-lg leading-8 text-secondary">{children}</p>,
    ul: ({ children }) => <ul className="mt-6 space-y-3 text-base leading-7 text-secondary">{children}</ul>,
    ol: ({ children }) => <ol className="mt-6 space-y-3 text-base leading-7 text-secondary">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l border-signal pl-6 text-xl leading-8 text-ink">{children}</blockquote>
    ),
    ...components,
  };
}
