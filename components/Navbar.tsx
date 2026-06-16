"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/activity", label: "Activity" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f5f0] border-b-4 border-black shadow-brutal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent-500 border-2 border-black flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">Q</span>
            </div>
            <span className="font-display font-bold text-xl uppercase tracking-tight group-hover:text-accent-500 transition-colors">
              qynn
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-bold text-base uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent-500 group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-12 h-12 border-2 border-black flex flex-col items-center justify-center gap-1.5 bg-white hover:bg-accent-500 hover:border-accent-500 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-black block"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-black block"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-black block"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t-4 border-black overflow-hidden bg-[#f8f5f0]"
          >
            <div className="px-4 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-black pb-2 hover:text-accent-500 hover:border-accent-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
