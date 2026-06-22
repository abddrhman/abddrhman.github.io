"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const galleryItem = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ProjectDetailContent({ project }: Props) {
  const searchParams = useSearchParams();
  const fromProject = searchParams?.get("from") === "project";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
    >
      {!fromProject && (
        <motion.div variants={item}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-[var(--border-color)] px-3 py-2 sm:px-4 sm:py-2 bg-[var(--bg-secondary)] hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors shadow-brutal mb-6 sm:mb-8 group"
          >
            <svg width="14" height="14" className="sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            back
          </Link>
        </motion.div>
      )}

      <motion.div
        variants={item}
        className="border-[3px] sm:border-4 border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-brutal overflow-hidden transition-colors duration-300"
      >
        <div className="p-4 sm:p-8 lg:p-10">
          <motion.div variants={item} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-black dark:bg-gray-900 text-white px-2 py-1 sm:px-3 sm:py-1.5">
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-2xl sm:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tighter mb-2 text-[var(--text-primary)]"
          >
            {project.title}
          </motion.h1>

          <motion.div variants={item} className="w-10 sm:w-16 h-1 sm:h-1.5 bg-accent-500 my-4 sm:my-6" />

          <motion.p
            variants={item}
            className="font-body text-sm sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6 border-l-[3px] sm:border-l-4 border-accent-500 pl-3 sm:pl-4"
          >
            {project.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1.5 sm:px-3 sm:py-2 border-2 border-[var(--border-color)] bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-300"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            {project.details.map((paragraph, i) => (
              <div key={i} className="flex gap-2 sm:gap-4">
                <span className="font-display font-bold text-accent-500 text-[10px] sm:text-sm shrink-0 mt-0.5 sm:mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm sm:text-base text-[var(--text-primary)] leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </motion.div>

          {project.images.length > 0 && (
            <motion.div variants={item}>
              <motion.div
                variants={item}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-accent-500 border border-[var(--border-color)] shrink-0" />
                <h2 className="font-display font-bold text-sm sm:text-xl uppercase tracking-tight text-[var(--text-primary)]">
                  gallery
                </h2>
                <div className="flex-1 h-0.5 sm:h-0.5 bg-[var(--border-color)]" />
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
              >
                {/* Mobile: single column stack */}
                <div className="sm:hidden space-y-3 sm:space-y-4">
                  {project.images.map((img, i) => (
                    <motion.div
                      key={i}
                      variants={galleryItem}
                      className="border-[3px] sm:border-4 border-black shadow-brutal overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - image ${i + 1}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Desktop: first image full-width, rest masonry */}
                <div className="hidden sm:block">
                  {project.images.length > 0 && (
                    <motion.div
                      variants={galleryItem}
                      className="border-[3px] sm:border-4 border-black shadow-brutal overflow-hidden mb-3 sm:mb-4"
                    >
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - image 1`}
                        width={0}
                        height={0}
                        sizes="(max-width: 1024px) 90vw, 1200px"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  )}
                  {project.images.length > 1 && (
                    <div className="columns-2 gap-3 sm:gap-4">
                      {project.images.slice(1).map((img, i) => (
                        <motion.div
                          key={i}
                          variants={galleryItem}
                          className="border-[3px] sm:border-4 border-black shadow-brutal overflow-hidden break-inside-avoid mb-3 sm:mb-4"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} - image ${i + 2}`}
                            width={0}
                            height={0}
                            sizes="50vw"
                            className="w-full h-auto"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-6 sm:mt-8 text-center">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black dark:bg-gray-900 text-white px-6 py-3 sm:px-8 sm:py-4 border-2 border-[var(--border-color)] hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal group"
        >
          {fromProject ? (
            <>
              <svg width="14" height="14" className="sm:w-4 sm:h-4 shrink-0 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              back
            </>
          ) : (
            <>
              see another project?
              <svg width="14" height="14" className="sm:w-4 sm:h-4 shrink-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </>
          )}
        </Link>
      </motion.div>
    </motion.div>
  );
}
