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
  {
    title: "Virtual Event Check-In",
    description: "The Online Event Attendance App is a digital solution designed to simplify attendance recording for various types of online events, such as webinars, workshops, seminars, and conferences. This app enables event organizers to manage attendee attendance effectively and efficiently..",
    tech: ["PHP", "MYSQL", "Boostrap", "HTML", "Figma"],
    image: "/vec/cover.png",
    category: "web",
    slug: "virtual-event-check-in",
    images: [
      "/vec/homepage.png",
      "/vec/dashboard.png",
      "/vec/list-absensi.png",
      "/vec/absensi.png",
      "/vec/sertifikat.png",
      "/vec/poster.png",
    ],
    details: [
      "Online Event Attendance Application is a digital solution developed to streamline and modernize the process of managing participant attendance for various types of online events, including webinars, workshops, seminars, training sessions, and conferences. The application was created to address common challenges faced by event organizers, such as manual attendance tracking, inaccurate participant records, and the difficulty of monitoring attendance data in real time. By providing a centralized and user-friendly platform, the system enables organizers to efficiently record, monitor, and manage participant attendance throughout the event lifecycle.",
      "The application offers an intuitive interface that simplifies the attendance process for both organizers and participants. Organizers can create and manage events, monitor participant attendance, access attendance records, and generate reports that can be used for documentation and evaluation purposes. The platform is designed with a focus on usability, accessibility, and efficiency, ensuring that event management processes can be carried out smoothly while minimizing administrative workload. In addition, the system aims to enhance the overall experience of online event management by providing accurate and organized attendance data.",
      "In this project, I was responsible for multiple aspects of development, serving as both a UI/UX Designer and a Web Developer. As a UI/UX Designer, I conducted user-centered design processes, including interface planning, wireframing, prototyping, and creating visually appealing and intuitive user experiences to ensure ease of use and accessibility. I focused on designing a clean and responsive interface that allows users to navigate the application efficiently while maintaining consistency across different devices.",  
      "As a Web Developer, I was involved in translating the design into a functional web application by implementing the frontend and backend components, integrating system features, and ensuring that the application operates reliably and efficiently. I contributed to developing core functionalities related to attendance management, user interactions, and data processing, while also emphasizing maintainability, responsiveness, and overall system performance. Through this project, I gained valuable experience in combining design principles with software development practices to deliver a comprehensive digital solution that improves the effectiveness and efficiency of online event attendance management.",
    ],
    link: "",
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  const cats = new Set(projects.map((p) => p.category));
  return Array.from(cats).sort();
}
