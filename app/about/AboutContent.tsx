"use client";

import ExperienceTabs from "@/components/ExperienceTabs";
import SkillsGrid from "@/components/SkillsGrid";
import Reveal, { BrutalHover } from "@/components/Reveal";

const educationData = [

  {
    year: "2024 - present",
    title: "software engineering",
    institution: "Polytechnic State of Batam",
    description: "",
  },
  {
    year: "2021 - 2024",
    title: "Senior high school",
    institution: "SMA NEGERI 26 BATAM",
    description: "",
  },
  {
    year: "2018 - 2021",
    title: "junior high school",
    institution: "SMP Muhammadiyah Plus Batam (KDA)",
    description: "",
  },
];

const experienceData = [

  {
    year: "2026",
    month: "feb - present",
    title: "Head of the Media and Communication Division,",
    institution: "Information Technology Student Association, Batam State Polytechnic",
    description: "",

  },

  {
    year: "2025",
    month: "oct - dec",
    title: "Production Team PIC, Press and Information Division",
    institution: "Information Technology Student Association, Batam State Polytechnic",
    description: "",
  },
  {
    year: "2024 - 2025",
    month: "nov - feb",
    title: "Data Labeler & Data Annotator ",
    institution: "CV. JS PRATAMA MANDIRI",
    description: "",
  },
  {
    year: "2024",
    month: "mei - jun",
    title: "Kitchen & Waiter",
    institution: "Bakso & Bakmie Sri Ayu Legenda",
    description: "",
  },
];

const skillsData = [
  "React / Next.js", "JavaScript", "Tailwind CSS", "Figma",
  "Laravel", "PHP", "Python", "MySQL", "Flutter", "CloudFlare", "Pytorch", "Docker", "Git", "GitHub",
];

export default function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <Reveal from="left">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-black shrink-0" />
          <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-500">
            about
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal from="left" delay={0.1}>
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter">
              hello,
              <span className="block text-accent-500 mt-1 sm:mt-2">i&apos;m Hasan Abdurrahman</span>
            </h1>
          </Reveal>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <Reveal from="left" delay={0.15}>
              <div className="border-l-[3px] sm:border-l-4 border-accent-500 pl-3 sm:pl-4">
                <p className="font-body text-base sm:text-lg leading-relaxed">
                I am a Software Engineering student at Batam State Polytechnic.I enjoy exploring new technologies, building software projects, and continuously improving my skills in software development. Beyond academics, I spend my free time playing games and following football, which help me stay creative, competitive, and motivated.
                </p>
              </div>
            </Reveal>
            <Reveal from="left" delay={0.2}>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
               I'm also a coffee enthusiast who enjoys exploring the world of manual brewing and appreciating the unique flavors of Arabica beans. Brewing coffee has become more than just a daily routine for me it's a hobby t
               hat allows me to slow down, experiment, and enjoy the craftsmanship behind every cup.
              </p>
            </Reveal>
            <Reveal from="left" delay={0.25}>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
               Beyond my passion for technology, I have a strong interest in videography and photography. I enjoy capturing moments, telling stories through visuals, and exploring different perspectives through both photos and videos. These creative hobbies help me express ideas, sharpen my attention to detail, 
               and continuously inspire me in both my personal life and professional journey.
              </p>
            </Reveal>
          </div>

        </div>

        <div className="lg:col-span-7">
          <Reveal from="right" delay={0.15}>
            <BrutalHover>
              <div className="bg-accent-500 border-[3px] sm:border-4 border-black shadow-brutal p-5 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 -rotate-12 transform translate-x-8 -translate-y-8" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-white uppercase text-sm sm:text-lg tracking-wider">
                    philosophy
                  </h3>
                  <p className="font-body text-white/90 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-lg">
                    &ldquo;Talk is cheap. Show me the code.&rdquo;
                  </p>
                </div>
              </div>
            </BrutalHover>
          </Reveal>

          <Reveal from="right" delay={0.25}>
            <ExperienceTabs education={educationData} experience={experienceData} />
          </Reveal>
        </div>
      </div>

      <div className="mt-12 sm:mt-20">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-black shrink-0" />
          <h2 className="font-display font-bold text-xl sm:text-4xl uppercase tracking-tight">
            skills
          </h2>
          <div className="flex-1 h-0.5 sm:h-1 bg-black" />
        </div>

        <SkillsGrid skills={skillsData} />
      </div>
    </div>
  );
}
