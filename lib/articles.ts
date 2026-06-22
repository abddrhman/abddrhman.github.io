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
    date: "19 jun 2026",
    title: "Glovoca : Smart Glove for Sign Language",
    excerpt: "Development of an Internet of Things-Based Smart Glove as a Sign Language-to-Speech Translator — bridging communication barriers with assistive technology.",
    category: "article",
    slug: "glovoca-smart-glove",
    image: "/Glovoca/Glovoca 1.png",
    content: [
      { type: "text", body: "GLOVOCA (Glove Voice Communication Assistant) is an Internet of Things (IoT)-based Smart Glove designed to assist people with hearing and speech impairments, as well as sign language users, in communicating more effectively with the general public. The system utilizes sensors embedded within the glove to capture hand movements, which are then processed by a microcontroller and translated into text and speech in real time." },
      { type: "text", body: "The IoT concept in GLOVOCA lies in its ability to integrate sensors, microcontrollers, and communication media through wireless connections and internet-based technologies. The gesture data collected from the sensors can be transmitted and processed automatically, enabling faster and more efficient communication." },
      { type: "text", body: "GLOVOCA offers a practical solution to reduce communication barriers between people with hearing impairments and society, particularly in educational institutions, public services, and workplaces. Furthermore, the device promotes social inclusivity by allowing communication without requiring others to have extensive knowledge of sign language." },
      { type: "image", src: "/Glovoca/design-alur-sistem.png", alt: "Glovoca smart glove Flow System" },
      { type: "text", body: "Beyond the hardware development process, task allocation and team contributions played an essential role in the success of the project. In this team, Eric Marchelino Hutabarat and I served as Hardware Engineers, focusing on IoT component integration, electrical system design, and AI implementation for GLOVOCA. Software development responsibilities were carried out by Dony Tata Fahreza and Dhiyaa Ahmad Azzhariif as Software Engineers, who developed the mobile application and database system. Naomi Anisa Yulia Sihaan acted as both UI/UX Designer and Product Designer, responsible for designing the mobile application interface and the physical appearance of the GLOVOCA device. Meanwhile, Winda Tri Wulan Dari served as the System Architect and Business Analyst, ensuring that the system architecture and business processes aligned with the project's objectives throughout the development lifecycle."},
      { type: "text", body: "Structured planning was one of the key factors contributing to the success of this Project-Based Learning (PBL) initiative, as it provided clear objectives, work procedures, and implementation strategies. Through proper task distribution, the GLOVOCA team was able to work more efficiently, optimize time management, and minimize potential obstacles during development. Effective planning also ensured that each stage of the project remained aligned with the predefined targets, maximizing resource utilization. Without proper planning, the project could have faced delays, inefficiencies, and unsatisfactory outcomes. Therefore, comprehensive planning greatly influenced team coordination, work effectiveness, and overall project success."},
      { type: "image", src: "/Glovoca/Glovoca 2.png", alt: "Glovoca Team Members" },
      { type: "text", body: "The GLOVOCA team adopted the Agile methodology to ensure that the product met user requirements effectively. Agile was chosen due to its flexibility and its iterative development approach through short sprints. At each stage, developed features were tested immediately, enabling the team to identify shortcomings and gather additional user requirements."},
      { type: "text", body: "Moreover, the team continuously collected feedback from testing results, which served as evaluation material for future improvements. Frequent communication and periodic evaluations were conducted to ensure that every team member remained aligned with the project goals and development progress."},
      { type: "text", body: "By implementing Agile practices, the development process became more structured, development risks were minimized, and product quality continuously improved. This methodology enabled GLOVOCA to evolve into a more effective, responsive, and user-oriented communication aid."},
      { type: "image", src: "/Glovoca/agile-method.jpg", alt: "Glovoca Agile Methodology" },
      { type: "image", src: "/Glovoca/gantt-chart.jpg", alt: "Glovoca Gantt Chart" },
      { type: "text", body: "One of the greatest challenges encountered during the development of GLOVOCA was the limited availability and high cost of supporting hardware components, as well as the complexity of developing an AI system capable of translating sensor data into meaningful speech output. Processing sensor readings into understandable words and sentences required sophisticated AI models and extensive training, while references and resources for such development remained relatively limited. These factors became major obstacles throughout the research and development process."},
      { type: "text", body: "To overcome hardware limitations, the team utilized simulations through the WokWi platform during the early stages of development. This approach enabled us to understand the system workflow and validate design concepts before implementing them on actual hardware. Consequently, costs were reduced and implementation risks were minimized."},
      { type: "text", body: "Amid these challenges, adjustments to the project plan became unavoidable. The team first identified emerging issues and then discussed the most feasible solutions while considering available resources, time constraints, and project priorities. Development continued following Agile principles, allowing the team to adapt quickly and incrementally to changes."},
      { type: "text", body: "Several adjustments were implemented, including revising schedules, redistributing responsibilities among team members, and simplifying certain features to ensure that development remained focused on the primary objectives. Throughout this process, effective communication played a vital role in maintaining coordination and ensuring that every team member understood the changes being made."},
      { type: "text", body: "As part of continuous evaluation, every challenge encountered became a valuable learning opportunity to improve the team's preparedness for similar situations in the future. Through strong collaboration, flexibility, and adaptability, the GLOVOCA project was able to progress optimally despite various limitations."},
      { type: "image", src: "/Glovoca/team-photo.jpg", alt: "Glovoca Team Documentation" },
      { type: "image", src: "/Glovoca/team-photo-2.jpg", alt: "Glovoca Team Documentation" },
      { type: "text", body: "One of the most critical technical risks identified during the development process was the possibility of electrical short circuits within the electronic components. This risk was particularly significant because several components, especially the flex sensors, were relatively expensive and difficult to replace. Damage to these components would not only increase development costs but also delay the project schedule."},
      { type: "text", body: "To mitigate this risk, the team implemented power protection using a DC Step-Up Module. This module regulates and stabilizes the voltage supplied from the power source to the entire circuit. By maintaining a more stable power distribution, the risk of damage caused by unstable electrical currents could be reduced, thereby improving the safety and durability of the components throughout development and testing."},
      { type: "image", src: "/Glovoca/sistem-alat.png", alt: "Glovoca Team Documentation" },
    ]
  },
];

export function getArticleCategories(): string[] {
  return [...new Set(articles.map((a) => a.category))];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
