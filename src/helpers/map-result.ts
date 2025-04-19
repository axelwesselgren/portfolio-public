import { Project } from "@/types/project";

export function mapResultsToProjects(result: Record<string, any>): Project[] {
  return result.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    image: row.image,
    githubUrl: row.github_url,
    liveUrl: row.live_url,
    tags: row.tags.filter(Boolean)
  })) as Project[]
}