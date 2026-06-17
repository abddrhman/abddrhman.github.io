"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faFigma,
  faLaravel,
  faPhp,
  faPython,
  faFlutter,
  faDocker,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faCloud,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillsGridProps {
  skills?: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  "React / Next.js": <FontAwesomeIcon icon={faReact} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "JavaScript": <FontAwesomeIcon icon={faJs} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Tailwind CSS": <FontAwesomeIcon icon={faCode} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Figma": <FontAwesomeIcon icon={faFigma} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Laravel": <FontAwesomeIcon icon={faLaravel} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "PHP": <FontAwesomeIcon icon={faPhp} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Python": <FontAwesomeIcon icon={faPython} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "MySQL": <FontAwesomeIcon icon={faDatabase} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Flutter": <FontAwesomeIcon icon={faFlutter} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "CloudFlare": <FontAwesomeIcon icon={faCloud} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Pytorch": <FontAwesomeIcon icon={faFire} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Docker": <FontAwesomeIcon icon={faDocker} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "Git": <FontAwesomeIcon icon={faGitAlt} className="w-8 h-8 sm:w-10 sm:h-10" />,
  "GitHub": <FontAwesomeIcon icon={faGithub} className="w-8 h-8 sm:w-10 sm:h-10" />,
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const defaultSkills = [
    "React / Next.js", "JavaScript", "Tailwind CSS", "Figma",
    "Laravel", "PHP", "Python", "MySQL", "Flutter", "CloudFlare",
    "Pytorch", "Docker", "Git", "GitHub",
  ];

  const items = skills || defaultSkills;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
      {items.map((name, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="border-[3px] sm:border-4 border-black shadow-brutal bg-white p-3 sm:p-5 flex flex-col items-center justify-center text-center hover:bg-accent-50 hover:-translate-y-1 transition-all group"
        >
          <div className="text-black group-hover:text-accent-500 transition-colors">
            {iconMap[name] || <FontAwesomeIcon icon={faCode} className="w-8 h-8 sm:w-10 sm:h-10" />}
          </div>
          <span className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-wide mt-2 sm:mt-3 leading-tight">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
