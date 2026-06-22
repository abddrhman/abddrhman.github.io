"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActivityCard from "./ActivityCard";
import type { Article } from "@/lib/articles";

interface Props {
  articles: Article[];
  categories: string[];
}

export default function ActivityFilter({ articles: allArticles, categories }: Props) {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? allArticles
    : allArticles.filter((a) => a.category === active);

  const total = filtered.length;

  function getSpan(index: number): string {
    if (total === 2) return "";
    if (total === 1 || index % 3 === 0) return "md:col-span-2";
    return "";
  }

  return (
    <>
      <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
        <button
          onClick={() => setActive("all")}
          className={`font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-[var(--border-color)] transition-colors ${
            active === "all"
              ? "bg-black dark:bg-gray-900 text-white"
              : "bg-[var(--bg-secondary)] hover:bg-accent-500 hover:text-white hover:border-accent-500 text-[var(--text-primary)]"
          }`}
        >
          all posts
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 border-2 border-[var(--border-color)] transition-colors ${
              active === cat
                ? "bg-black dark:bg-gray-900 text-white"
                : "bg-[var(--bg-secondary)] hover:bg-accent-500 hover:text-white hover:border-accent-500 text-[var(--text-primary)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((article, index) => (
            <motion.div
              key={article.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={getSpan(index)}
            >
              <ActivityCard {...article} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
