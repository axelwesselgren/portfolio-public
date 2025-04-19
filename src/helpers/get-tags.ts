import { Project } from "@/types/project";

export function getTags(projects: Project[]) {
  return Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();
}