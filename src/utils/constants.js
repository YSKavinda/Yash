import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#172b4d" },
    secondary: { main: "#0d8f86" },
    background: { default: "#f5f7fb", paper: "#ffffff" },
    primary_text: { main: "#d8fff3" },
    secondary_text: { main: "#65d6bc" },
  },
  typography: { fontFamily: '"Inter", "Segoe UI", Arial, sans-serif' },
});

export const footerData = {
  brand: {
    name: "Yasiru Sandun",
    tagline: "Software Engineer",
    description: "Building reliable mobile experiences, full-stack products and practical AI tools.",
  },
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    email: "yskavinda@gmail.com",
    phone: "+94 76 228 2965",
    phoneHref: "+94762282965",
    location: "Sri Lanka",
  },
  social: [
    { name: "GitHub", url: "https://github.com/YSKavinda", handle: "YSKavinda" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yasiru-sandun-20228a199", handle: "Yasiru Sandun" },
  ],
  copyright: { year: new Date().getFullYear() },
};

export const careerHistory = [
  {
    id: 1, title: "Software Engineer", company: "Xigenix Lanka", date: "Jul 2025 – Present",
    description: "Building the SMATA owners platform and contributing to TradesNow AI / Fixby. On SMATA I work across React Native mobile apps and a Ruby on Rails backend, including meeting workflows, scheduled jobs, RabbitMQ messaging, PDF and email delivery, monitoring, and release automation. For Fixby I have worked on the TypeScript/Node.js backend for AI-assisted home-maintenance troubleshooting, guided repairs, safety checks, case history and tradesperson booking flows, with swappable AI models, MCP integration and tool calling. The assistant includes Gemini 3.8 Live voice/video over WebSockets and Gemini 3.8 Flash chat workflows.",
    icon: "work", tags: ["React Native", "TypeScript", "Ruby on Rails", "Node.js", "Express", "MongoDB", "Gemini Live", "MCP", "AWS"],
  },
  {
    id: 2, title: "Associate Software Engineer · Full Stack", company: "Sentura Technologies", date: "Oct 2024 – May 2025",
    description: "Developed React Native mobile features and Spring Boot microservices, connecting APIs, Firebase and AWS to deliver full-stack products.",
    icon: "work", tags: ["React Native", "Java", "Spring Boot", "REST APIs", "Firebase", "AWS"],
  },
  {
    id: 3, title: "Software Engineering Intern", company: "Sentura Technologies", date: "Nov 2023 – Oct 2024",
    description: "Contributed to YALUOWE, Sawari, Beecelle and OOLO mobile products, working on React Native screens, integrations and release-ready features.",
    icon: "work", tags: ["React Native", "TypeScript", "Redux", "Firebase"],
  },
  {
    id: 4, title: "B.Eng. (Hons) Software Engineering", company: "IIC University of Technology", date: "2020 – 2024",
    description: "Software engineering degree focused on software design, application development and computing foundations.",
    icon: "school", tags: ["Software Engineering"],
  },
  {
    id: 5, title: "Diploma in Software Engineering", company: "Java Institute for Advanced Technology", date: "2021 – 2024",
    description: "Practical study in Java and software development.",
    icon: "school", tags: ["Java", "Software Development"],
  },
];

export const servicesData = [
  { id: 1, title: "Mobile Engineering", description: "Cross-platform Android and iOS applications, feature delivery, upgrades and releases with React Native.", icon: "Smartphone", features: ["React Native", "TypeScript", "RTK Query", "Firebase"], color: "#0d8f86" },
  { id: 2, title: "Backend & APIs", description: "Application backends and integrations across Node.js, Express, Spring Boot and Ruby on Rails.", icon: "Server", features: ["Node.js", "Spring Boot", "Rails", "MongoDB"], color: "#3f5da8" },
  { id: 3, title: "AI Integrations", description: "AI-assisted workflows with model switching, tool calling and live voice/video experiences.", icon: "Lightbulb", features: ["Gemini Live", "MCP", "LangChain", "WebSockets"], color: "#a6613b" },
  { id: 4, title: "Delivery & Operations", description: "CI/CD, mobile releases, messaging and monitoring that help keep products dependable.", icon: "Cloud", features: ["GitHub Actions", "Fastlane", "AWS", "RabbitMQ"], color: "#8062a5" },
];

export const projectsData = [
  {
    id: 1, title: "SMATA Owners Platform", shortDescription: "Mobile platform and backend workflows for owners across 60+ branded apps.",
    description: "At Xigenix Lanka, I work on the SMATA owners platform across React Native/TypeScript mobile apps and a Ruby on Rails backend. My work includes meeting management, scheduled jobs, RabbitMQ messaging, PDF and email delivery, monitoring, Android/iOS upgrades and automated releases.",
    technologies: ["React Native", "TypeScript", "RTK Query", "Ruby on Rails", "RabbitMQ", "Fastlane", "AWS"], screenshots: [], category: "mobile",
  },
  {
    id: 2, title: "TradesNow AI · Fixby", shortDescription: "AI home-maintenance assistant with troubleshooting, live voice/video and booking flows.",
    description: "At Xigenix Lanka, I contributed to the TypeScript/Node.js backend for Fixby, the TradesNow AI home-maintenance assistant. It supports guided troubleshooting, safety checks, case history and tradesperson booking flows. The AI architecture supports swappable models, MCP integration and tool calling, with Gemini 3.8 Live voice/video via WebSockets and Gemini 3.8 Flash chat workflows. Some trade discovery and pricing integrations are still mock-backed.",
    technologies: ["TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "LangChain", "Gemini Live", "MCP", "WebSockets"], screenshots: [], category: "AI / backend",
  },
  {
    id: 3, title: "YALUOWE", shortDescription: "Shared-funds mobile experience for groups and communities.",
    description: "Mobile app work at Sentura Technologies for group contributions, shared expenses and community finance flows.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"], screenshots: ["https://res.cloudinary.com/dr61n83yq/image/upload/v1751357299/Yl-Profile_ad8xnd.png", "https://res.cloudinary.com/dr61n83yq/image/upload/v1751357297/Yl-payments_pqd1vd.png"], category: "mobile", liveUrl: "https://play.google.com/store/apps/details?id=com.yaluowe",
  },
  {
    id: 4, title: "Sawari", shortDescription: "Ride-hailing mobile application.",
    description: "Contributed to a ride-hailing mobile application at Sentura Technologies, including mobile workflows and service integration.",
    technologies: ["React Native", "TypeScript", "Firebase", "Google Maps"], screenshots: [], category: "mobile", liveUrl: "https://play.google.com/store/apps/details?id=lk.sawari.customer",
  },
  {
    id: 5, title: "Warehouse Management", shortDescription: "MERN-based inventory and reporting interface.",
    description: "Frontend work for a warehouse management system supporting inventory visibility, reporting and order workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI"], screenshots: ["https://res.cloudinary.com/dr61n83yq/image/upload/v1751357296/SNP-ReportUI_acuuz2.png"], category: "web",
  },
  {
    id: 6, title: "Java EE E-Library", shortDescription: "Book catalog and borrowing system.",
    description: "An e-library application with authentication, book cataloging and borrowing workflows built with Java web technologies.",
    technologies: ["Java", "Spring MVC", "JSP", "Hibernate", "SQL"], screenshots: [], category: "web",
  },
];
