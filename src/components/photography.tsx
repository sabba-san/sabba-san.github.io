"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { hobbyPhotos } from "@/lib/photos";
import { easeSpring, easeSmooth } from "@/lib/motion";

const bentoIndexes = new Set([0, 5, 10, 13]);

function spanClass(index: number) {
  if (index === 0) return "md:col-span-2 md:row-span-2";
  if (bentoIndexes.has(index)) return "md:col-span-2";
  return "";
}

function PhotoCard({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: easeSpring,
        delay: (index % 8) * 0.04,
      }}
      onClick={onClick}
      className={`group relative ${spanClass(index)}`}
    >
      <div className="p-1 rounded-[1.25rem] bg-black/[0.03] dark:bg-white/[0.05] ring-1 ring-black/[0.03] dark:ring-white/[0.05] h-full">
        <div
          className={`rounded-[calc(1.25rem-0.25rem)] overflow-hidden bg-surface relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ${
            index === 0 ? "aspect-square" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={src}
            alt={`Documentary photograph ${index + 1}`}
            fill
            className="object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            sizes={
              index === 0
                ? "(max-width: 768px) 100vw, 50vw"
                : bentoIndexes.has(index)
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 100vw, 25vw"
            }
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.06] transition-colors duration-500" />
        </div>
      </div>
    </motion.button>
  );
}

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="photography" className="px-6 py-40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-6"
        >
          Photography
        </motion.p>

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 grid-flow-dense">
          {hobbyPhotos.map((src, i) => (
            <PhotoCard
              key={src}
              src={src}
              index={i}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeSpring }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, filter: "blur(8px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.92, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: easeSpring }}
              className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={hobbyPhotos[selected]}
                alt={`Documentary photograph ${selected + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected > 0 ? selected - 1 : hobbyPhotos.length - 1);
                }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="px-4 text-sm text-white/70 font-mono tracking-wider">
                {selected + 1} / {hobbyPhotos.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected < hobbyPhotos.length - 1 ? selected + 1 : 0);
                }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
