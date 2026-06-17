"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { blurFadeUp, easeSmooth } from "@/lib/motion";

const techStack = [
  "Python",
  "Flask",
  "Babylon.js",
  "AI Vision",
  "HTML/CSS/JS",
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 pt-36 pb-44 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="text-[10px] font-mono tracking-[0.2em] text-muted mb-16"
        >
          <span className="text-accent">01</span>
          <span className="text-border/50 mx-2">/</span>
          <span>featured</span>
        </motion.p>

        <motion.div
          variants={blurFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          <div className="p-1.5 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.06] ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden bg-surface aspect-[4/3] relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <Image
                src="/photos/project/view pic.png"
                alt="DLP Advisor 3D visualizer interface"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <div>
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-3">
                Featured Project
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.02]">
                DLP Advisor
              </h3>
            </div>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              A centralized LegalTech web ecosystem designed to automate and
              manage property defect claims for homeowners under the Malaysian
              HDA 1966. The platform integrates an AI vision scanner to classify
              damage severity and features an interactive 3D visualizer for
              placing spatial pins on defect locations. It compiles data into a
              legally compliant Tribunal Borang 1 PDF in under 90 seconds.
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-background text-sm text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <span className="text-sm text-muted font-mono">
                Full-Stack Developer · Solo Project
              </span>
            </div>

          <a
            href="https://dlp-advisor-vnd3t.ondigitalocean.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Live Demo
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
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
