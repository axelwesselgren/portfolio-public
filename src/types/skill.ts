type SkillCategory = {
  name: string
  icon: string
}

type SkillCategories = Record<string, SkillCategory[]>

export type { SkillCategories, SkillCategory}