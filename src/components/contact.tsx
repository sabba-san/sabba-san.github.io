"use client";

import { motion } from "motion/react";

const links = [
  { label: "Email", href: "mailto:abbasabudzarr@gmail.com" },
  { label: "GitHub", href: "https://github.com/sabba-san" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abbas-abu-dzarr/" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 sm:py-40 bg-surface/50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-sm font-mono tracking-[0.15em] uppercase text-muted mb-6"
        >
          Connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.05]"
        >
          Open to internships &amp;
          <br />
          <span className="text-muted font-light">project collaborations.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-lg mx-auto"
        >
          AI development, UI/UX, or Tech Strategy &mdash; I&apos;d love to hear
          from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-xs text-muted font-mono"
        >
          &copy; {new Date().getFullYear()} Ahmad Abbas Bin Abu Dzarr
        </motion.p>
      </div>
    </section>
  );
}
