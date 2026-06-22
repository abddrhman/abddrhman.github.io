"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ActivityCardProps {
  date: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
}

export default function ActivityCard({
  date,
  title,
  excerpt,
  category,
  slug,
}: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/activity/${slug}`} className="block group">
        <div className="border-4 border-black shadow-brutal bg-white hover:shadow-brutal-hover transition-shadow duration-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-accent-500 border-l-4 border-b-4 border-black flex items-center justify-center">
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5">
                {category}
              </span>
              <span className="font-body text-xs sm:text-sm font-medium text-gray-500">
                {date}
              </span>
            </div>

            <h3 className="font-display font-bold text-lg sm:text-2xl uppercase tracking-tight group-hover:text-accent-500 transition-colors">
              {title}
            </h3>

            <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-accent-500 my-2 sm:my-3" />

            <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed">
              {excerpt}
            </p>

            <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wide text-accent-600 group-hover:gap-2 sm:group-hover:gap-3 transition-all">
              <span>read more</span>
              <svg width="14" height="14" className="sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
