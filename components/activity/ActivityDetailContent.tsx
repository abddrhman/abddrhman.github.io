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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
    >


      <motion.div variants={item} className="border-[3px] sm:border-4 border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-brutal overflow-hidden transition-colors duration-300">
        <motion.div
          variants={item}
          className="border-b-[3px] sm:border-b-4 border-[var(--border-color)] bg-black dark:bg-gray-900"
        >
          <Image
            src={article.image}
            alt={article.title}
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="p-4 sm:p-8 lg:p-10">
          <motion.div variants={item} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black dark:bg-gray-900 text-white px-2 py-1 sm:px-3 sm:py-1.5">
              {article.category}
            </span>
            <span className="font-body text-xs sm:text-sm font-medium text-[var(--text-muted)]">
              {article.date}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tighter mb-2 text-[var(--text-primary)]"
          >
            {article.title}
          </motion.h1>

          <motion.div variants={item} className="w-10 sm:w-16 h-1 sm:h-1.5 bg-accent-500 my-4 sm:my-6" />

          <motion.p
            variants={item}
            className="font-body text-sm sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 border-l-[3px] sm:border-l-4 border-accent-500 pl-3 sm:pl-4 italic"
          >
            {article.excerpt}
          </motion.p>

          <motion.div variants={item} className="space-y-4 sm:space-y-6">
            {(() => {
              let textIndex = 0;
              return article.content.map((block, i) => {
                if (block.type === "text") {
                  textIndex++;
                  return (
                    <motion.div
                      key={i}
                      variants={item}
                      className="flex gap-2 sm:gap-4"
                    >
                      <span className="font-display font-bold text-accent-500 text-[10px] sm:text-sm shrink-0 mt-0.5 sm:mt-1">
                        {String(textIndex).padStart(2, "0")}
                      </span>
                      <p className="font-body text-sm sm:text-lg text-[var(--text-primary)] leading-relaxed">
                        {block.body}
                      </p>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={i}
                    variants={item}
                    className="border-[3px] sm:border-4 border-[var(--border-color)] shadow-brutal overflow-hidden"
                  >
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
                      className="w-full h-auto"
                    />
                  </motion.div>
                );
              });
            })()}
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-6 sm:mt-8 text-center">
        <Link
          href="/activity"
          className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black dark:bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 border-2 border-[var(--border-color)] hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal group"
        >
          <svg width="14" height="14" className="sm:w-4 sm:h-4 shrink-0 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          back
        </Link>
      </motion.div>
    </motion.div>
  );
}
