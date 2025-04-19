import { getFeaturedProjects } from "@/actions/projects";
import { Project } from "@/types/project";
import { queryOptions } from "@tanstack/react-query";

export function createFeaturedQueryOptions() {
  return queryOptions<Project[]>({
    queryKey: ["featured-projects"],
    queryFn: getFeaturedProjects
  });
}