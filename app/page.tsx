import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { BrutalHover } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <>
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 lg:mt-24">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-500 border border-[var(--border-color)] shrink-0" />
          <h2 className="font-display font-bold text-xl sm:text-4xl uppercase tracking-tight text-[var(--text-primary)]">
            featured project
          </h2>
          <div className="flex-1 h-0.5 sm:h-1 bg-[var(--border-color)]" />
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.slug} from="home" {...project} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/about">
              <BrutalHover>
                <div className="border-[3px] sm:border-4 border-black shadow-brutal bg-accent-500 px-5 sm:px-7 py-3 sm:py-4 relative -rotate-1 w-fit">
                  <p className="font-display font-bold text-sm sm:text-xl uppercase text-white tracking-tight whitespace-nowrap">
                    about me?
                  </p>
                </div>
              </BrutalHover>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
