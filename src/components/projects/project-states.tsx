import { useTag } from "@/context/tag-provider";
import { filterProjects } from "@/helpers/filter-projects";
import { createProjectsQueryOptions } from "@/queryOptions/projects-query-options";
import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import { ErrorScreen } from "@/components/states/error-screen";
import { NoProjectsScreen } from "@/components/projects/no-projects";
import { TagsSection } from "@/components/projects/tags-section";
import { ProjectCard } from "@/components/projects/project-card/project-card";

export function ProjectStates() {
  const {
    data: projects = [],
    isPending,
    error,
  } = useQuery<Project[]>(createProjectsQueryOptions());

  const { selectedTag } = useTag();
  const filteredProjects = filterProjects(projects, selectedTag);

  if (isPending)
    return (
      <div className="space-y-4">
        <TagsSection.Skeleton />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectCard.Skeleton key={index} />
          ))}
        </div>
      </div>
    );
  if (error)
    return (
      <ErrorScreen
        title="Failed to Load Projects"
        description="Please try again"
      />
    );
  if (filteredProjects.length === 0) return <NoProjectsScreen />;
  return (
    <div className="space-y-4">
      <TagsSection />
      <ProjectCard.List />
    </div>
  );
}
