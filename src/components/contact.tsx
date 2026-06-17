"use client";

import { motion } from "motion/react";
import { easeSpring, easeSmooth } from "@/lib/motion";

const links = [
  { label: "Email", href: "mailto:abbasabudzarr@gmail.com" },
  { label: "GitHub", href: "https://github.com/sabba-san" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-abu-dzarr/" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-40 bg-surface/30">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-6"
        >
          Connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeSpring, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.02]"
        >
          Open to internships &amp;
          <br />
          <span className="text-muted font-light">project collaborations.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-lg mx-auto"
        >
          AI development, UI/UX, or Tech Strategy &mdash; I&apos;d love to hear
          from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors duration-500"
            >
              {link.label}
              <span className="w-5 h-5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                <svg
                  width="10"
                  height="10"
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
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-[11px] text-muted font-mono tracking-wider"
        >
          &copy; {new Date().getFullYear()} Ahmad Abbas Bin Abu Dzarr
        </motion.p>
      </div>
    </section>
  );
}
