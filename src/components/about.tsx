"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { blurFadeUp, easeSmooth } from "@/lib/motion";

const focuses = [
  "Intelligent Systems",
  "Web Development",
  "Legal Tech",
  "Creative Direction",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-20"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <motion.div
            variants={blurFadeUp}
            initial="hidden"
            whileInView="visible"
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
              at the intersection of logic and creativity — using technology to
              solve real human problems.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Currently building an AI-driven chatbot focused on Malaysian
              Property Law, designed to help homeowners navigate the Defect
              Liability Period (DLP). My goal is to simplify complex legal
              processes into accessible, conversational interfaces.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Beyond code, I specialize in documentary-style photography and
              content creation. Every frame teaches me composition, patience,
              and storytelling — principles I bring back to product design.
            </p>
          </motion.div>

          <motion.div
            variants={blurFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="p-1.5 rounded-[1.75rem] bg-black/[0.04] dark:bg-white/[0.06] ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
              <div className="rounded-[calc(1.75rem-0.375rem)] overflow-hidden bg-surface aspect-[4/5] relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <Image
                  src="/photos/hobby/photo_1_2026-06-17_12-13-39.jpg"
                  alt="Documentary photograph"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="space-y-4">
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
