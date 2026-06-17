"use client";

import { motion } from "motion/react";
import { LogoMark } from "./logo";
import { staggerContainer, blurFadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 overflow-hidden pt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div variants={blurFadeUp} className="mb-8 flex justify-center">
          <div className="p-1.5 rounded-[1.25rem] bg-black/[0.04] dark:bg-white/[0.06] ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
            <div className="w-14 h-14 rounded-[calc(1.25rem-0.375rem)] bg-accent-soft flex items-center justify-center text-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <LogoMark className="w-7 h-7" />
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={blurFadeUp}
          className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-5 px-3 py-1 rounded-full inline-block"
        >
          Student &amp; Builder
        </motion.p>

        <motion.h1
          variants={blurFadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] text-balance"
        >
          Ahmad Abbas
          <span className="block mt-3 text-muted font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Code meets documentary.
          </span>
        </motion.h1>

        <motion.p
          variants={blurFadeUp}
          className="mt-8 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto"
        >
          Intelligent Systems student at UUM. Building legaltech tools for
          Malaysian homeowners. Telling stories through documentary photography.
        </motion.p>

        <motion.div
          variants={blurFadeUp}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] hover:opacity-90"
          >
            View Projects
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-rotate-45"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#photography"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] hover:bg-surface"
          >
            Photography
            <span className="w-7 h-7 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
