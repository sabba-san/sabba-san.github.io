"use client";

import { motion } from "motion/react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-mono tracking-[0.15em] uppercase text-muted mb-6"
        >
          Student &amp; Builder
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-balance"
        >
          Ahmad Abbas
          <span className="block mt-2 text-muted font-light text-3xl sm:text-4xl md:text-5xl">
            Code meets documentary.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto"
        >
          Intelligent Systems student at UUM. Building legaltech tools for
          Malaysian homeowners. Telling stories through documentary photography.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#photography"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-surface transition-colors"
          >
            Photography
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
