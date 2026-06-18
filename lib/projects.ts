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
    title: "Shilau Promotion Web",
    description: "The SHILAU (Commercialization and Business Services Unit) Website was developed as a digital platform to support the dissemination of information and the management of services and products offered by SHILAU at Batam State Polytechnic.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    image: "/Shilau-web/cover-shilau-web.png",
    category: "web",
    slug: "shilau-promotion-web",
    images: [
      "/Shilau-web/homepage-shilau-web.png",
      "/Shilau-web/layanan-shilau-web.png",
      "/Shilau-web/detail-layanan-shilau-web.png",
      "/Shilau-web/dashboard-shilau-cms-web.png",
      "/Shilau-web/Poster-Shilau-web.png",
    ],
    details: [
      "The SHILAU (Commercialization and Business Services Unit) Website was developed as a digital platform to support the dissemination of information and the management of services and products offered by SHILAU at Batam State Polytechnic. Prior to the development of this system, information regarding services, training programs, research-based products, and other offerings was scattered and not optimally integrated, making it difficult for both the public and internal stakeholders to access information and manage content effectively.",
      "To address these issues, a Content Management System (CMS)-based website was developed to serve as a central information hub and promotional medium for SHILAU. The system is designed to enhance the visibility of services, facilitate public access to various products and services, and support transparency and efficiency in service management for all involved parties.",
      "The website provides several key features, including a Home page that presents a brief profile of SHILAU, service categories consisting of Trainings & Certifications, Products & Services, and Rental Equipments, marketing contact information, and a latest news section. In addition, dedicated pages are available to provide detailed information about training and certification programs, research products developed by lecturers, and rentable equipment and facilities, complete with descriptions, specifications, pricing, schedules, and service terms.",
      "To ensure that information remains up to date, the website also includes a News page containing updates and information related to ongoing services and products, as well as an About page that presents SHILAU's vision, mission, and organizational structure. All website content can be dynamically managed through an administrative dashboard, simplifying the process of updating information.",
      "The management system implements a Role-Based Access Control (RBAC) mechanism to regulate user permissions for each actor. SHILAU administrators have full access to manage all website content, management personnel can monitor activities and reports, the Cooperation Unit is responsible for entering new partnership data, each academic department provides data relevant to its respective field, and Centers of Excellence (CoX) are responsible for managing service and product data for their business units. With this system, the promotion, publication, and management of SHILAU services become more structured, efficient, and easily accessible to both the public and internal stakeholders of the institution."
    ],
    link: "",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const cats = new Set(projects.map((p) => p.category));
  return Array.from(cats).sort();
}
