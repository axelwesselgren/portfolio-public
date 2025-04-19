import { Button } from "@/components/ui/button";
import { useTag } from "@/context/tag-provider";
import { getTags } from "@/helpers/get-tags";
import { createProjectsQueryOptions } from "@/queryOptions/projects-query-options";
import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export const TagsSection = () => {
  const { selectedTag, setTag, clearTag } = useTag();

  const { data: projects = [] } = useQuery<Project[]>(
    createProjectsQueryOptions()
  );

  const tags = getTags(projects);

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      <Button
        variant={selectedTag === null ? "default" : "outline"}
        size="sm"
        onClick={clearTag}
        className="rounded-full"
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          size="sm"
          onClick={() => setTag(tag)}
          className="rounded-full"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}

TagsSection.Skeleton = function TagsSectionSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {Array.from({ length: 13 }).map((_, index) => (
        <Skeleton className="h-8 w-16 rounded-full" key={index} />
      ))}
    </div>
  );
}