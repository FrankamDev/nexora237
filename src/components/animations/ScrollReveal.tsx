import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 35,
  duration = 0.65,
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : y,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -60px 0px",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}