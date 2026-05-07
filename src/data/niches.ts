export type NicheSlug = "restaurant" | "real-estate" | "interior-design" | "ecommerce" | "rally";

export type NicheConfig = {
  slug: NicheSlug;
  name: string;
  accent: string;
  heroVerb: string;
  demoUrl: string;
  faq: string[];
};

export const nicheConfigs: NicheConfig[] = [
  {
    slug: "restaurant",
    name: "Restaurant",
    accent: "#fbbf24",
    heroVerb: "Run your kitchen",
    demoUrl: "https://example.com/supademo-restaurant",
    faq: [
      "How do I track daily ingredient reconciliation?",
      "Can kitchen and front desk use separate roles?",
      "Does this support multi-location stock movement?",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    accent: "#64748b",
    heroVerb: "Manage your portfolio",
    demoUrl: "https://example.com/supademo-real-estate",
    faq: ["How do agent commissions work?", "Can I track leasing pipelines?", "Do I get owner-level reports?"],
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    accent: "#fb7185",
    heroVerb: "Track every project",
    demoUrl: "https://example.com/supademo-interior-design",
    faq: ["Can I estimate budgets per room?", "How do I track vendor approvals?", "Is timeline progress visualized?"],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    accent: "#c084fc",
    heroVerb: "Sync orders to fulfilment",
    demoUrl: "https://example.com/supademo-ecommerce",
    faq: ["Can it sync with marketplaces?", "How are returns tracked?", "Is inventory real-time?"],
  },
  {
    slug: "rally",
    name: "Rally / Events",
    accent: "#67e8f9",
    heroVerb: "Coordinate every team",
    demoUrl: "https://example.com/supademo-rally",
    faq: ["Can I handle multi-team operations?", "Do I get live task status?", "Can finance track event spend?"],
  },
];

export const pricingPlans = [
  { name: "Starter", monthlyUsd: 129, features: ["Core modules", "Standard onboarding", "Email support"] },
  { name: "Growth", monthlyUsd: 249, features: ["Advanced modules", "Priority onboarding", "Weekly optimization"] },
  { name: "Scale", monthlyUsd: 499, features: ["Custom workflows", "Dedicated success manager", "Executive reporting"] },
];
