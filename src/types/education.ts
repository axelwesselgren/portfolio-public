type Education = {
  title: string,
  institution: string,
  degree: string,
  startDate: string,
  endDate: string,
  description?: string
  type: "education" | "course",
}

export type { Education };