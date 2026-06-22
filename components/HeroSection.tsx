"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function TypewriterStatic() {
  const staticPart = "Software";
  const dynamicPart = " Engineering Student";
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "done" | "erasing" | "waiting">("typing");
  const idxRef = useRef(0);
  const cursor = phase === "typing" || phase === "erasing";

  useEffect(() => {
    if (phase === "typing") {
      idxRef.current = 0;
      const interval = setInterval(() => {
        idxRef.current++;
        setDisplayed(dynamicPart.slice(0, idxRef.current));
        if (idxRef.current >= dynamicPart.length) {
          clearInterval(interval);
          setPhase("done");
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "done") {
      const t = setTimeout(() => setPhase("erasing"), 3000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "erasing") {
      idxRef.current = dynamicPart.length;
      const interval = setInterval(() => {
        idxRef.current--;
        if (idxRef.current <= 0) {
          clearInterval(interval);
          setDisplayed("");
          setPhase("waiting");
        } else {
          setDisplayed(dynamicPart.slice(0, idxRef.current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("typing"), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <span>
      {staticPart}
      {displayed}
      {cursor && <span className="inline-block w-[0.6em] h-[1.1em] bg-white ml-0.5 animate-pulse align-middle" />}
    </span>
  );
}

function TypewriterLoop({ text, hold = 3000, cursorColor = "bg-black" }: { text: string; hold?: number; cursorColor?: string }) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "done" | "erasing" | "waiting">("typing");
  const idxRef = useRef(0);
  const cursor = phase === "typing" || phase === "erasing";

  useEffect(() => {
    if (phase === "typing") {
      idxRef.current = 0;
      const interval = setInterval(() => {
        idxRef.current++;
        setDisplayed(text.slice(0, idxRef.current));
        if (idxRef.current >= text.length) {
          clearInterval(interval);
          setPhase("done");
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [phase, text]);

  useEffect(() => {
    if (phase === "done") {
      const t = setTimeout(() => setPhase("erasing"), hold);
      return () => clearTimeout(t);
    }
  }, [phase, hold]);

  useEffect(() => {
    if (phase === "erasing") {
      idxRef.current = text.length;
      const interval = setInterval(() => {
        idxRef.current--;
        if (idxRef.current <= 0) {
          clearInterval(interval);
          setDisplayed("");
          setPhase("waiting");
        } else {
          setDisplayed(text.slice(0, idxRef.current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [phase, text]);

  useEffect(() => {
    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("typing"), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <span>
      {displayed}
      {cursor && <span className={`inline-block w-[0.6em] h-[1.1em] ml-0.5 animate-pulse align-middle ${cursorColor}`} />}
    </span>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abddrhman",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hsnabdrrhman/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/durr.hs/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

const profileImages = ["/profile1.jpeg", "/profile2.jpg", "/profile3.png"];

const stackPos = (i: number) => [
  { x: 0, y: 0, scale: 1, rotate: -2, z: 30 },
  { x: 14, y: 14, scale: 0.82, rotate: 0, z: 20 },
  { x: 28, y: 28, scale: 0.64, rotate: 5, z: 10 },
][i];

export default function HeroSection() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [shaking, setShaking] = useState(false);

  const goNext = useCallback(() => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
    setOrder((prev) => {
      const [front, ...rest] = prev;
      return [...rest, front];
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative inline-block">
              <div className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-accent-300 via-accent-500 to-accent-600 rounded-full blur-3xl opacity-60 animate-pulse" />
                <div className="absolute -inset-3 sm:-inset-4 bg-accent-200 rounded-full blur-2xl opacity-40" />
                <motion.div
                  onClick={goNext}
                  className="relative w-full h-full cursor-pointer"
                  animate={shaking ? {
                    x: [0, -4, 4, -3, 3, -1, 1, 0],
                    rotate: [0, -2, 2, -1, 1, 0],
                  } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {order.map((imgIdx, stackIdx) => {
                    const target = stackPos(stackIdx);
                    return (
                      <motion.div
                        key={imgIdx}
                        animate={{
                          x: target.x,
                          y: target.y,
                          scale: target.scale,
                          rotate: target.rotate,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 10,
                          mass: 0.6,
                          velocity: 8,
                        }}
                        className="absolute inset-0 border-[3px] sm:border-4 border-black overflow-hidden"
                        style={{ zIndex: target.z, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
                      >
                        <Image
                          src={profileImages[imgIdx]}
                          alt="Profile"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 144px, (max-width: 768px) 224px, 256px"
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-[calc(100%-8px)] h-[calc(100%-8px)] border-[3px] sm:border-4 border-[var(--border-color)] bg-[var(--bg-primary)] -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-[var(--text-primary)] -ml-1">
              Hasan
              <span className="block text-accent-500">.</span>
            </h1>

            <div className="mt-3 sm:mt-4 relative inline-block">
              <span className="font-display font-bold text-sm sm:text-2xl md:text-3xl uppercase tracking-wide bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 inline-block min-w-[4ch]">
                <TypewriterStatic />
              </span>
              <span className="absolute -bottom-1 left-2 w-full h-0.5 sm:h-1 bg-accent-500" />
            </div>

            <p className="mt-4 sm:mt-6 font-body text-base sm:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed">
Hi there! I'm Hasan, a student at Batam State Polytechnic with a passion for technology, gaming, and football.            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[var(--border-color)] flex items-center justify-center bg-[var(--bg-secondary)] hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-colors shadow-brutal"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-20 lg:mt-24"
        >
          <div className="border-[3px] sm:border-4 border-[var(--border-color)] shadow-brutal bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-300">
            <div className="h-1.5 sm:h-2 bg-accent-500 w-full" />
            <div className="p-4 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-[var(--border-color)] shrink-0" />
                <h2 className="font-display font-bold text-base sm:text-2xl uppercase tracking-tight text-[var(--text-primary)]">
                  what i&apos;m doing now
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                <div className="border-2 border-[var(--border-color)] p-3 sm:p-4 bg-[var(--bg-tertiary)]">
                  <span className="font-display font-bold text-xs sm:text-sm uppercase text-accent-600">project</span>
                  <p className="font-body font-semibold text-sm sm:text-base mt-1 text-[var(--text-primary)]">
                    <TypewriterLoop text="Development of an Internet of Things-Based Smart Glove as a Sign Language-to-Speech Translator" hold={10000} />
                  </p>
                </div>
                <div className="border-2 border-[var(--border-color)] p-3 sm:p-4 bg-[var(--bg-secondary)]">
                  <span className="font-display font-bold text-xs sm:text-sm uppercase text-accent-600">academic</span>
                  <p className="font-body font-semibold text-sm sm:text-base mt-1 text-[var(--text-primary)]">
                    <TypewriterLoop text="A fourth-semester Software Engineering student." hold={10000} />
                  </p>
                </div>
                <div className="border-2 border-[var(--border-color)] p-3 sm:p-4 bg-[var(--bg-tertiary)]">
                  <span className="font-display font-bold text-xs sm:text-sm uppercase text-accent-600">organization</span>
                  <p className="font-body font-semibold text-sm sm:text-base mt-1 text-[var(--text-primary)]">
                    <TypewriterLoop text={'Head of Media and Communication Division at the Information Technology Student Association of Batam State Polytechnic'} hold={10000} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
