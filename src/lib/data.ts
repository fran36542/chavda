export type Service = {
  title: string;
  shortBio: string;
  price: string;
  icon: string;
  tool: string;
  bgColor: string;
  whatIProvide: string[];
  pricingTiers?: {
    service: string;
    price: string;
    delivery: string;
  }[];
  tags: string[];
  whyWorkWithMe: string[];
};

export type Project = {
  id: string;
  title:string;
  category: string;
  thumbnail: string;
  overview?: string; // New field
  objection: string;
  problems: string[];
  solution: string[];
  impact: string[];
  process: (string | { title: string; steps: string[] })[]; // Updated to allow more detail
  milestone?: {
    title: string;
    description: string;
    details?: string[];
  };
  tools: string[];
  links: {
    behance: string;
    dribbble: string;
    linkedin: string;
  };
  gallery: string[];
};
