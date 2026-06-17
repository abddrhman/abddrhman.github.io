export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  slug: string;
  images: string[];
  details: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Glovoca : Smart GLove for Sign Language",
    description: "Development of an Internet of Things-Based Smart Glove as a Sign Language-to-Speech Translator",
    tech: ["C++", "Flutter", "Dart", "Python", "Flask", "Pytorch", "MySQL",],
    image: "/Glovoca/Glovoca 1.png",
    category: "mobile",
    slug: "Glovoca",
    images: [
      "/Glovoca/Glovoca 1.png",
      "/Glovoca/Glovoca 2.png",
      "/Glovoca/Glovoca 3.png",
    ],
    details: [
      "Glovoca is an assistive technology project designed to bridge communication barriers experienced by individuals with hearing and speech impairments. Despite the widespread use of Indonesian Sign Language (BISINDO), communication between sign language users and the general public remains challenging due to limited public understanding and the lack of accessible real-time translation tools. These limitations often lead to misunderstandings, social isolation, and restricted access to essential services such as education, healthcare, and employment.",
      "To address this issue, Glovoca proposes the development of an Internet of Things (IoT)-based smart glove capable of translating BISINDO hand gestures into text and speech in real time. The system utilizes multiple sensors embedded within the glove to capture finger movements and hand orientation. Sensor data is transmitted through IoT connectivity to a backend server and mobile application, where machine learning algorithms process and classify the gestures into meaningful outputs. The translation results are then displayed as text and converted into audio, enabling seamless communication between sign language users and non-signers.",
      "Beyond functioning as a translation device, the accompanying mobile application also serves as an interactive learning platform for BISINDO, allowing users to study sign language and promoting greater public awareness of inclusive communication. The development of Glovoca focuses on the integration of IoT hardware, sensor data processing, machine learning, backend services, and software engineering practices to produce a responsive and practical prototype with high social impact.",
      "Through this innovation, Glovoca aims to enhance accessibility, improve communication efficiency, support the independence of individuals with hearing and speech impairments, and foster a more inclusive society where everyone can communicate without barriers. By combining assistive technology with intelligent systems, Glovoca contributes to the advancement of inclusive digital solutions and demonstrates how technology can create meaningful social value."
    ],
    link: "",
  },
  {
    title: "Mono Type Foundry",
    description: "A curated collection of monospace typefaces for developers. Features live preview, pairings, and CSS export.",
    tech: ["Next.js", "TypeScript", "Framer"],
    image: "#1a1a1a",
    category: "web",
    slug: "mono-type-foundry",
    images: [
      "/P1169145.JPG",
      "/P1169211.JPG",
      "/P1169298.JPG",
    ],
    details: [
      "Created a web application that curates and showcases monospace typefaces specifically for developers. Users can preview fonts in real-time with their own code samples.",
      "Built with Next.js and Framer Motion for smooth page transitions and interactive font previews. Features include font pairings, CSS export, and a responsive comparison tool.",
      "The platform supports custom text input, adjustable font sizes, and side-by-side comparisons of up to four fonts simultaneously.",
    ],
    link: "https://github.com",
  },
  {
    title: "Grid Garden",
    description: "An interactive CSS Grid learning game. Master grid layouts through playful challenges and real-time feedback.",
    tech: ["React", "CSS Grid", "GSAP"],
    image: "#e11d48",
    category: "web",
    slug: "grid-garden",
    images: [
      "/P1023572.JPG",
      "/P1158457.JPG",
    ],
    details: [
      "Designed and developed an interactive educational game that teaches CSS Grid layout through progressive challenges. Players solve layout puzzles by writing real CSS Grid code.",
      "Built with React and GSAP for smooth animations. The game features 28 levels covering everything from basic grid columns to complex template areas.",
      "Real-time feedback system highlights correct and incorrect placements, making it easy for learners to understand Grid concepts through hands-on practice.",
    ],
    link: "https://github.com",
  },
  {
    title: "Pulse Dashboard",
    description: "Real-time analytics dashboard with brutalist data visualization. Streaming updates and customizable widgets.",
    tech: ["Next.js", "D3.js", "WebSocket"],
    image: "#be123c",
    category: "web",
    slug: "pulse-dashboard",
    images: [
      "/P1168987.JPG",
      "/P1169145.JPG",
      "/P1169211.JPG",
    ],
    details: [
      "Developed a real-time analytics dashboard featuring brutalist data visualizations. The dashboard streams live data updates via WebSocket connections.",
      "Built with Next.js for the frontend and D3.js for custom data visualizations. Widgets are fully customizable and can be rearranged in a responsive grid layout.",
      "Features include real-time metrics, historical data comparison, exportable reports, and customizable alert thresholds.",
    ],
    link: "https://github.com",
  },
  {
    title: "Shape of Sound",
    description: "Generative audio visualizer that turns music into geometric art. Built with the Web Audio API and Canvas.",
    tech: ["Canvas", "Web Audio", "TypeScript"],
    image: "#9f1239",
    category: "experimental",
    slug: "shape-of-sound",
    images: [
      "/P1169298.JPG",
      "/P1023572.JPG",
      "/P1158457.JPG",
    ],
    details: [
      "Created a generative audio visualizer that transforms music input into real-time geometric art. Built entirely with the Web Audio API and HTML5 Canvas.",
      "Supports both microphone input and audio file uploads. Features multiple visualization modes including waveform, frequency bars, and geometric particle systems.",
      "Written in TypeScript with a focus on performance. The visualization runs at 60fps and adapts to different musical genres with unique visual styles.",
    ],
    link: "https://github.com",
  },
  {
    title: "Color Clash",
    description: "A color palette generator inspired by brutalism. Finds high-contrast, unconventional color harmonies.",
    tech: ["React", "Canvas", "HSL"],
    image: "#881337",
    category: "design",
    slug: "color-clash",
    images: [
      "/P1169145.JPG",
      "/P1169211.JPG",
    ],
    details: [
      "Built a color palette generator that creates high-contrast, unconventional color combinations inspired by brutalist design aesthetics.",
      "Uses HSL color space algorithms to generate harmonious yet bold palettes. Features include palette locking, export to CSS variables, and contrast ratio checking.",
      "Built as a prototype with React and Canvas for real-time color previews. The tool helps designers discover unexpected color combinations that still meet accessibility standards.",
    ],
    link: "https://github.com",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const cats = new Set(projects.map((p) => p.category));
  return Array.from(cats).sort();
}
