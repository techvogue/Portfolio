"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Briefcase } from "lucide-react";

export type WorkExperienceItem = {
  icon: LucideIcon;
  title: string;
  company: string;
  period: string;
  description: string;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 260, damping: 28, mass: 0.8 },
  },
};

export default function WorkExperience({
  items,
}: {
  items: WorkExperienceItem[];
}) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-8 flex items-center gap-3">
        <span className="p-2 rounded-lg bg-[rgb(var(--bg)/0.55)] border border-[rgb(var(--fg)/0.12)]">
          <Briefcase className="w-4 h-4 text-[rgb(var(--accent))]" />
        </span>
        Work Experience
      </h3>

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 top-8 bottom-8 w-px bg-[rgb(var(--fg)/0.18)]"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="space-y-8"
        >
          {items.map((exp) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="relative pl-12"
            >
              <div
                aria-hidden
                className="absolute left-2 top-1 w-4 h-4 rounded-full bg-[rgb(var(--accent)/0.18)] border-2 border-[rgb(var(--accent))]"
              />

              <div className="p-5 rounded-xl gradient-card border border-[rgb(var(--fg)/0.12)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-medium">{exp.title}</h4>
                  <span className="font-mono text-xs text-[rgb(var(--fg)/0.65)]">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-[rgb(var(--accent))] mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-[rgb(var(--fg)/0.72)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
