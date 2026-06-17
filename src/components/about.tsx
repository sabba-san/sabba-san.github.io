"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const focuses = [
  "Intelligent Systems",
  "Web Development",
  "Legal Tech",
  "Creative Direction",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-sm font-mono tracking-[0.15em] uppercase text-muted mb-16"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-3 space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter leading-[1.05]">
              Logic, code, and
              <br />
              <span className="text-muted font-light">visual storytelling.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              I&apos;m a third-year Information Technology student majoring in
              Intelligent Systems at Universiti Utara Malaysia. My passion lies at
              the intersection of logic and creativity — using technology to solve
              real human problems.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Currently building an AI-driven chatbot focused on Malaysian
              Property Law, designed to help homeowners navigate the Defect
              Liability Period (DLP). My goal is to simplify complex legal
              processes into accessible, conversational interfaces.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Beyond code, I specialize in documentary-style photography and
              content creation. Every frame teaches me composition, patience, and
              storytelling — principles I bring back to product design.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="rounded-2xl overflow-hidden bg-surface aspect-[4/5] relative">
              <Image
                src="/photos/hobby/photo_1_2026-06-17_12-13-39.jpg"
                alt="Documentary photograph"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-mono tracking-[0.1em] uppercase text-muted">
                Core Focus
              </p>
              <ul className="flex flex-wrap gap-2">
                {focuses.map((f) => (
                  <li
                    key={f}
                    className="px-3 py-1.5 rounded-full bg-surface text-sm text-foreground border border-border"
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
