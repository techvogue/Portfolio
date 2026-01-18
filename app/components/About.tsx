"use client";

import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Code2, Cpu, Globe, Zap } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    {
      icon: Code2,
      title: "Systems Thinking",
      description:
        "Building with scalability and performance as core principles, not afterthoughts.",
    },
    {
      icon: Cpu,
      title: "Problem Solver",
      description:
        "Codeforces Expert with 1700+ rating. Algorithms drive my approach to architecture.",
    },
    {
      icon: Globe,
      title: "Full-Stack Mindset",
      description:
        "MERN stack expertise with production experience in real-time platforms.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description:
        "Optimizing APIs to reduce load times by 30%+. Every millisecond counts.",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding section-surface section-tone-white"
    >
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-md text-[rgb(var(--accent))] mb-4 block">
            01 / About
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">
            Engineering-first approach to building web applications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[rgb(var(--fg)/0.72)] leading-relaxed">
              Final-year B.Tech student at IIIT Manipur, specializing in VLSI
              and Embedded Systems. But my passion lies in crafting web
              applications that handle real-world scale.
            </p>
            <p className="text-lg text-[rgb(var(--fg)/0.72)] leading-relaxed">
              With hands-on experience building platforms for{" "}
              <span className="text-[rgb(var(--fg))]">5000+ users</span>, I
              focus on clean architecture, efficient algorithms, and
              maintainable code. My competitive programming background shapes
              how I approach system design.
            </p>
            <p className="text-lg text-[rgb(var(--fg)/0.72)] leading-relaxed">
              Currently working on internship platforms, online judges, and
              AI-powered SaaS products — always seeking the intersection of
              performance and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-xl gradient-card border border-[rgb(var(--fg)/0.12)] hover:border-[rgb(var(--accent)/0.35)] transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[rgb(var(--bg)/0.55)] w-fit mb-4 group-hover:bg-[rgb(var(--accent)/0.10)] transition-colors border border-[rgb(var(--fg)/0.10)]">
                    <Icon className="w-5 h-5 text-[rgb(var(--accent))]" />
                  </div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-[rgb(var(--fg)/0.72)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
