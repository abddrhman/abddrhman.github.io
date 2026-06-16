export interface Article {
  date: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  image: string;
  content: string[];
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
      "Brutalism in web design draws its roots from the architectural movement of the 1950s and 60s. It is raw, honest, and unapologetic. But what does it mean for the interfaces we build today?",
      "At its core, digital brutalism is about stripping away the decorative and focusing on the functional. It embraces asymmetry, bold typography, and high contrast. It is a reaction against the homogenized, cookie-cutter designs that dominate the modern web.",
      "The paradox is that brutalist design, despite its rough appearance, requires a deep understanding of layout, hierarchy, and usability. It is not about being ugly — it is about being real. Every pixel serves a purpose. Every element earns its place.",
      "One of the key principles is structural honesty. A button looks like a button because it has a thick border and a bold label. There is no ambiguity. The affordance is clear. Users never have to guess what is interactive.",
      "Another principle is embracing imperfection. Slight asymmetries, uneven spacing, and raw textures give the interface a tactile, human quality. It is design that feels made, not manufactured.",
      "The challenge is balancing this aesthetic with accessibility. High contrast is good for readability, but careful attention must be paid to color choice and font sizing. When done right, brutalist design can be both striking AND inclusive.",
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
      "Framer Motion is the de facto animation library for React, but most developers only scratch the surface. Beyond the basic fade and slide lies a world of layout animations, gesture recognition, and shared element transitions.",
      "Layout animations are perhaps the most powerful feature. By using AnimatePresence and layoutId, you can create seamless transitions between different states of your UI. Elements morph, shift, and flow like they are alive.",
      "Gestures are another deep topic. Drag, swipe, and pinch gestures can make your interface feel responsive and physical. Framer Motion's drag system supports constraints, elastic bounds, and momentum scrolling out of the box.",
      "For complex choreography, staggerChildren and variants allow you to orchestrate multi-element animations with precision. You can create cascading reveals, sequential inputs, and coordinated motion across entire components.",
      "Performance is always a concern. Framer Motion offloads animations to the GPU when possible, uses will-change optimization, and supports manual control via useAnimation for fine-tuned performance tuning.",
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
      "A design system is more than a collection of buttons and inputs. It is a shared language between designers and developers. Building one from scratch is a journey that teaches you as much about collaboration as it does about code.",
      "Start with the foundations: color, typography, and spacing. These atomic tokens form the building blocks of every component. Define them with clear naming conventions — color-primary-500, spacing-md, font-size-body. Consistency at this level scales across the entire system.",
      "Next, build your component hierarchy. Start small with atoms like buttons, labels, and inputs. Combine them into molecules like form fields and search bars. Finally, compose organisms like headers, cards, and modals. Each layer builds on the one below.",
      "Documentation is not optional. Every component needs usage guidelines, code examples, and accessibility notes. Tools like Storybook make this manageable, but the real challenge is keeping docs in sync with the code. Automate what you can.",
      "The hardest part is adoption. A design system only works if people use it. Invest in developer experience — good error messages, intuitive APIs, and responsive support channels. Make it easier to use the system than to bypass it.",
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
      "Accessibility is often treated as a checklist — a set of requirements to satisfy before launch. But true accessibility is a mindset that shapes every decision from the start of a project.",
      "The Web Content Accessibility Guidelines (WCAG) provide a solid framework, but compliance alone does not guarantee a good experience. Real accessibility means understanding how diverse users interact with your product.",
      "Start with semantic HTML. It is the foundation of an accessible web. Use the right elements for the right purposes — nav for navigation, main for primary content, button for actions. Screen readers depend on this structure.",
      "Color contrast is one of the most common failures. Ensure text meets a 4.5:1 ratio for normal text and 3:1 for large text. But do not rely on color alone to convey information — add icons, patterns, or text labels as complementary signals.",
      "Keyboard navigation is essential. All interactive elements must be reachable and operable via keyboard. Visible focus indicators are not optional — they are the keyboard user's cursor. Make them prominent and consistent.",
      "Finally, test with real users. Automated tools catch maybe 30% of issues. Nothing replaces the insights gained from watching someone with a disability navigate your interface. It is humbling, educational, and essential.",
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
      "I get asked about my setup a lot. So here it is — a straight-to-the-point breakdown of the tools I rely on every day to do my best work.",
      "For hardware, I use a MacBook Pro M3 with 32GB of RAM. It handles everything from Figma files to Docker containers without breaking a sweat. My monitor is a 27-inch 4K display set to 100% scaling — no scaling, just pure pixel accuracy.",
      "My editor of choice is Neovim. I use it with a minimal config — no bloated frameworks, just LSP, telescope for fuzzy finding, and a handful of quality-of-life plugins. It is fast, keyboard-driven, and gets out of my way.",
      "For design, Figma is still king. I use it for wireframes, high-fidelity mockups, and prototyping. The auto-layout feature alone saves me hours each week. I pair it with a set of community plugins for iconography, color, and accessibility checking.",
      "My terminal is Kitty with a custom Tokyo Night theme. I use tmux for session management, Git for version control, and lazygit for interactive staging. The key is not the specific tools, but having a workflow that eliminates friction.",
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
      "Creative block is not a lack of ideas. It is a lack of permission to make something bad. The pressure to produce something remarkable on the first try paralyzes us before we even begin.",
      "I have learned that the only way through a block is to make something — anything. A terrible sketch, a boring wireframe, a page of meaningless code. The act of creating, regardless of quality, breaks the seal.",
      "Another strategy is changing your constraints. If you usually design for desktop, try mobile first. If you write in long form, try twitter threads. New constraints force your brain to find different paths to the solution.",
      "Physical activity helps more than you would think. A walk, a run, or even just stretching resets your mental state. The best ideas often come when you are not trying to have them — in the shower, on a walk, just before sleep.",
      "Ultimately, creative work is a practice, not a performance. Some days flow, some days grind. Both are part of the process. Be kind to yourself, keep showing up, and trust that the block will pass.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
