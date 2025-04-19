import { createFeaturedQueryOptions } from "@/queryOptions/featured-query-options";
import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import { NoProjectsScreen } from "@/components/projects/no-projects";
import { ProjectCard } from "@/components/projects/project-card/project-card";
import { ErrorScreen } from "@/components/states/error-screen";

export function ProjectStates() {
  const {
    data: projects = [],
    isPending,
    error,
  } = useQuery<Project[]>(createFeaturedQueryOptions());

  return (
    isPending ? (
      Array.from({ length: 3 }).map((_, index) => (
        <ProjectCard.Skeleton key={index} />
      ))
    ) : error ? (
      <ErrorScreen title="Something went wrong" description="Please try again" />
    ) : projects.length === 0 ? (
      <NoProjectsScreen />
    ) : (
      projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))
    )
  );
}