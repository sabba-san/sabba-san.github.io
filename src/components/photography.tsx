"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { hobbyPhotos } from "@/lib/photos";
import { easeSpring, easeSmooth } from "@/lib/motion";

function PhotoCard({
  photo,
  index,
  onClick,
}: {
  photo: (typeof hobbyPhotos)[number];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: easeSpring,
        delay: (index % 6) * 0.06,
      }}
      onClick={onClick}
      className="masonry-item group w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-[1.25rem]"
    >
      <div className="p-1 rounded-[1.25rem] bg-black/[0.03] dark:bg-white/[0.05] ring-1 ring-black/[0.03] dark:ring-white/[0.05] overflow-hidden">
        <div className="rounded-[calc(1.25rem-0.25rem)] overflow-hidden bg-surface relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
          <div className={`relative w-full ${photo.aspect}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

          </div>
        </div>
      </div>
    </motion.button>
  );
}

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = hobbyPhotos[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: easeSpring }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-2xl p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="flex items-center justify-center w-full max-w-5xl max-h-[85vh]">
        <motion.div
          key={index}
          initial={{ scale: 0.92, opacity: 0, filter: "blur(8px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          exit={{ scale: 0.92, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: easeSpring }}
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full max-h-[85vh] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </motion.div>


      </div>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block" onClick={(e) => e.stopPropagation()}>
        <span className="text-[11px] text-white/40 font-mono tracking-widest">
          {index + 1} / {hobbyPhotos.length}
        </span>
      </div>
    </motion.div>
  );
}

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((s) => (s! > 0 ? s! - 1 : hobbyPhotos.length - 1)),
    []
  );
  const next = useCallback(
    () => setSelected((s) => (s! < hobbyPhotos.length - 1 ? s! + 1 : 0)),
    []
  );

  return (
    <section id="photography" className="px-6 pt-36 pb-44">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-[11px] text-muted font-light italic lowercase tracking-wide">lens</span>
          <span className="h-px flex-1 bg-border/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: easeSpring, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.02] mb-4"
        >
          Documentary frames
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth, delay: 0.2 }}
          className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-16"
        >
          Every frame teaches composition, patience, and storytelling —
          principles I bring back to how I build products.
        </motion.p>

        <div className="masonry">
          {hobbyPhotos.map((photo, i) => (
            <PhotoCard
              key={photo.src}
              photo={photo}
              index={i}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selected !== null && (
          <Lightbox
            index={selected}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
