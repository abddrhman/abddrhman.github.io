"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

interface Props {
  article: Article;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ActivityDetailContent({ article }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
    >
      <motion.div variants={item}>
        <Link
          href="/activity"
          className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-black px-3 py-2 sm:px-4 sm:py-2 bg-white hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors shadow-brutal mb-6 sm:mb-8 group"
        >
          <svg width="14" height="14" className="sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          back to activity
        </Link>
      </motion.div>

      <motion.div variants={item} className="border-[3px] sm:border-4 border-black bg-white shadow-brutal overflow-hidden">
        <motion.div
          variants={item}
          className="h-48 sm:h-80 lg:h-96 relative border-b-[3px] sm:border-b-4 border-black bg-black"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
          />
        </motion.div>

        <div className="p-4 sm:p-8 lg:p-10">
          <motion.div variants={item} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black text-white px-2 py-1 sm:px-3 sm:py-1.5">
              {article.category}
            </span>
            <span className="font-body text-xs sm:text-sm font-medium text-gray-500">
              {article.date}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tighter mb-2"
          >
            {article.title}
          </motion.h1>

          <motion.div variants={item} className="w-10 sm:w-16 h-1 sm:h-1.5 bg-accent-500 my-4 sm:my-6" />

          <motion.p
            variants={item}
            className="font-body text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 border-l-[3px] sm:border-l-4 border-accent-500 pl-3 sm:pl-4 italic"
          >
            {article.excerpt}
          </motion.p>

          <motion.div variants={item} className="space-y-4 sm:space-y-6">
            {article.content.map((paragraph, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex gap-2 sm:gap-4"
              >
                <span className="font-display font-bold text-accent-500 text-[10px] sm:text-sm shrink-0 mt-0.5 sm:mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm sm:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-6 sm:mt-8 text-center">
        <Link
          href="/activity"
          className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-6 py-3 sm:px-8 sm:py-4 border-2 border-black hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal"
        >
          <svg width="14" height="14" className="sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          back to all articles
        </Link>
      </motion.div>
    </motion.div>
  );
}
