"use client";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

const contacts: Array<{
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  copyValue: string;
}> = [
  {
    icon: <EmailRoundedIcon sx={{ fontSize: 22, color: "#EA4335" }} />,
    label: "Email",
    value: "vishwagautam57@gmail.com",
    href: "mailto:vishwagautam57@gmail.com",
    copyValue: "vishwagautam57@gmail.com",
  },
  {
    icon: (
      <GitHubIcon
        sx={{ fontSize: 22 }}
        className="text-black dark:text-gray-200"
      />
    ),
    label: "GitHub",
    value: "@techvogue",
    href: "https://github.com/techvogue",
    copyValue: "https://github.com/techvogue",
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 22, color: "#0A66C2" }} />,
    label: "LinkedIn",
    value: "Kumar Gautam",
    href: "https://www.linkedin.com/in/kumar-gautam-7b331b287",
    copyValue: "https://www.linkedin.com/in/kumar-gautam-7b331b287",
  },
  {
    icon: <LocalPhoneRoundedIcon sx={{ fontSize: 22, color: "#22C55E" }} />,
    label: "Phone",
    value: "+91 8789034782",
    href: "tel:+918789034782",
    copyValue: "+91 8789034782",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (
    text: string,
    index: number,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[85vh] section-surface section-tone-green section-padding overflow-hidden"
    >
      {/* Background grid */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36rem h-24rem
        bg-[rgb(var(--accent)/0.10)] rounded-full blur-3xl"
      />

      <div ref={ref} className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-sm text-[rgb(var(--accent))] block mb-4">
            06 / Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-4 max-w-xl text-[rgb(var(--fg)/0.72)]">
            Open to full-time opportunities, internships, and interesting
            projects. Prefer async communication but always happy to discuss
            ideas.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => {
            const isExternal = contact.href.startsWith("http");

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl gradient-card border
                border-[rgb(var(--fg)/0.12)]
                hover:border-[rgb(var(--accent)/0.35)]
                transition-all duration-300 hover:shadow-glow"
              >
                <a
                  href={contact.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <div className="flex items-center justify-between mb-4">
                   <div
  className="
    p-2 rounded-lg
    bg-black
    dark:bg-gray-800
    border border-black/20 dark:border-gray-700
    group-hover:border-[rgb(var(--accent)/0.25)]
    transition-colors
  "
>
  {contact.icon}
</div>

                    <ArrowUpRight className="w-4 h-4 text-[rgb(var(--fg)/0.65)] group-hover:text-[rgb(var(--accent))]" />
                  </div>

                  <p className="text-sm text-[rgb(var(--fg)/0.65)] mb-1">
                    {contact.label}
                  </p>
                  <p className="font-medium mb-4 wrap-break group-hover:text-[rgb(var(--accent))]">
                    {contact.value}
                  </p>
                </a>

                {/* Copy button */}
                <button
                  onClick={(e) =>
                    handleCopy(contact.copyValue, index, e)
                  }
                  className="w-full flex items-center justify-center gap-2 p-2
                  rounded-lg text-sm transition-all duration-200
                  bg-[rgb(var(--bg)/0.75)]
                  border border-[rgb(var(--fg)/0.10)]
                  hover:bg-[rgb(var(--accent)/0.15)]
                  hover:border-[rgb(var(--accent)/0.35)]
                  text-[rgb(var(--fg)/0.65)]
                  hover:text-[rgb(var(--accent))]"
                  aria-label={`Copy ${contact.label}`}
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-12 border-t border-[rgb(var(--fg)/0.12)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-[rgb(var(--fg)/0.72)]">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              <span>Patna, Bihar, India</span>
            </div>
            <span>Currently studying at IIIT Manipur</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
