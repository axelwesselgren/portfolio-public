import { GraduationCap } from "lucide-react";

export function EducationHeader() {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="h-6 w-6 text-primary" />
      <h3 className="text-2xl font-semibold">Education</h3>
    </div>
  );
}