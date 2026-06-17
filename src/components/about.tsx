"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { blurFadeUp, easeSmooth } from "@/lib/motion";

const focuses = [
  "Intelligent Systems",
  "Web Development",
  "Legal Tech",
  "Creative Direction",
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative px-6 pt-36 pb-44">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent-soft/20 dark:bg-accent-soft/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="h-px flex-1 bg-border/40" />
          <span className="text-[11px] text-muted font-light italic lowercase tracking-wide">about</span>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          <motion.div
            variants={reduce ? undefined : blurFadeUp}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="p-1.5 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.06] ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
              <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden bg-surface aspect-[3/4] relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <Image
                  src="/photos/about me/DSC_9816 (1).JPG"
                  alt="Portrait of Ahmad Abbas against a neutral background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : blurFadeUp}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-3 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.02]">
              Logic, code, and
              <br />
              <span className="text-muted font-light">visual storytelling.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              I&apos;m a third-year Information Technology student majoring in
              Intelligent Systems at Universiti Utara Malaysia. My passion lies
              at the intersection of logic and creativity, using technology to
              solve real human problems.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Currently building an AI-driven chatbot focused on Malaysian
              Property Law, designed to help homeowners navigate the Defect
              Liability Period (DLP). My goal is to simplify complex legal
              processes into accessible, conversational interfaces.
            </p>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : blurFadeUp}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Beyond code, I specialize in documentary-style photography and
              content creation. Every frame teaches me composition, patience,
              and storytelling. Principles I bring back to product design.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">
                Core Focus
              </p>
              <ul className="flex flex-wrap gap-2">
                {focuses.map((f) => (
                  <li
                    key={f}
                    className="px-3 py-1.5 rounded-full bg-surface text-sm text-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
