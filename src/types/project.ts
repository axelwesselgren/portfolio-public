type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
};

export type { Project }