import {
  about,
  contactInfo,
  experiences,
  heroTypingRoles,
  navItems,
  projects,
  services,
  skillCategories,
  stats,
  testimonials,
} from "@/data/site";

const mockDelay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

// This service layer is intentionally API-shaped so real endpoints
// can replace mock imports without changing UI components.
export const portfolioApi = {
  getNavigation: async () => {
    await mockDelay(80);
    return navItems;
  },
  getHeroRoles: async () => {
    await mockDelay(120);
    return heroTypingRoles;
  },
  getStats: async () => {
    await mockDelay(100);
    return stats;
  },
  getAbout: async () => {
    await mockDelay(100);
    return about;
  },
  getSkills: async () => {
    await mockDelay(120);
    return skillCategories;
  },
  getExperience: async () => {
    await mockDelay(120);
    return experiences;
  },
  getProjects: async () => {
    await mockDelay(160);
    return projects;
  },
  getServices: async () => {
    await mockDelay(100);
    return services;
  },
  getTestimonials: async () => {
    await mockDelay(130);
    return testimonials;
  },
  getContactInfo: async () => {
    await mockDelay(90);
    return contactInfo;
  },
};
