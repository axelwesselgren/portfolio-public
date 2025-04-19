import { SkillCategory } from "@/types/skill";
import { SkillCard } from "@/components/skills/skill-card";

export function SkillCategoryDisplay({
  category,
  skills,
}: {
  category: string;
  skills: SkillCategory[];
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-full before:w-1 before:bg-primary before:rounded-full">
        {category}
      </h3>

      <SkillCard.List skills={skills} />
    </div>
  );
}
