"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Effect = "up" | "left" | "right" | "scale" | "fade";
type Tag = "div" | "li" | "p" | "h2" | "h3" | "span";

const tags = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
};

// Silky ease-out for entering, gentler ease-in-out for leaving.
const EASE_IN: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

// Where the element rests before it enters, per effect. "above" (scrolled past the top)
// travels less than "below" (not reached yet) so leaving feels like a soft exit, not a jump.
const offsets: Record<Effect, { below: object; above: object }> = {
  up: { below: { y: 32 }, above: { y: -18 } },
  left: { below: { x: -40 }, above: { x: -20, y: -12 } },
  right: { below: { x: 40 }, above: { x: 20, y: -12 } },
  scale: { below: { scale: 0.94, y: 20 }, above: { scale: 0.97, y: -12 } },
  fade: { below: {}, above: {} },
};

type Phase = "below" | "in" | "above";

interface RevealProps {
  children: ReactNode;
  effect?: Effect;
  /** Seconds to wait before animating in (used to stagger siblings). Never delays the exit. */
  delay?: number;
  as?: Tag;
  className?: string;
  id?: string;
}

export default function Reveal({
  children,
  effect = "up",
  delay = 0,
  as = "div",
  className,
  id,
}: RevealProps) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("below");
  const Component = tags[as];

  if (reduce) {
    const Plain = as;
    return (
      <Plain id={id} className={className}>
        {children}
      </Plain>
    );
  }

  const { below, above } = offsets[effect];
  const variants: Variants = {
    below: { opacity: 0, x: 0, y: 0, scale: 1, ...below, transition: { duration: 0.6, ease: EASE_OUT } },
    above: { opacity: 0, x: 0, y: 0, scale: 1, ...above, transition: { duration: 0.6, ease: EASE_OUT } },
    in: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 1.05, ease: EASE_IN, delay } },
  };

  return (
    <Component
      id={id}
      className={className}
      variants={variants}
      initial="below"
      animate={phase}
      viewport={{ amount: 0.15, margin: "0px 0px -6% 0px" }}
      onViewportEnter={() => setPhase("in")}
      onViewportLeave={(entry) =>
        setPhase(entry && entry.boundingClientRect.top < 0 ? "above" : "below")
      }
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Component>
  );
}
