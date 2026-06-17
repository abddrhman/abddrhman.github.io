"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

interface Props {
  projects: Project[];
  categories: string[];
}

export default function ProjectFilter({ projects, categories }: Props) {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
        <button
          onClick={() => setActive("all")}
          className={`font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black transition-colors ${
            active === "all"
              ? "bg-black text-white"
              : "bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
          }`}
        >
          all
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-black transition-colors ${
              active === cat
                ? "bg-black text-white"
                : "bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
