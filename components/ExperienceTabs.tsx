"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline from "./Timeline";

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

interface ExperienceTabsProps {
  education: TimelineItem[];
  experience: TimelineItem[];
}

export default function ExperienceTabs({ education, experience }: ExperienceTabsProps) {
  const [active, setActive] = useState<"education" | "experience">("education");

  return (
    <div className="border-[3px] sm:border-4 border-black shadow-brutal bg-white p-5 sm:p-8">
      <div className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6 border-b-2 border-black pb-0">
        <button
          onClick={() => setActive("education")}
          className={`font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-3 border-2 border-black -mb-[2px] transition-colors ${
            active === "education"
              ? "bg-accent-500 text-white border-accent-500"
              : "bg-white text-black hover:bg-accent-100"
          }`}
        >
          education
        </button>
        <button
          onClick={() => setActive("experience")}
          className={`font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-3 border-2 border-black -mb-[2px] transition-colors ${
            active === "experience"
              ? "bg-accent-500 text-white border-accent-500"
              : "bg-white text-black hover:bg-accent-100"
          }`}
        >
          experience
        </button>
        <div className="flex-1 border-b-2 border-black" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {active === "education" ? (
            <Timeline items={education} />
          ) : (
            <Timeline items={experience} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
