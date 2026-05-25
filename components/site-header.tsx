"use client";

import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MagneticAnchor } from "./motion-primitives";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Care Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Families", href: "#families" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal/10 bg-ivory/88 shadow-[0_18px_48px_-42px_rgba(38,38,34,0.65)] backdrop-blur-xl"
          : "border-transparent bg-ivory/70 backdrop-blur-md"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#home" className="group flex items-center gap-3" aria-label="EverKind Home Care home">
          <span className="grid size-11 place-items-center rounded-full bg-forest text-ivory shadow-soft transition-transform duration-300 group-hover:-rotate-3">
            <ShieldCheck size={21} strokeWidth={1.8} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl text-forest">EverKind</span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Home Care
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-charcoal/10 bg-ivory/65 p-1.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-charcoal/78 transition-colors hover:bg-forest hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+442045768421"
            className="inline-flex size-11 items-center justify-center rounded-full border border-charcoal/10 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory"
            aria-label="Call EverKind Home Care"
          >
            <Phone size={18} strokeWidth={1.8} />
          </a>
          <MagneticAnchor href="#contact" className="px-5">
            Arrange Care
          </MagneticAnchor>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-charcoal/10 text-forest lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={22} strokeWidth={1.8} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 bg-forest text-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-20 items-center justify-between px-5">
              <span className="font-display text-2xl">EverKind Home Care</span>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full border border-ivory/25"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.8} />
              </button>
            </div>
            <motion.nav
              className="grid gap-2 px-5 pt-10"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } }
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ivory/12 py-5 font-display text-4xl"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
            <div className="absolute inset-x-5 bottom-6 grid gap-3">
              <MagneticAnchor href="#contact" variant="light" className="w-full" ariaLabel="Arrange care">
                Arrange Care
              </MagneticAnchor>
              <a
                href="tel:+442045768421"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/20 text-sm font-semibold"
              >
                <Phone size={17} strokeWidth={1.8} />
                Call the Care Team
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
