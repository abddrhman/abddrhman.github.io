import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";

const featuredProject = {
  title: "Brutal UI Kit",
  description: "A comprehensive design system built on neo-brutalist principles. Includes 60+ components, dark mode, and full accessibility support.",
  tech: ["React", "TypeScript", "Tailwind", "Storybook"],
  image: "#f43f5e",
  status: "in progress",
  link: "https://github.com",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 lg:mt-24">
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-black shrink-0" />
          <h2 className="font-display font-bold text-xl sm:text-4xl uppercase tracking-tight">
            featured project
          </h2>
          <div className="flex-1 h-0.5 sm:h-1 bg-black" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-7">
            <ProjectCard {...featuredProject} />
          </div>

          <div className="lg:col-span-5 lg:pt-12">
            <div className="border-[3px] sm:border-4 border-black shadow-brutal bg-white p-4 sm:p-6 relative">
              <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-accent-500 border-2 border-black flex items-center justify-center">
                <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg uppercase tracking-tight">
                why this matters
              </h3>
              <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-accent-500 my-2 sm:my-3" />
              <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed">
                Neo-brutalism in UI design is about honesty, structure, and 
                making a statement. This kit reimagines brutalism for the modern 
                web with thoughtful interaction design and strict accessibility 
                standards. Every component is built from the ground up with 
                mobile-first, progressive enhancement in mind.
              </p>
            </div>

            <div className="border-[3px] sm:border-4 border-black shadow-brutal bg-accent-500 p-4 sm:p-6 mt-4 sm:mt-6 relative -rotate-1">
              <p className="font-display font-bold text-sm sm:text-xl uppercase text-white tracking-tight">
                currently iterating on v2 with expanded icon system
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 lg:mt-24 mb-16 sm:mb-20">
        <div className="border-[3px] sm:border-4 border-black shadow-brutal bg-white p-4 sm:p-8 relative overflow-hidden">
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent-500 border-l-[3px] sm:border-l-4 border-b-[3px] sm:border-b-4 border-black rotate-12" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-lg sm:text-3xl uppercase tracking-tight max-w-lg">
              let&apos;s build something bold together
            </h2>
            <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-accent-500 my-3 sm:my-4" />
            <p className="font-body text-sm sm:text-base text-gray-600 max-w-xl">
              available for freelance projects, collaborations, and full-time opportunities.
            </p>
            <a
              href="mailto:hello@qynn.design"
              className="inline-block mt-4 sm:mt-6 font-display font-bold text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-5 py-3 sm:px-6 sm:py-3 border-2 border-black hover:bg-accent-500 hover:border-accent-500 transition-colors shadow-brutal"
            >
              get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
