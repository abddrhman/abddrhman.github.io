"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-5"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-display font-bold text-base uppercase tracking-wide">
          {name}
        </span>
        <span className="font-display font-bold text-lg text-accent-500 border-2 border-black w-10 h-10 flex items-center justify-center bg-white shadow-brutal">
          {level}
        </span>
      </div>
      <div className="relative h-7 border-2 border-black bg-white shadow-brutal">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-accent-500 flex items-center justify-end px-2"
          style={{ width: `${level}%` }}
        >
          <span className="font-display font-bold text-xs text-white" />
        </motion.div>
        <div className="absolute inset-0 border-r-2 border-black" style={{ width: `${level}%` }} />
      </div>
    </motion.div>
  );
}
