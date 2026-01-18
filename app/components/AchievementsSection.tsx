"use client";

import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Award, Code, Trophy } from "lucide-react";
import { useRef } from "react";

import AchievementsList, {
  type AchievementItem,
} from "./Experience/Achievements";

const achievements: AchievementItem[] = [
  {
    icon: Trophy as LucideIcon,
    title: "Smart India Hackathon 2023",
    subtitle: "National Finalist & Team Lead",
    description:
      "Led a team to national-level finals by delivering a real-world, problem-driven solution.",
  },
  {
    icon: Award as LucideIcon,
    title: "CodeHunt Winner",
    subtitle: "IIIT Manipur Tech Fest 2025",
    description:
      "Secured 1st place in competitive coding contest during Ahouba tech fest.",
  },
  {
    icon: Code as LucideIcon,
    title: "Ahouba 2024 Developer",
    subtitle: "Core Team Member",
    description:
      "Designed and developed the official website for IIIT Manipur tech fest Ahouba 2024.",
  },
];

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="achievements"
      className="section-padding section-surface section-tone-white"
    >
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-15" />
      <div aria-hidden className="absolute inset-0 noise-overlay" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent))] mb-4 block">
            05 / Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Highlights & wins
          </h2>
          <p className="text-[rgb(var(--fg)/0.72)] mt-4">
            A few milestones from hackathons, contests, and building in public.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          <AchievementsList items={achievements} />
        </div>
      </div>
    </section>
  );
}
