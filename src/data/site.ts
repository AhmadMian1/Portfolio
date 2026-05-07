import type {
  ContactInfo,
  Experience,
  NavItem,
  Project,
  Service,
  SkillCategory,
  Testimonial,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroTypingRoles = [
  "Full-Stack Engineer",
  "Next.js Specialist",
  "UI/UX Enthusiast",
];

export const stats = [
  { label: "Years Experience", value: 5 },
  { label: "Projects Delivered", value: 42 },
  { label: "Happy Clients", value: 28 },
];

export const about = {
  title: "Building delightful digital products with precision and speed.",
  summary:
    "I design and build high-performance web experiences with modern architecture, elegant UI systems, and backend-ready frontend foundations.",
  education: [
    {
      title: "BS Computer Science",
      subtitle: "National University of Computer and Emerging Sciences",
      period: "2017 - 2021",
    },
    {
      title: "Cloud & DevOps Certifications",
      subtitle: "AWS and Kubernetes learning track",
      period: "2022 - 2024",
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95, icon: "Code2" },
      { name: "TypeScript", level: 92, icon: "FileCode2" },
      { name: "Tailwind CSS", level: 93, icon: "Palette" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88, icon: "Server" },
      { name: "PostgreSQL", level: 84, icon: "Database" },
      { name: "REST / GraphQL APIs", level: 86, icon: "Network" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 82, icon: "Container" },
      { name: "AWS", level: 80, icon: "Cloud" },
      { name: "CI/CD", level: 85, icon: "Workflow" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "TechNova Labs",
    role: "Senior Frontend Engineer",
    duration: "2023 - Present",
    location: "Remote",
    responsibilities: [
      "Led migration to Next.js App Router with server-first architecture.",
      "Built shared design system and reusable component library.",
      "Improved performance scores from 72 to 94 on Lighthouse.",
    ],
  },
  {
    company: "PixelForge Studio",
    role: "Frontend Developer",
    duration: "2021 - 2023",
    location: "Lahore, PK",
    responsibilities: [
      "Delivered responsive UI across SaaS and ecommerce platforms.",
      "Implemented animation systems with Framer Motion.",
      "Collaborated closely with backend team on API contracts.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SaaS Analytics Platform",
    description:
      "A premium dashboard with real-time metrics, role-based access, and modular chart widgets.",
    image: "/project-1.svg",
    category: "fullstack",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Headless Commerce Frontend",
    description:
      "A conversion-focused storefront with edge rendering and optimized product browsing.",
    image: "/project-2.svg",
    category: "frontend",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevOps Monitoring Hub",
    description:
      "An internal tool for cloud health checks, alert streams, and deployment monitoring.",
    image: "/project-3.svg",
    category: "backend",
    techStack: ["Node.js", "Express", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const services: Service[] = [
  {
    title: "Web App Development",
    description: "Scalable, production-ready web apps with modern architecture.",
    icon: "MonitorSmartphone",
  },
  {
    title: "UI Engineering",
    description: "Design-system driven interfaces with strong accessibility and UX.",
    icon: "Sparkles",
  },
  {
    title: "Performance Optimization",
    description: "Speed, SEO, and Core Web Vitals optimization for real impact.",
    icon: "Gauge",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Khan",
    role: "Product Manager, CloudNest",
    quote:
      "The execution quality was top-tier. We shipped faster and the user experience felt truly premium.",
  },
  {
    name: "Daniel Omar",
    role: "Founder, ScalePilot",
    quote:
      "Clear communication, elegant UI decisions, and very reliable delivery under tight timelines.",
  },
  {
    name: "Ayesha Noor",
    role: "CTO, Fluxly",
    quote:
      "Built with clean architecture from day one, making future API integration effortless.",
  },
];

export const contactInfo: ContactInfo = {
  email: "hello@portfolio.dev",
  phone: "+92 300 1234567",
  location: "Lahore, Pakistan",
  socials: [
    { name: "GitHub", url: "https://github.com/" },
    { name: "LinkedIn", url: "https://linkedin.com/" },
    { name: "Twitter", url: "https://x.com/" },
  ],
};
