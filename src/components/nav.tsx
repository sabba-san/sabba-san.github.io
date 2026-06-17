"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LogoMark } from "./logo";
import { easeSpring } from "@/lib/motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open, close]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: easeSpring, delay: 0.15 }}
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div
          className={`flex items-center justify-between px-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "h-12 rounded-full bg-background/70 backdrop-blur-2xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              : "h-12 rounded-full bg-background/50 backdrop-blur-sm"
          }`}
          style={{ width: scrolled ? "90%" : "auto", maxWidth: "640px" }}
        >
          <a
            href="#"
            className="flex items-center gap-2 text-foreground px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-lg"
            onClick={close}
          >
            <LogoMark className="w-[18px] h-[18px]" />
            <span className="text-sm font-semibold tracking-tight hidden sm:inline">
              Abbas
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-6 px-2">
            {links.map((link) => (
              <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-muted hover:text-foreground transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 flex items-center justify-center md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-lg"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeSpring }}
            className="fixed inset-0 z-30 flex items-center justify-center bg-background/90 backdrop-blur-3xl"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    ease: easeSpring,
                    delay: 0.08 + i * 0.07,
                  }}
                  className="text-4xl sm:text-5xl font-semibold tracking-tighter text-foreground hover:text-accent transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
