"use server";

import { executeQuery } from "@/db/execute";
import { SkillCategories } from "@/types/skill";

export async function getSkillCategories() {
  return executeQuery<SkillCategories>(async (sql) => {
    const result = await sql`
      SELECT
        c.id AS category_id,
        c.name AS category_name,
        s.id AS skill_id,
        s.name AS skill_name,
        s.icon
      FROM category c
      JOIN skill s ON s.category_id = c.id
    `;

    
  const skillCategories: SkillCategories = {}

  for (const row of result) {
    const { category_name, skill_name, icon } = row

    if (!skillCategories[category_name]) {
      skillCategories[category_name] = []
    }

    skillCategories[category_name].push({
      name: skill_name,
      icon
    })
  }

    return skillCategories;
  });
}