"use client";

import { motion } from "motion/react";
import Image from "next/image";

const techStack = [
  "Python",
  "Flask",
  "Babylon.js",
  "AI Vision",
  "HTML/CSS/JS",
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32 sm:py-40 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-sm font-mono tracking-[0.15em] uppercase text-muted mb-16"
        >
          Projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          <div className="rounded-2xl overflow-hidden bg-surface aspect-[4/3] relative">
            <Image
              src="/photos/project/view pic.png"
              alt="DLP Advisor 3D visualizer interface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-mono tracking-[0.1em] uppercase text-accent mb-2">
                Featured Project
              </p>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tighter leading-[1.05]">
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
                  className="px-3 py-1 rounded-full bg-background text-sm text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-muted font-mono">
                Full-Stack Developer · Solo Project
              </span>
            </div>

            <a
              href="https://dlp-advisor-vnd3t.ondigitalocean.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Live Demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
