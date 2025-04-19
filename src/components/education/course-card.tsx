import { Education } from "@/types/education";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export const CourseCard = ({ course }: { course: Education }) => {
  return (
    <Card className="overflow-hidden border-l-4 border-l-secondary">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{course.title}</CardTitle>
          <Badge variant="outline">
            {course.startDate} - {course.endDate}
          </Badge>
        </div>
        <CardDescription>{course.institution}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{course.description}</p>
      </CardContent>
    </Card>
  );
}

CourseCard.Skeleton = function SkeletonCourseCard() {
  return (
    <Card className="overflow-hidden border-l-4 border-l-secondary">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Skeleton className="h-6 w-[180px]" />
          <Skeleton className="h-5 w-[100px]" />
        </div>
        <Skeleton className="h-4 w-[150px] mt-1" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%] mt-2" />
      </CardContent>
    </Card>
  )
}

CourseCard.List = function CourseList({ courses }: { courses: Education[] }) {
  return (
    <div className="grid gap-4">
      {courses.map((item, index) => (
        <CourseCard key={index} course={item} />
      ))}
    </div>
  );
}