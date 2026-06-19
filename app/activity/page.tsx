import type { Metadata } from "next";
import ActivityCard from "@/components/ActivityCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "activity",
  description: "Articles, talks, and thoughts from qynn.",
};

export default function ActivityPage() {
  const total = articles.length;

  function getSpan(index: number): string {
    if (total === 2) return "";
    if (total === 1 || index % 3 === 0) return "md:col-span-2";
    return "";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="flex items-center gap-3 sm:gap-4 mb-2">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-black shrink-0" />
        <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-500">
          journal
        </span>
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter mb-3 sm:mb-4">
        activity
        <span className="block text-accent-500">log</span>
      </h1>

      <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
        <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2">
          all posts
        </span>
        <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors cursor-pointer">
          design
        </span>
        <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors cursor-pointer">
          code
        </span>
        <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors cursor-pointer">
          personal
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {articles.map((article, index) => (
          <div key={article.slug} className={getSpan(index)}>
            <ActivityCard {...article} />
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <button className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-6 py-3 sm:px-8 sm:py-4 border-2 border-black hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal">
          load more posts
        </button>
      </div>
    </div>
  );
}
