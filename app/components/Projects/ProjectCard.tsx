import ImageSlider from "./ImageSlider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  images,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div
      className="
        rounded-2xl p-6
        bg-white/10 dark:bg-black/30
        backdrop-blur-md
        border border-white/15
        space-y-4
      "
    >
      <ImageSlider images={images} />

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-sm opacity-75 max-w-2xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs opacity-80">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded-md bg-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-2 text-sm">
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-1 hover:opacity-80"
        >
          <GitHubIcon fontSize="small" /> Code
        </a>
        <a
          href={live}
          target="_blank"
          className="flex items-center gap-1 hover:opacity-80"
        >
          <LaunchIcon fontSize="small" /> Live
        </a>
      </div>
    </div>
  );
}
