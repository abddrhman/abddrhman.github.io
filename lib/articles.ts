export type ContentBlock =
  | { type: "text"; body: string }
  | { type: "image"; src: string; alt: string };

export interface Article {
  date: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  image: string;
  content: ContentBlock[];
}

export const articles: Article[] = [
  {
    date: "12 jun 2026",
    title: "the case for brutalist ui",
    excerpt: "why the web needs more honest, structural design and less decorative fluff. a deep dive into the principles of digital brutalism.",
    category: "design",
    slug: "case-for-brutalist-ui",
    image: "/d4dc00ecd7729229d4f706ccc884d5bbd8db3948.jpg",
    content: [
      { type: "text", body: "Brutalism in web design draws its roots from the architectural movement of the 1950s and 60s. It is raw, honest, and unapologetic. But what does it mean for the interfaces we build today?" },
      { type: "text", body: "At its core, digital brutalism is about stripping away the decorative and focusing on the functional. It embraces asymmetry, bold typography, and high contrast. It is a reaction against the homogenized, cookie-cutter designs that dominate the modern web." },
      { type: "image", src: "/P1023572.JPG", alt: "Brutalist design example" },
      { type: "text", body: "The paradox is that brutalist design, despite its rough appearance, requires a deep understanding of layout, hierarchy, and usability. It is not about being ugly — it is about being real. Every pixel serves a purpose. Every element earns its place." },
      { type: "text", body: "One of the key principles is structural honesty. A button looks like a button because it has a thick border and a bold label. There is no ambiguity. The affordance is clear. Users never have to guess what is interactive." },
      { type: "image", src: "/P1158457.JPG", alt: "Brutalist interface example" },
      { type: "text", body: "Another principle is embracing imperfection. Slight asymmetries, uneven spacing, and raw textures give the interface a tactile, human quality. It is design that feels made, not manufactured." },
      { type: "text", body: "The challenge is balancing this aesthetic with accessibility. High contrast is good for readability, but careful attention must be paid to color choice and font sizing. When done right, brutalist design can be both striking AND inclusive." },
    ],
  },
  {
    date: "28 may 2026",
    title: "framer motion beyond the basics",
    excerpt: "advanced animation patterns for react developers. layout animations, gesture-driven interactions, and performant motion design.",
    category: "code",
    slug: "framer-motion-beyond-basics",
    image: "/P1023572.JPG",
    content: [
      { type: "text", body: "Framer Motion is the de facto animation library for React, but most developers only scratch the surface. Beyond the basic fade and slide lies a world of layout animations, gesture recognition, and shared element transitions." },
      { type: "text", body: "Layout animations are perhaps the most powerful feature. By using AnimatePresence and layoutId, you can create seamless transitions between different states of your UI. Elements morph, shift, and flow like they are alive." },
      { type: "image", src: "/P1168987.JPG", alt: "Framer Motion layout animation" },
      { type: "text", body: "Gestures are another deep topic. Drag, swipe, and pinch gestures can make your interface feel responsive and physical. Framer Motion's drag system supports constraints, elastic bounds, and momentum scrolling out of the box." },
      { type: "text", body: "For complex choreography, staggerChildren and variants allow you to orchestrate multi-element animations with precision. You can create cascading reveals, sequential inputs, and coordinated motion across entire components." },
      { type: "image", src: "/P1169145.JPG", alt: "Framer Motion gesture demo" },
      { type: "text", body: "Performance is always a concern. Framer Motion offloads animations to the GPU when possible, uses will-change optimization, and supports manual control via useAnimation for fine-tuned performance tuning." },
    ],
  },
  {
    date: "10 apr 2026",
    title: "building a design system from scratch",
    excerpt: "lessons learned from creating a component library that actually gets used. structure, documentation, and adoption strategies.",
    category: "design",
    slug: "building-design-system",
    image: "/P1169298.JPG",
    content: [
      { type: "text", body: "A design system is more than a collection of buttons and inputs. It is a shared language between designers and developers. Building one from scratch is a journey that teaches you as much about collaboration as it does about code." },
      { type: "image", src: "/P1023572.JPG", alt: "Design system components" },
      { type: "text", body: "Start with the foundations: color, typography, and spacing. These atomic tokens form the building blocks of every component. Define them with clear naming conventions — color-primary-500, spacing-md, font-size-body. Consistency at this level scales across the entire system." },
      { type: "text", body: "Next, build your component hierarchy. Start small with atoms like buttons, labels, and inputs. Combine them into molecules like form fields and search bars. Finally, compose organisms like headers, cards, and modals. Each layer builds on the one below." },
      { type: "image", src: "/P1169211.JPG", alt: "Component hierarchy" },
      { type: "text", body: "Documentation is not optional. Every component needs usage guidelines, code examples, and accessibility notes. Tools like Storybook make this manageable, but the real challenge is keeping docs in sync with the code. Automate what you can." },
      { type: "text", body: "The hardest part is adoption. A design system only works if people use it. Invest in developer experience — good error messages, intuitive APIs, and responsive support channels. Make it easier to use the system than to bypass it." },
    ],
  },
  {
    date: "22 feb 2026",
    title: "accessibility is not optional",
    excerpt: "why inclusive design should be your default, not an afterthought. practical tips for building accessible web experiences.",
    category: "code",
    slug: "accessibility-not-optional",
    image: "/d4dc00ecd7729229d4f706ccc884d5bbd8db3948.jpg",
    content: [
      { type: "text", body: "Accessibility is often treated as a checklist — a set of requirements to satisfy before launch. But true accessibility is a mindset that shapes every decision from the start of a project." },
      { type: "image", src: "/P1158457.JPG", alt: "Accessible design example" },
      { type: "text", body: "The Web Content Accessibility Guidelines (WCAG) provide a solid framework, but compliance alone does not guarantee a good experience. Real accessibility means understanding how diverse users interact with your product." },
      { type: "text", body: "Start with semantic HTML. It is the foundation of an accessible web. Use the right elements for the right purposes — nav for navigation, main for primary content, button for actions. Screen readers depend on this structure." },
      { type: "image", src: "/P1168987.JPG", alt: "Semantic HTML structure" },
      { type: "text", body: "Color contrast is one of the most common failures. Ensure text meets a 4.5:1 ratio for normal text and 3:1 for large text. But do not rely on color alone to convey information — add icons, patterns, or text labels as complementary signals." },
      { type: "text", body: "Keyboard navigation is essential. All interactive elements must be reachable and operable via keyboard. Visible focus indicators are not optional — they are the keyboard user's cursor. Make them prominent and consistent." },
      { type: "text", body: "Finally, test with real users. Automated tools catch maybe 30% of issues. Nothing replaces the insights gained from watching someone with a disability navigate your interface. It is humbling, educational, and essential." },
    ],
  },
  {
    date: "05 jan 2026",
    title: "the tools i use daily",
    excerpt: "a no-nonsense breakdown of the hardware, software, and workflows that power my creative process.",
    category: "personal",
    slug: "tools-i-use-daily",
    image: "/P1023572.JPG",
    content: [
      { type: "text", body: "I get asked about my setup a lot. So here it is — a straight-to-the-point breakdown of the tools I rely on every day to do my best work." },
      { type: "image", src: "/P1169145.JPG", alt: "Workspace setup" },
      { type: "text", body: "For hardware, I use a MacBook Pro M3 with 32GB of RAM. It handles everything from Figma files to Docker containers without breaking a sweat. My monitor is a 27-inch 4K display set to 100% scaling — no scaling, just pure pixel accuracy." },
      { type: "text", body: "My editor of choice is Neovim. I use it with a minimal config — no bloated frameworks, just LSP, telescope for fuzzy finding, and a handful of quality-of-life plugins. It is fast, keyboard-driven, and gets out of my way." },
      { type: "image", src: "/P1169211.JPG", alt: "Neovim editor" },
      { type: "text", body: "For design, Figma is still king. I use it for wireframes, high-fidelity mockups, and prototyping. The auto-layout feature alone saves me hours each week. I pair it with a set of community plugins for iconography, color, and accessibility checking." },
      { type: "text", body: "My terminal is Kitty with a custom Tokyo Night theme. I use tmux for session management, Git for version control, and lazygit for interactive staging. The key is not the specific tools, but having a workflow that eliminates friction." },
    ],
  },
  {
    date: "15 nov 2025",
    title: "on creative blocks",
    excerpt: "how i deal with creative burnout and keep making things when inspiration runs dry. honest thoughts on the creative process.",
    category: "personal",
    slug: "on-creative-blocks",
    image: "/P1169298.JPG",
    content: [
      { type: "text", body: "Creative block is not a lack of ideas. It is a lack of permission to make something bad. The pressure to produce something remarkable on the first try paralyzes us before we even begin." },
      { type: "image", src: "/P1023572.JPG", alt: "Creative process" },
      { type: "text", body: "I have learned that the only way through a block is to make something — anything. A terrible sketch, a boring wireframe, a page of meaningless code. The act of creating, regardless of quality, breaks the seal." },
      { type: "text", body: "Another strategy is changing your constraints. If you usually design for desktop, try mobile first. If you write in long form, try twitter threads. New constraints force your brain to find different paths to the solution." },
      { type: "image", src: "/P1158457.JPG", alt: "Creative workspace" },
      { type: "text", body: "Physical activity helps more than you would think. A walk, a run, or even just stretching resets your mental state. The best ideas often come when you are not trying to have them — in the shower, on a walk, just before sleep." },
      { type: "text", body: "Ultimately, creative work is a practice, not a performance. Some days flow, some days grind. Both are part of the process. Be kind to yourself, keep showing up, and trust that the block will pass." },
    ],
  },
  {
    date: "19 jun 2026",
    title: "Glovoca : Smart Glove for Sign Language",
    excerpt: "Development of an Internet of Things-Based Smart Glove as a Sign Language-to-Speech Translator — bridging communication barriers with assistive technology.",
    category: "project",
    slug: "glovoca-smart-glove",
    image: "/Glovoca/Glovoca 1.png",
    content: [
      { type: "text", body: "Glovoca is an assistive technology project designed to bridge communication barriers experienced by individuals with hearing and speech impairments. Despite the widespread use of Indonesian Sign Language (BISINDO), communication between sign language users and the general public remains challenging due to limited public understanding and the lack of accessible real-time translation tools." },
      { type: "image", src: "/Glovoca/Glovoca 1.png", alt: "Glovoca smart glove prototype" },
      { type: "text", body: "To address this issue, Glovoca proposes the development of an Internet of Things (IoT)-based smart glove capable of translating BISINDO hand gestures into text and speech in real time. The system utilizes multiple sensors embedded within the glove to capture finger movements and hand orientation. Sensor data is transmitted through IoT connectivity to a backend server and mobile application, where machine learning algorithms process and classify the gestures into meaningful outputs." },
      { type: "text", body: "Beyond functioning as a translation device, the accompanying mobile application also serves as an interactive learning platform for BISINDO, allowing users to study sign language and promoting greater public awareness of inclusive communication. The development of Glovoca focuses on the integration of IoT hardware, sensor data processing, machine learning, backend services, and software engineering practices." },
      { type: "image", src: "/Glovoca/Glovoca 2.png", alt: "Glovoca mobile app interface" },
      { type: "text", body: "Through this innovation, Glovoca aims to enhance accessibility, improve communication efficiency, support the independence of individuals with hearing and speech impairments, and foster a more inclusive society where everyone can communicate without barriers. By combining assistive technology with intelligent systems, Glovoca contributes to the advancement of inclusive digital solutions and demonstrates how technology can create meaningful social value." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
