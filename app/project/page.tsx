import type { Metadata } from "next";
import { projects, getCategories } from "@/lib/projects";
import ProjectFilter from "@/components/project/ProjectFilter";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects by qynn — web apps, design systems, and experimental work.",
};

const categories = getCategories();

export default function ProjectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="flex items-center gap-3 sm:gap-4 mb-2">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-[var(--border-color)] shrink-0" />
        <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-[var(--text-muted)]">
          portfolio
        </span>
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-3 sm:mb-4 text-[var(--text-primary)]">
        projects
        <span className="block text-accent-500">i&#39;ve built</span>
      </h1>

      <ProjectFilter projects={projects} categories={categories} />
    </div>
  );
}
