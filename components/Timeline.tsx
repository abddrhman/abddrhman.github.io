"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-black -translate-x-1/2" />

      <div className="space-y-6 md:space-y-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`hidden md:flex flex-row items-start gap-6 ${
                isLeft ? "" : "flex-row-reverse"
              }`}>
                <div className={`w-[calc(50%-1.5rem)] ${isLeft ? "text-right" : "text-left"}`}>
                  <div className={`border-[3px] md:border-4 border-black shadow-brutal bg-white p-4 md:p-5 ${
                    isLeft ? "md:-mr-2" : "md:-ml-2"
                  }`}>
                    <span className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-accent-500 leading-none block -mt-1 md:-mt-2">
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-sm md:text-base uppercase tracking-tight mt-1.5 md:mt-2">
                      {item.title}
                    </h3>
                    <p className="font-body font-semibold text-xs md:text-sm text-accent-600 mt-1">
                      {item.institution}
                    </p>
                    <p className="font-body text-xs md:text-sm text-gray-600 mt-1.5 md:mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center shrink-0 relative pt-1">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-accent-500 border-2 border-black rotate-45 z-10" />
                  <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-accent-200 border-2 border-black rotate-45 -z-0 animate-pulse" />
                </div>

                <div className="w-[calc(50%-1.5rem)]" />
              </div>

              <div className="md:hidden relative pl-7">
                <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-black" />
                <div className="absolute left-[-14px] top-1.5">
                  <div className="w-3.5 h-3.5 bg-accent-500 border-2 border-black rotate-45" />
                </div>
                <div className="border-[3px] border-black shadow-brutal bg-white p-3.5">
                  <span className="font-display font-bold text-2xl text-accent-500 leading-none block">
                    {item.year}
                  </span>
                  <h3 className="font-display font-bold text-sm uppercase tracking-tight mt-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body font-semibold text-xs text-accent-600 mt-0.5">
                    {item.institution}
                  </p>
                  <p className="font-body text-xs text-gray-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
