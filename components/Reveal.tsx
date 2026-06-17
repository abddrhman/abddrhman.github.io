"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "up" | "down";
  className?: string;
}

export default function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const dir = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return (
    <motion.div
      initial={{ ...dir[from], opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 14,
        mass: 0.7,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BrutalHover({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotate: -0.5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ShakeButton({ children, className, ...props }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <motion.a
      whileHover={{ rotate: [0, -3, 3, -2, 2, 0] }}
      transition={{ duration: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
