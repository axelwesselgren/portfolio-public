import { SkillCategories } from "@/types/skill";
import { queryOptions } from "@tanstack/react-query";
import { getSkillCategories } from "@/actions/skills";

export function createSkillsQueryOptions() {
  return queryOptions<SkillCategories>({
    queryKey: ["skills"],
    queryFn: getSkillCategories
  });
}