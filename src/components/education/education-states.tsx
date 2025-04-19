import { CourseHeader } from "@/components/education/course-header";
import { EducationHeader } from "@/components/education/education-header";
import { ErrorScreen } from "@/components/states/error-screen";
import { createEducationQueryOptions } from "@/queryOptions/education-query-options";
import { Education } from "@/types/education";
import { useQuery } from "@tanstack/react-query";
import { CourseCard } from "@/components/education/course-card";
import { EducationCard } from "./education-card";

export function EducationStates() {
  const {
    data: education = [],
    isPending,
    error,
  } = useQuery<Education[]>(createEducationQueryOptions());

  const courses = education.filter((item) => item.type === "course");
  const educations = education.filter((item) => item.type === "education");

  if (error)
    return (
      <ErrorScreen
        title="Failed to load education"
        description="Please try again"
      />
    );

    return (
      <div className="space-y-6">
        <EducationHeader />
        {isPending ? (
          <EducationCard.Skeleton />
        ) : (
          <EducationCard.List educations={educations} />
        )}

        <CourseHeader />
        {isPending ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CourseCard.Skeleton key={index} />
          ))
        ) : (
          <CourseCard.List courses={courses} />
        )}
      </div>
    );
}
