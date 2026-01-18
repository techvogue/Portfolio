"use client";

import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BarChart,
  Binary,
  Box,
  Cloud,
  Code2,
  Container,
  Database,
  Flame,
  GitBranch,
  HardDrive,
  Key,
  Layers,
  Leaf,
  Link,
  Palette,
  RefreshCw,
  Server,
  Settings,
  Sparkles,
  Target,
  Terminal,
  Triangle,
  Zap,
} from "lucide-react";
import { useRef } from "react";

type Skill = {
  name: string;
  icon: LucideIcon;
  colorClass: string;
};

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Palette,
    description: "Building responsive, performant user interfaces",
    skills: [
      { name: "React.js", icon: Atom, colorClass: "text-sky-400" },
      { name: "TypeScript", icon: Code2, colorClass: "text-blue-400" },
      { name: "Tailwind CSS", icon: Palette, colorClass: "text-cyan-400" },
      { name: "Framer Motion", icon: Sparkles, colorClass: "text-purple-400" },
      { name: "Redux", icon: RefreshCw, colorClass: "text-violet-400" },
      { name: "Next.js", icon: Triangle, colorClass: "text-[rgb(var(--fg))]" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Scalable APIs and server architecture",
    skills: [
      { name: "Node.js", icon: Server, colorClass: "text-green-400" },
      { name: "Express.js", icon: Zap, colorClass: "text-yellow-400" },
      { name: "REST APIs", icon: Link, colorClass: "text-orange-400" },
      { name: "Prisma ORM", icon: Database, colorClass: "text-indigo-400" },
      { name: "JWT Auth", icon: Key, colorClass: "text-amber-400" },
      { name: "Golang", icon: Binary, colorClass: "text-sky-400" },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Cloud,
    description: "Data management and deployment",
    skills: [
      { name: "MongoDB", icon: Leaf, colorClass: "text-green-500" },
      { name: "PostgreSQL", icon: HardDrive, colorClass: "text-blue-500" },
      { name: "MySQL", icon: Layers, colorClass: "text-orange-500" },
      { name: "Docker", icon: Container, colorClass: "text-sky-500" },
      { name: "Firebase", icon: Flame, colorClass: "text-amber-500" },
      { name: "Vercel", icon: Triangle, colorClass: "text-[rgb(var(--fg))]" },
    ],
  },
  {
    title: "Problem Solving",
    icon: Target,
    description: "Algorithms and system thinking",
    skills: [
      { name: "C++", icon: Settings, colorClass: "text-blue-400" },
      { name: "Data Structures", icon: Box, colorClass: "text-emerald-400" },
      { name: "Algorithms", icon: BarChart, colorClass: "text-rose-400" },
      {
        name: "System Design",
        icon: Target,
        colorClass: "text-[rgb(var(--accent))]",
      },
      { name: "Git", icon: GitBranch, colorClass: "text-orange-400" },
      { name: "Linux", icon: Terminal, colorClass: "text-yellow-400" },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section-surface section-tone-green relative overflow-hidden py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px]"
      />

      <div ref={ref} className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent))] mb-4 block">
            02 / Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Technical arsenal
          </h2>
          <p className="text-[rgb(var(--fg)/0.7)] text-lg">
            Technologies I use to bring ideas to life with precision and
            performance.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative p-6 rounded-2xl glass shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-500"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[rgb(var(--accent)/0.12)] text-[rgb(var(--accent))]">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                    <p className="text-sm text-[rgb(var(--fg)/0.65)]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[rgb(var(--bg)/0.55)] border border-[rgb(var(--fg)/0.12)] hover:border-[rgb(var(--accent)/0.35)] hover:bg-[rgb(var(--bg)/0.7)] transition-all duration-300 group/skill"
                      >
                        <SkillIcon
                          className={`w-5 h-5 ${skill.colorClass} group-hover/skill:scale-110 transition-transform`}
                        />
                        <span className="text-sm text-[rgb(var(--fg)/0.7)] group-hover/skill:text-[rgb(var(--fg))] transition-colors font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Corner glow */}
                <div
                  aria-hidden
                  className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-400/20 transition-colors"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Codeforces Rating", value: "1700+", sublabel: "Expert" },
            {
              label: "Problems Solved",
              value: "500+",
              sublabel: "Across platforms",
            },
            {
              label: "Projects Built",
              value: "15+",
              sublabel: "Production ready",
            },
            { label: "Technologies", value: "20+", sublabel: "In active use" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center p-4 rounded-xl glass"
            >
              <p className="font-mono text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-[rgb(var(--fg)/0.7)] mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-[rgb(var(--accent))] mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
