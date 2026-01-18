"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail, Terminal } from "lucide-react";
import type { ComponentType, CSSProperties } from "react";
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  } as const;

  const item = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  } as const;

  type FloatingIcon = {
    Icon: ComponentType<{ size?: number; color?: string }>;
    color: string;
    pos: CSSProperties;
    x: number[];
    y: number[];
    r: number[];
    d: number;
    delay: number;
  };

  const floatingIcons: FloatingIcon[] = [
    {
      Icon: SiReact,
      color: "#61DAFB",
      pos: { top: "10%", left: "8%" },
      x: [0, 28, -22, 0],
      y: [0, -18, 20, 0],
      r: [0, 10, -8, 0],
      d: 14,
      delay: 0,
    },
    {
      Icon: SiJavascript,
      color: "#F7DF1E",
      pos: { top: "18%", left: "78%" },
      x: [0, -34, 26, 0],
      y: [0, 20, -18, 0],
      r: [0, -10, 8, 0],
      d: 16,
      delay: 0.2,
    },
    {
      Icon: SiTypescript,
      color: "#3178C6",
      pos: { top: "34%", left: "16%" },
      x: [0, 22, -18, 0],
      y: [0, 24, -16, 0],
      r: [0, 14, -10, 0],
      d: 18,
      delay: 0.35,
    },
    {
      Icon: SiTailwindcss,
      color: "#38BDF8",
      pos: { top: "62%", left: "10%" },
      x: [0, 26, -22, 0],
      y: [0, -22, 18, 0],
      r: [0, -12, 10, 0],
      d: 17,
      delay: 0.15,
    },
    {
      Icon: SiNodedotjs,
      color: "#22C55E",
      pos: { top: "12%", left: "52%" },
      x: [0, -22, 18, 0],
      y: [0, 18, -16, 0],
      r: [0, 8, -10, 0],
      d: 15,
      delay: 0.25,
    },
    {
      Icon: SiExpress,
      color: "#E5E7EB",
      pos: { top: "44%", left: "84%" },
      x: [0, -26, 22, 0],
      y: [0, -18, 16, 0],
      r: [0, 10, -12, 0],
      d: 19,
      delay: 0.05,
    },
    {
      Icon: SiMongodb,
      color: "#22C55E",
      pos: { top: "74%", left: "72%" },
      x: [0, 24, -20, 0],
      y: [0, -16, 20, 0],
      r: [0, -8, 10, 0],
      d: 18,
      delay: 0.3,
    },
    {
      Icon: SiDocker,
      color: "#2496ED",
      pos: { top: "72%", left: "42%" },
      x: [0, -24, 20, 0],
      y: [0, 18, -18, 0],
      r: [0, 12, -10, 0],
      d: 20,
      delay: 0.12,
    },
    // Duplicates for “moving everywhere” feel
    {
      Icon: SiReact,
      color: "#61DAFB",
      pos: { top: "26%", left: "62%" },
      x: [0, 22, -26, 0],
      y: [0, -20, 16, 0],
      r: [0, -10, 12, 0],
      d: 21,
      delay: 0.4,
    },
    {
      Icon: SiTailwindcss,
      color: "#38BDF8",
      pos: { top: "52%", left: "52%" },
      x: [0, -28, 22, 0],
      y: [0, 16, -20, 0],
      r: [0, 10, -8, 0],
      d: 22,
      delay: 0.18,
    },
    {
      Icon: SiJavascript,
      color: "#F7DF1E",
      pos: { top: "80%", left: "18%" },
      x: [0, 30, -24, 0],
      y: [0, -14, 18, 0],
      r: [0, 8, -10, 0],
      d: 20,
      delay: 0.28,
    },
    {
      Icon: SiDocker,
      color: "#2496ED",
      pos: { top: "30%", left: "90%" },
      x: [0, -30, 24, 0],
      y: [0, 18, -16, 0],
      r: [0, -14, 10, 0],
      d: 23,
      delay: 0.08,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center -mt-12"
    >
      {/* Subtle hero-only ambience (no top-to-bottom section gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-52 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          style={{ width: 900, height: 900 }}
        />
        <div
          className="absolute -bottom-64 -left-48 rounded-full bg-white/6 blur-3xl"
          style={{ width: 650, height: 650 }}
        />
      </div>

      {/* Floating tech icons across the whole hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      >
        {floatingIcons.map((it, idx) => (
          <motion.div
            key={`float-${idx}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              reduceMotion
                ? { opacity: 0.55, scale: 1 }
                : {
                    opacity: 0.65,
                    scale: [1, 1.06, 1],
                    x: it.x,
                    y: it.y,
                    rotate: it.r,
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.35, ease: "easeOut" }
                : {
                    duration: it.d,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: it.delay,
                  }
            }
            style={it.pos}
            className="absolute drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          >
            <it.Icon size={26} color={it.color} />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6 max-w-3xl"
          >
            <motion.div variants={item} className="inline-flex">
              <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-[rgb(var(--fg)/0.8)]">
                Full‑stack MERN Developer
              </span>
            </motion.div>

            <motion.h1
              variants={container}
              className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
            >
              <span className="block">
                {"Building".split(" ").map((w) => (
                  <motion.span
                    key={`l1-${w}`}
                    variants={item}
                    className="inline-block mr-3"
                  >
                    {w}
                  </motion.span>
                ))}
                {"reliable".split(" ").map((w) => (
                  <motion.span
                    key={`l1b-${w}`}
                    variants={item}
                    className="inline-block mr-3 text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-r dark:from-emerald-200 dark:via-emerald-300 dark:to-emerald-100"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {"web".split(" ").map((w) => (
                  <motion.span
                    key={`l2-${w}`}
                    variants={item}
                    className="inline-block mr-3"
                  >
                    {w}
                  </motion.span>
                ))}
                {"systems".split(" ").map((w) => (
                  <motion.span
                    key={`l2b-${w}`}
                    variants={item}
                    className="inline-block text-[rgb(var(--fg))]"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-[rgb(var(--fg)/0.72)] max-w-xl leading-relaxed"
            >
              I build production-grade apps with clean architecture, real-world
              performance, and a strong focus on user experience.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://drive.google.com/file/d/1tMcXYG1zM9DuwBLOCM1O6sN8sO2wbHv9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[rgb(var(--accent)/0.16)] hover:bg-[rgb(var(--accent)/0.22)] text-[rgb(var(--accent))] border border-[rgb(var(--accent)/0.28)] transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[rgb(var(--bg)/0.55)] hover:bg-[rgb(var(--bg)/0.75)] border border-[rgb(var(--fg)/0.12)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — MAC TERMINAL */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-3xl bg-emerald-500/10 blur-2xl"
            />

            {/* Mac Terminal Window */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 scale-110">
              {/* Terminal Header (Mac style) */}
              <div className="bg-[#2d2d2d] px-5 py-4 flex items-center gap-2 border-b border-gray-800">
                {/* Traffic light buttons */}
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#28c840]"></div>
                </div>
                {/* Terminal title */}
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-400 font-medium">
                    vishwa@portfolio: ~
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="bg-[#1e1e1e] p-8">
                <div className="flex items-center gap-2 text-base text-gray-300 mb-5">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium text-gray-300">
                    Now building
                  </span>
                  <span className="text-sm px-2.5 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 ml-auto">
                    2026
                  </span>
                </div>

                <div className="font-mono text-base leading-7 text-gray-300">
                  <div>
                    <span className="text-emerald-400">const</span> focus = [
                    <span className="text-gray-400">
                      "MERN", "Performance", "UI"
                    </span>
                    ];
                  </div>
                  <div>
                    <span className="text-emerald-400">const</span> status =
                    <span className="text-gray-400">
                      {" "}
                      "Open to opportunities"
                    </span>
                    ;
                  </div>
                  <div>
                    <span className="text-emerald-400">const</span> inbox =
                    <span className="text-gray-400"> "Fast replies"</span>;
                  </div>
                  <div className="pt-4">
                    <span className="text-gray-500">$</span>{" "}
                    <span className="text-emerald-300">
                      let&apos;s build something
                    </span>
                    <span className="inline-block w-2.5 h-5 align-[-2px] bg-emerald-300/70 ml-1 animate-pulse rounded-sm" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["React", "Node", "Express", "MongoDB", "Docker"].map(
                    (t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 rounded-full text-sm border border-gray-700 bg-gray-800/50 text-gray-300"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
