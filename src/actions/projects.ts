"use server";

import { executeQuery } from "@/db/execute";
import { mapResultsToProjects } from "@/helpers/map-result";
import { Project } from "@/types/project";

export async function getProjects() {
  return executeQuery<Project[]>(async (sql) => {
    const result = await sql`
      SELECT 
        p.id, 
        p.title, 
        p.description, 
        p.image, 
        p.github_url, 
        p.live_url, 
        array_agg(t.name) AS tags
      FROM project p
      LEFT JOIN project_tag pt ON p.id = pt.project_id
      LEFT JOIN tag t ON pt.tag_id = t.id
      WHERE p.ready = 1
      GROUP BY p.id
    `

    return mapResultsToProjects(result);
  });
}

export async function getFeaturedProjects() {
  return executeQuery<Project[]>(async (sql) => {
    const result = await sql`
      SELECT 
        p.id, 
        p.title, 
        p.description, 
        p.image, 
        p.github_url, 
        p.live_url, 
        array_agg(t.name) AS tags
      FROM project p
      LEFT JOIN project_tag pt ON p.id = pt.project_id
      LEFT JOIN tag t ON pt.tag_id = t.id
      WHERE p.ready = 1 AND p.featured = 1
      GROUP BY p.id
    `;

    return mapResultsToProjects(result);
  });
}