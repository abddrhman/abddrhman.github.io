"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "React / Next.js",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <circle cx="32" cy="32" r="6" fill="currentColor" />
        <path d="M32 8 C20 8 12 16 12 26 C12 32 16 37 22 40 C18 43 16 48 16 52 C22 48 28 46 32 46 C36 46 42 48 48 52 C48 48 46 43 42 40 C48 37 52 32 52 26 C52 16 44 8 32 8Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M22 20 C26 24 30 26 32 26 C34 26 38 24 42 20" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M22 44 C26 40 30 38 32 38 C34 38 38 40 42 44" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="10" y="10" width="44" height="44" stroke="currentColor" strokeWidth="2.5" />
        <path d="M26 38V26h4v12h-4z" fill="currentColor" />
        <path d="M26 30h8m-4 0v8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M34 28v2c0 0 2-1 4-1s3 1 3 3v6" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <text x="16" y="46" fontSize="10" fontWeight="bold" fill="currentColor">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M16 36 C16 26 22 20 30 20 C34 20 36 22 38 24 C40 26 42 28 48 28 C52 28 54 30 54 34" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M16 36 C16 40 20 44 26 44 C30 44 32 42 34 40" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M32 28 C28 28 26 30 24 34" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="14" y="14" width="36" height="36" stroke="currentColor" strokeWidth="2.5" rx="4" />
        <path d="M24 30 L32 22 L40 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 38 L32 30 L40 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "UI / UX Design",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="12" y="16" width="40" height="30" stroke="currentColor" strokeWidth="2.5" rx="3" />
        <line x1="12" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="22" r="2" fill="currentColor" />
        <circle cx="28" cy="22" r="2" fill="currentColor" />
        <circle cx="34" cy="22" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="18" y="10" width="28" height="44" stroke="currentColor" strokeWidth="2.5" rx="14" />
        <line x1="32" y1="10" x2="32" y2="54" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 32L46 32" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M32 8 L52 18 L52 46 L32 56 L12 46 L12 18 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M22 24 L22 40 L28 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M42 24 L42 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M36 24 L36 34 C36 37 38 40 42 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
        <ellipse cx="32" cy="40" rx="18" ry="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M24 30 C24 20 28 14 32 14 C36 14 40 20 40 30" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="32" y1="14" x2="32" y2="56" stroke="currentColor" strokeWidth="2" />
        <line x1="22" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="border-[3px] sm:border-4 border-black shadow-brutal bg-white p-3 sm:p-5 flex flex-col items-center justify-center text-center hover:bg-accent-50 hover:-translate-y-1 transition-all group"
        >
          <div className="text-black group-hover:text-accent-500 transition-colors">
            {skill.icon}
          </div>
          <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wide mt-2 sm:mt-3 leading-tight">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
