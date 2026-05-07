export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    level: number;
    icon: string;
  }[];
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
};

export type ProjectCategory = "all" | "frontend" | "fullstack" | "backend";

export type Project = {
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, "all">;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  socials: {
    name: string;
    url: string;
  }[];
};
