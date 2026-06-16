import type { Metadata } from "next";
import ExperienceTabs from "@/components/ExperienceTabs";
import SkillsGrid from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "about",
  description: "Learn more about qynn — background, education, and skills.",
};

const educationData = [
  {
    year: "2020",
    title: "bsc computer science",
    institution: "university of creative technology",
    description: "Graduated with honors. Focus on human-computer interaction and visual computing.",
  },
  {
    year: "2017",
    title: "high school diploma",
    institution: "science high school",
    description: "Major in mathematics and science. Active in programming club and design extracurricular.",
  },
];

const experienceData = [
  {
    year: "2023",
    title: "senior design engineer",
    institution: "studio brutale",
    description: "Led design system development and mentored junior designers. Shipped 3 major product launches.",
  },
  {
    year: "2021",
    title: "frontend developer",
    institution: "digital forge",
    description: "Built interactive web experiences for enterprise clients. Specialized in animation and performance.",
  },
  {
    year: "2019",
    title: "junior designer",
    institution: "pixel lab",
    description: "Started career in UI/UX design. Worked on brand identities and web design projects.",
  },
];

const skillsData = [
  "React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "UI / UX Design", "Figma", "Node.js", "PostgreSQL",
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-black shrink-0" />
        <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-gray-500">
          about
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.9] tracking-tighter">
            hello,
            <span className="block text-accent-500 mt-1 sm:mt-2">i&apos;m Hasan Abdurrahman</span>
          </h1>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <div className="border-l-[3px] sm:border-l-4 border-accent-500 pl-3 sm:pl-4">
              <p className="font-body text-base sm:text-lg leading-relaxed">
                designer & developer with a passion for brutalist aesthetics 
                and clean, accessible code. based somewhere between the 
                grid and the gutter.
              </p>
            </div>
            <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
              i believe the best interfaces are honest about their structure. 
              no fluff, no fake depth — just bold typography, intentional 
              spacing, and interactions that feel alive.
            </p>
            <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
              when i&apos;m not pushing pixels, you&apos;ll find me 
              reading about design theory, experimenting with generative 
              art, or hunting down the perfect cup of coffee.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-500 border-2 border-black flex items-center justify-center shadow-brutal shrink-0">
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="font-body font-bold text-xs sm:text-sm">open to work</p>
              <p className="font-body text-xs text-gray-500">freelance & full-time</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-accent-500 border-[3px] sm:border-4 border-black shadow-brutal p-5 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 -rotate-12 transform translate-x-8 -translate-y-8" />
            <div className="relative z-10">
              <h3 className="font-display font-bold text-white uppercase text-sm sm:text-lg tracking-wider">
                design philosophy
              </h3>
              <p className="font-body text-white/90 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-lg">
                &ldquo;form follows function, but personality makes it memorable. 
                every pixel should have a purpose, every interaction a reason.&rdquo;
              </p>
            </div>
          </div>

          <ExperienceTabs education={educationData} experience={experienceData} />
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

        <SkillsGrid />
      </div>

      <div className="mt-12 sm:mt-16 border-[3px] sm:border-4 border-black shadow-brutal bg-white p-4 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-sm sm:text-lg uppercase tracking-tight">
            want to work together?
          </p>
          <p className="font-body text-xs sm:text-sm text-gray-600 mt-1">
            i&apos;m always open to interesting projects
          </p>
        </div>
        <a
          href="mailto:hello@qynn.design"
          className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-5 py-3 sm:px-6 sm:py-3 border-2 border-black hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal whitespace-nowrap"
        >
          say hello
        </a>
      </div>
    </div>
  );
}
