import { getProjects } from "@/actions/projects";
import { Project } from "@/types/project";
import { queryOptions } from "@tanstack/react-query";

export function createProjectsQueryOptions() {
  return queryOptions<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjects
  })
}