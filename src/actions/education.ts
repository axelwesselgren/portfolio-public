"use server";

import { executeQuery } from "@/db/execute";
import { Education } from "@/types/education";

export async function getEducation() {
  return executeQuery<Education[]>(async (sql) => {
    return (await sql`SELECT * FROM education ORDER BY start_date DESC`).map((education) => {
      return {
        ...education,
        startDate: education.start_date.toISOString().split("-")[0],
        endDate: education.end_date.toISOString().split("-")[0],
      };
    }) as Education[];
  });
}