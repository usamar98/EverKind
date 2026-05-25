"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.09
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticAnchor({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  ariaLabel?: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });
  const rotate = useTransform(springX, [-14, 14], [-0.6, 0.6]);

  const variants = {
    primary:
      "bg-forest text-ivory border-forest shadow-soft hover:bg-[#164534] hover:border-[#164534]",
    secondary:
      "bg-transparent text-forest border-forest/35 hover:border-forest hover:bg-forest/5",
    light:
      "bg-ivory text-forest border-ivory hover:bg-[#fff8ea] shadow-[0_20px_44px_-32px_rgba(247,241,230,0.85)]",
    ghost:
      "bg-transparent text-ivory border-ivory/35 hover:border-ivory hover:bg-ivory/10"
  };

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-300 active:translate-y-px ${variants[variant]} ${className}`}
      style={reduceMotion ? undefined : { x: springX, y: springY, rotate }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.a>
  );
}
