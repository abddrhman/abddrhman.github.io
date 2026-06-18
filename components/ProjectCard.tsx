"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  category,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="block group"
    >
      <Link href={`/project/${slug}`} className="block">
        <div className="border-4 border-black shadow-brutal bg-white hover:shadow-brutal-hover transition-shadow duration-200">
          <div className="relative overflow-hidden border-b-4 border-black">
            <div className="bg-gray-200 relative">
              {image.startsWith("/") ? (
                <Image
                  src={image}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-[16/10]" style={{ backgroundColor: image }} />
              )}
              {!image.startsWith("/") && (
                <span className="absolute inset-0 z-10 flex items-center justify-center font-display font-bold text-white text-lg uppercase tracking-wide opacity-80">
                  {title.split(" ")[0]}
                </span>
              )}
              {!image.startsWith("/") && <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />}
            </div>

            <div className="absolute top-3 right-3">
              <span className="bg-black text-white font-display font-bold text-xs uppercase tracking-wider px-3 py-1.5">
                {category}
              </span>
            </div>

            <div className="absolute top-3 left-3 w-8 h-8 bg-accent-500 border-2 border-black flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-display font-bold text-xl uppercase tracking-tight group-hover:text-accent-500 transition-colors">
              {title}
            </h3>
            <p className="font-body text-sm mt-2 text-gray-600 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="font-display font-bold text-xs uppercase tracking-wider px-3 py-1.5 border-2 border-black bg-accent-100 text-accent-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
