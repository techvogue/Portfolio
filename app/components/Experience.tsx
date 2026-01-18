"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Briefcase } from "lucide-react";
import WorkExperience from "./Experience/WorkExperience";

const experiences: Array<{
  icon: LucideIcon;
  title: string;
  company: string;
  period: string;
  description: string;
}> = [
  {
    icon: Briefcase,
    title: "React Developer",
    company: "Appyard Infotech",
    period: "Aug 2025 – Nov 2025",
    description:
      "Developing cross-platform mobile apps using React Native with optimized UI/UX. Implementing Firebase Authentication and Firestore for real-time data.",
  },
  {
    icon: Briefcase,
    title: "Full Stack Intern – MERN",
    company: "Renu Sharma Foundation",
    period: "Mar 2025 – June 2025",
    description:
      "Leading development of a scalable internship platform for 5000+ users. Implementing JWT authentication, role-based access, and MongoDB-backed task management.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding section-surface section-tone-green"
    >
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-15" />
      <div aria-hidden className="absolute inset-0 noise-overlay" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent))] mb-4 block">
            04 / Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Journey so far
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <WorkExperience items={experiences} />
        </div>
      </div>
    </section>
  );
}
