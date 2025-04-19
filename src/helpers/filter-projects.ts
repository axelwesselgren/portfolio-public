import { Project } from "@/types/project";

export function filterProjects(projects: Project[], selectedTag: string | null) {
  return selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;
}