"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Brand } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-xl">
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#top" aria-label="ClearPath Technologies home" className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
          <Brand />
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded text-sm font-medium text-secondary transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block"><Button href="#contact" className="min-h-0 px-4 py-2.5">Book a discovery call</Button></div>
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-line p-2 text-secondary transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-background lg:hidden"
          >
            <Container className="flex flex-col py-5">
              {site.nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-line/70 py-4 text-sm font-medium text-secondary hover:text-ink">
                  {item.label}
                </a>
              ))}
              <Button href="#contact" onClick={() => setOpen(false)} className="mt-5">Book a discovery call</Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
