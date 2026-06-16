import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "projects",
  description: "A collection of projects by qynn — web apps, design systems, and experimental work.",
};

const projects = [
  {
    title: "Brutal UI Kit",
    description: "A comprehensive design system built on neo-brutalist principles. 60+ components with full accessibility and dark mode.",
    tech: ["React", "TypeScript", "Tailwind", "Storybook"],
    image: "#f43f5e",
    status: "in progress",
    link: "https://github.com",
  },
  {
    title: "Mono Type Foundry",
    description: "A curated collection of monospace typefaces for developers. Features live preview, pairings, and CSS export.",
    tech: ["Next.js", "TypeScript", "Framer"],
    image: "#1a1a1a",
    status: "live",
    link: "https://github.com",
  },
  {
    title: "Grid Garden",
    description: "An interactive CSS Grid learning game. Master grid layouts through playful challenges and real-time feedback.",
    tech: ["React", "CSS Grid", "GSAP"],
    image: "#e11d48",
    status: "live",
    link: "https://github.com",
  },
  {
    title: "Pulse Dashboard",
    description: "Real-time analytics dashboard with brutalist data visualization. Streaming updates and customizable widgets.",
    tech: ["Next.js", "D3.js", "WebSocket"],
    image: "#be123c",
    status: "archived",
    link: "https://github.com",
  },
  {
    title: "Shape of Sound",
    description: "Generative audio visualizer that turns music into geometric art. Built with the Web Audio API and Canvas.",
    tech: ["Canvas", "Web Audio", "TypeScript"],
    image: "#9f1239",
    status: "live",
    link: "https://github.com",
  },
  {
    title: "Color Clash",
    description: "A color palette generator inspired by brutalism. Finds high-contrast, unconventional color harmonies.",
    tech: ["React", "Canvas", "HSL"],
    image: "#881337",
    status: "prototype",
    link: "https://github.com",
  },
];

const filters = ["all", "web app", "design system", "experimental", "open source"];

export default function ProjectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="flex items-center gap-3 sm:gap-4 mb-2">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-black shrink-0" />
        <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-500">
          portfolio
        </span>
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-3 sm:mb-4">
        projects
        <span className="block text-accent-500">i&#39;ve built</span>
      </h1>

      <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black transition-colors ${
              filter === "all"
                ? "bg-black text-white"
                : "bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""} ${
              index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
