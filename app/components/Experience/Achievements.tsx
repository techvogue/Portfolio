"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Trophy } from "lucide-react";

export type AchievementItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
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
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 260, damping: 28, mass: 0.8 },
  },
};

export default function Achievements({ items }: { items: AchievementItem[] }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-8 flex items-center gap-3">
        <span className="p-2 rounded-lg bg-[rgb(var(--bg)/0.55)] border border-[rgb(var(--fg)/0.12)]">
          <Trophy className="w-4 h-4 text-[rgb(var(--accent))]" />
        </span>
        Achievements
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="space-y-6"
      >
        {items.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="p-5 rounded-xl gradient-card border border-[rgb(var(--fg)/0.12)] hover:border-[rgb(var(--accent)/0.35)] transition-colors duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[rgb(var(--bg)/0.55)] group-hover:bg-[rgb(var(--accent)/0.10)] transition-colors border border-[rgb(var(--fg)/0.10)]">
                  <Icon className="w-5 h-5 text-[rgb(var(--accent))]" />
                </div>
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-[rgb(var(--accent))] mt-1">
                    {achievement.subtitle}
                  </p>
                  <p className="text-sm text-[rgb(var(--fg)/0.72)] mt-2 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
