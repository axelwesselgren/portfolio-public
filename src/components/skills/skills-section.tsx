import { createSkillsQueryOptions } from "@/queryOptions/skills-query-options";
import { SkillCategories } from "@/types/skill";
import { useQuery } from "@tanstack/react-query";
import { SkillCategoryDisplay } from "@/components/navbar/skill-category-display";

export function SkillsDisplay() {
  const {
    data: skills = [],
    isPending,
    error,
  } = useQuery<SkillCategories>(createSkillsQueryOptions());

  if (isPending) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    return <div className="text-center">Error loading skills</div>;
  }
  
  return (
    <div className="space-y-12">
      {Object.entries(skills).map(([category, skills]) => (
        <SkillCategoryDisplay
          key={category}
          category={category}
          skills={skills}
        />
      ))}
    </div>
  );
}