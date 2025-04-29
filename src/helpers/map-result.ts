import { Project } from "@/types/project";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapResultsToProjects(result: Record<string, any>): Project[] {
  interface ResultRow {
    id: string;
    title: string;
    description: string;
    image: string;
    github_url: string;
    live_url: string;
    tags: (string | null)[];
  }

  return result.map((row: ResultRow) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    image: row.image,
    githubUrl: row.github_url,
    liveUrl: row.live_url,
    tags: row.tags.filter(Boolean) as string[]
  })) as Project[];
}