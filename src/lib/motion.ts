import type { Variants } from "motion/react";

export const easeSpring = [0.32, 0.72, 0, 1] as const;
export const easeSmooth = [0.16, 1, 0.3, 1] as const;

export const blurFadeUp: Variants = {
  hidden: { opacity: 0, y: 64, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeSpring },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeSpring },
  },
};
