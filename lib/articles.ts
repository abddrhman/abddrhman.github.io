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
      { type: "text", body: "Glovoca is an assistive technology project designed to bridge communication barriers experienced by individuals with hearing and speech impairments. Despite the widespread use of Indonesian Sign Language (BISINDO), communication between sign language users and the general public remains challenging due to limited public understanding and the lack of accessible real-time translation tools." },
      { type: "image", src: "/Glovoca/Glovoca 1.png", alt: "Glovoca smart glove prototype" },
      { type: "text", body: "To address this issue, Glovoca proposes the development of an Internet of Things (IoT)-based smart glove capable of translating BISINDO hand gestures into text and speech in real time. The system utilizes multiple sensors embedded within the glove to capture finger movements and hand orientation. Sensor data is transmitted through IoT connectivity to a backend server and mobile application, where machine learning algorithms process and classify the gestures into meaningful outputs." },
      { type: "text", body: "Beyond functioning as a translation device, the accompanying mobile application also serves as an interactive learning platform for BISINDO, allowing users to study sign language and promoting greater public awareness of inclusive communication. The development of Glovoca focuses on the integration of IoT hardware, sensor data processing, machine learning, backend services, and software engineering practices." },
      { type: "image", src: "/Glovoca/Glovoca 2.png", alt: "Glovoca mobile app interface" },
      { type: "text", body: "Through this innovation, Glovoca aims to enhance accessibility, improve communication efficiency, support the independence of individuals with hearing and speech impairments, and foster a more inclusive society where everyone can communicate without barriers. By combining assistive technology with intelligent systems, Glovoca contributes to the advancement of inclusive digital solutions and demonstrates how technology can create meaningful social value." },
    ],
  },
  {
    date: "19 jun 2026",
    title: "Glovoca : Smart Glove for Sign Language",
    excerpt: "Development of an Internet of Things-Based Smart Glove as a Sign Language-to-Speech Translator — bridging communication barriers with assistive technology.",
    category: "blog",
    slug: "glovoca-smart-glovee",
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

export function getArticleCategories(): string[] {
  return [...new Set(articles.map((a) => a.category))];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
