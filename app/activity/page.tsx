import type { Metadata } from "next";
import { articles, getArticleCategories } from "@/lib/articles";
import ActivityFilter from "@/components/activity/ActivityFilter";

export const metadata: Metadata = {
  title: "activity",
  description: "Articles, talks, and thoughts from qynn.",
};

const categories = getArticleCategories();

export default function ActivityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="flex items-center gap-3 sm:gap-4 mb-2">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-[var(--border-color)] shrink-0" />
        <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-[var(--text-muted)]">
          journal
        </span>
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-3 sm:mb-4 text-[var(--text-primary)]">
        activity
        <span className="block text-accent-500">log</span>
      </h1>

      <ActivityFilter articles={articles} categories={categories} />
    </div>
  );
}
