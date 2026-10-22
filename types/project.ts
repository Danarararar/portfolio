export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  features: string[];
  image?: string; // <- tambahkan ini
  repoUrl?: string;
  liveUrl?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year?: string;
};

export type Skill = {
  name: string;
  category: "Language" | "AI/ML" | "Cloud" | "Web" | "Tools";
};
