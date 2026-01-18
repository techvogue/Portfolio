"use client";

import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Brain,
  ChevronLeft,
  ChevronRight,
  Container,
  CreditCard,
  Database,
  ExternalLink,
  Github,
  HardDrive,
  Key,
  Layers,
  Leaf,
  Radio,
  Server,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const techIcons: Record<string, LucideIcon> = {
  "React.js": Atom,
  "Node.js": Server,
  MongoDB: Leaf,
  Stripe: CreditCard,
  JWT: Key,
  Docker: Container,
  WebSocket: Radio,
  "AI/ML": Brain,
  PostgreSQL: HardDrive,
  Prisma: Database,
  "Express.js": Zap,
};

const techIconStyle: Record<
  string,
  {
    iconClass: string;
    bgClass: string;
  }
> = {
  "React.js": { iconClass: "text-sky-300", bgClass: "bg-sky-500/15" },
  "Node.js": { iconClass: "text-green-300", bgClass: "bg-green-500/15" },
  MongoDB: { iconClass: "text-emerald-300", bgClass: "bg-emerald-500/15" },
  Stripe: { iconClass: "text-violet-300", bgClass: "bg-violet-500/15" },
  JWT: { iconClass: "text-amber-300", bgClass: "bg-amber-500/15" },
  Docker: { iconClass: "text-blue-300", bgClass: "bg-blue-500/15" },
  WebSocket: { iconClass: "text-cyan-300", bgClass: "bg-cyan-500/15" },
  "AI/ML": { iconClass: "text-pink-300", bgClass: "bg-pink-500/15" },
  PostgreSQL: { iconClass: "text-indigo-300", bgClass: "bg-indigo-500/15" },
  Prisma: { iconClass: "text-fuchsia-300", bgClass: "bg-fuchsia-500/15" },
  "Express.js": { iconClass: "text-zinc-200", bgClass: "bg-zinc-500/10" },
};

const projects = [
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack MERN Application",
    description:
      "A complete e-commerce solution with role-based access, cart management, order tracking, and Stripe payment integration. Optimized API queries to reduce load time by 30%.",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe", "JWT"],
    highlights: [
      "100+ products with admin panel",
      "30% faster load times",
      "Stripe payment integration",
      "Role-based access control",
    ],
    github: "https://github.com/techvogue/ecommerce",
    live: "https://ecommerce-s4qd.vercel.app",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    ],
  },
  {
    title: "CodeForge",
    subtitle: "Online Judge Platform",
    description:
      "A MERN-based online judge with Docker-based code isolation, real-time compilation, leaderboards, and submission history. Delivers verdicts in under 5 seconds.",
    tech: ["React.js", "Node.js", "Docker", "MongoDB", "WebSocket"],
    highlights: [
      "<5s verdict delivery",
      "Docker containerization",
      "Real-time leaderboards",
      "100+ submissions handled",
    ],
    github: "https://github.com/techvogue/codeJudge",
    live: "https://code-judge-57.vercel.app",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    ],
  },
  {
    title: "Event Feedback SaaS",
    subtitle: "AI-Powered Analytics Platform",
    description:
      "Full-stack SaaS platform for event management with ticketing, customizable feedback forms, and AI-powered feedback summarization. Docker-automated deployment.",
    tech: ["React.js", "Node.js", "AI/ML", "Docker", "PostgreSQL"],
    highlights: [
      "AI feedback summarization",
      "90% analysis effort reduction",
      "Multi-event support",
      "40% faster releases",
    ],
    github: "https://github.com/techvogue/FeedBack",
    live: "https://feed-back-latest.vercel.app/",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    ],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="relative overflow-hidden rounded-xl h-72 sm:h-80 md:h-96 glass shadow-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, imgIndex) => (
        <motion.img
          key={img}
          src={img}
          alt={`${title} screenshot ${imgIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: imgIndex === currentImage ? 1 : 0,
            scale: imgIndex === currentImage ? 1 : 1.1,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"
      />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevImage}
            className="p-1.5 rounded-full glass hover:bg-[rgb(var(--bg)/0.85)] transition-colors"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentImage
                    ? "bg-[rgb(var(--accent))] w-4"
                    : "bg-white/30 hover:bg-white/45 w-2"
                }`}
                aria-label={`Go to image ${i + 1}`}
                type="button"
              />
            ))}
          </div>
          <button
            onClick={nextImage}
            className="p-1.5 rounded-full glass hover:bg-[rgb(var(--bg)/0.85)] transition-colors"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-500"
    >
      <div className="mb-6">
        <span className="font-mono text-sm text-[rgb(var(--accent))]">
          {project.subtitle}
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold mt-1">
          {project.title}
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 order-2 lg:order-1">
          <p className="text-[rgb(var(--fg)/0.72)] leading-relaxed">
            {project.description}
          </p>

          <div>
            <h4 className="text-sm font-medium mb-3">Key Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-[rgb(var(--fg)/0.72)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => {
                const Icon = techIcons[tech] ?? Layers;
                const style = techIconStyle[tech] ?? {
                  iconClass: "text-[rgb(var(--accent))]",
                  bgClass: "bg-[rgb(var(--accent)/0.12)]",
                };
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-[rgb(var(--bg)/0.55)] text-[rgb(var(--fg))] border border-[rgb(var(--fg)/0.12)] hover:border-[rgb(var(--accent)/0.35)] transition-colors"
                  >
                    <span
                      className={`grid place-items-center w-5 h-5 rounded-md ${style.bgClass}`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${style.iconClass}`} />
                    </span>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(var(--bg)/0.55)] hover:bg-[rgb(var(--bg)/0.75)] text-sm transition-colors border border-[rgb(var(--fg)/0.12)]"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(var(--accent)/0.12)] hover:bg-[rgb(var(--accent)/0.18)] text-sm text-[rgb(var(--accent))] transition-colors border border-[rgb(var(--accent)/0.25)]"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <ImageCarousel images={project.images} title={project.title} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section-surface section-tone-white relative overflow-hidden section-padding"
    >
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
      <div aria-hidden className="absolute inset-0 noise-overlay" />

      <div ref={ref} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent))] mb-4 block">
            03 / Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Selected work
          </h2>
          <p className="text-[rgb(var(--fg)/0.7)] mt-4">
            Production-ready applications focused on scalability, performance,
            and user experience.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
