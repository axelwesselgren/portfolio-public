import { BookOpen } from "lucide-react";

export function CourseHeader() {
  return (
    <div className="flex items-center gap-2">
      <BookOpen className="h-6 w-6 text-primary" />
      <h3 className="text-2xl font-semibold">Courses</h3>
    </div>
  );
}
