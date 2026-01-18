"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-full px-24 pb-12 pt-6">
      <div
        className="
          flex flex-col gap-6
          border-t border-white/10
          pt-8
          sm:flex-row sm:items-center sm:justify-between
        "
      >
        {/* Left */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Kumar Gautam
        </p>

        {/* Center (optional message) */}
        <p className="text-sm opacity-80">
          Built with ❤️  and care.
        </p>

        {/* Right */}
        <div className="flex items-center gap-8 opacity-70">
          <a
            href="mailto:vishwagautam57gmail.com"
            aria-label="Email"
            className="hover:opacity-100 transition"
          >
            <MailIcon fontSize="small" />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            aria-label="GitHub"
            className="hover:opacity-100 transition"
          >
            <GitHubIcon fontSize="small" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:opacity-100 transition"
          >
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
      </div>
    </footer>
  );
}
