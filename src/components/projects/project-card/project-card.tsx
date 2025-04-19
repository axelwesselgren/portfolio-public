import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types/project";
import { Skeleton } from "@/components/ui/skeleton";
import { createProjectsQueryOptions } from "@/queryOptions/projects-query-options";
import { useQuery } from "@tanstack/react-query";
import { useTag } from "@/context/tag-provider";
import { filterProjects } from "@/helpers/filter-projects";
import { StripedBanner } from "@/components/style/banners";
import { ProjectLinks } from "@/components/projects/project-card/project-links";
import { ProjectTags } from "@/components/projects/project-card/project-tags";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      key={project.id}
      className="overflow-hidden transition-all hover:shadow-md"
    >
      <div className="aspect-video relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        ) : (
          <StripedBanner className="relative h-full overflow-hidden rounded bg-muted" />
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ProjectTags tags={project.tags} />
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <ProjectLinks
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      </CardFooter>
    </Card>
  );
}

ProjectCard.Skeleton = function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>

      <CardHeader className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6" />
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4">
        <Skeleton className="h-9 w-20 rounded-md" />
        <Skeleton className="h-9 w-20 rounded-md" />
      </CardFooter>
    </Card>
  );
}

ProjectCard.List = function ProjectCards() {
  const { selectedTag } = useTag();

  const {
    data: projects = [],
  } = useQuery<Project[]>(createProjectsQueryOptions());
  
  const filteredProjects = filterProjects(projects, selectedTag);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}