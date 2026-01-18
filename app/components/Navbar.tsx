"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] =
    useState<(typeof navLinks)[number]["href"]>("#home");

  /* ---------- Scroll ---------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Active Link (IntersectionObserver) ---------- */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1)).filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const setFromHash = () => {
      const hash = window.location.hash as (typeof navLinks)[number]["href"];
      if (navLinks.some((l) => l.href === hash)) setActiveHref(hash);
    };
    setFromHash();

    const updateActiveFromScroll = () => {
      // Probe point: slightly above center tends to feel better with sticky nav.
      const probeY = window.innerHeight * 0.4;

      let bestId: string | null = null;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          bestId = section.id;
          break;
        }
      }

      // If we're between sections (rare), fallback to the last section above probe.
      if (!bestId) {
        let lastAbove: HTMLElement | null = null;
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= probeY) lastAbove = section;
        }
        bestId = lastAbove?.id ?? sections[0]?.id ?? null;
      }

      if (bestId) {
        setActiveHref(`#${bestId}` as (typeof navLinks)[number]["href"]);
      }
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        updateActiveFromScroll();
      });
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", () => {
      setFromHash();
      window.setTimeout(updateActiveFromScroll, 250);
    });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", setFromHash);
    };
  }, []);

  const desktopLinkClass = (href: (typeof navLinks)[number]["href"]) => {
    const isActive = href === activeHref;
    return [
      "text-sm transition-all duration-200",
      "px-3 py-1.5 rounded-full border",
      isActive
        ? "text-emerald-50 bg-emerald-500/10 border-emerald-400/25 shadow-[0_8px_22px_rgba(0,0,0,0.22)] shadow-emerald-500/10"
        : "text-gray-300 border-transparent hover:text-white hover:bg-white/5",
    ].join(" ");
  };

  const mobileLinkClass = (href: (typeof navLinks)[number]["href"]) => {
    const isActive = href === activeHref;
    return [
      "text-2xl font-light transition-colors",
      isActive ? "text-emerald-200 drop-shadow-[0_0_14px_rgba(16,185,129,0.35)]" : "text-white",
    ].join(" ");
  };

  /* ---------- Theme ---------- */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const dark = stored === "dark" || (!stored && prefersDark);

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed inset-x-0 top-0  z-50 transition-all duration-300 pt-5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* GLASS CONTAINER */}
            <div
              className="
    relative
    rounded-full px-6 py-4
    flex items-center justify-between
    transition-all duration-300

   bg-linear-to-b from-[rgba(15,16,20,0.55)] to-[rgba(8,9,12,0.45)]

    backdrop-blur-xl backdrop-saturate-150
    border border-white/10
    shadow-[0_8px_25px_rgba(0,0,0,0.35)]
  "
            >
              {/* Contrast-killing veil */}
              <div
                aria-hidden
                className="
    absolute inset-0 rounded-full
    pointer-events-none
   bg-linear-to-b from-white/5 to-black/10
  "
              />

              {/* CONTENT */}
              <div className="relative z-10 flex items-center justify-between w-full px-3">
                {/* Logo */}
                <a href="#home" className="font-mono text-md font-medium">
                  Gautam<span className="text-emerald-400  ">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={desktopLinkClass(link.href)}
                      onClick={() => setActiveHref(link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="p-2 rounded-full hover:bg-white/10 transition"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isDark ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun className="w-5 h-5 text-orange-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon className="w-5 h-5 text-gray-300" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setIsMobileMenuOpen((v) => !v)}
                    className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-4 h-4 text-white" />
                    ) : (
                      <Menu className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-24 md:hidden"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
            <div className="relative container-custom">
              <div className="flex flex-col gap-6 py-8 justify-center items-center">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => {
                      setActiveHref(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={mobileLinkClass(link.href)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
