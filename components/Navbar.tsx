"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/activity", label: "Activity" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)] border-b-4 border-[var(--border-color)] shadow-brutal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/My Logo Gwej 1.png"
                alt="qynn logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl uppercase tracking-tight group-hover:text-accent-500 transition-colors text-[var(--text-primary)]">
              HSN
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-bold text-base uppercase tracking-wide relative group text-[var(--text-primary)]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent-500 group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-10 h-10 border-2 border-[var(--border-color)] flex items-center justify-center bg-[var(--bg-secondary)] hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors shadow-brutal"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-12 h-12 border-2 border-[var(--border-color)] flex flex-col items-center justify-center gap-1.5 bg-[var(--bg-secondary)] hover:bg-accent-500 hover:border-accent-500 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-[var(--text-primary)] block"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-[var(--text-primary)] block"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-[var(--text-primary)] block"
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t-4 border-[var(--border-color)] overflow-hidden bg-[var(--bg-primary)]"
          >
            <div className="px-4 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight border-b-2 border-[var(--border-color)] pb-2 hover:text-accent-500 hover:border-accent-500 transition-colors text-[var(--text-primary)]"
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
