import { Calendar } from "lucide-react";

export function SecondaryEducation() {
  return (
    <div className="border-l-2 border-primary pl-4 py-1">
      <h3 className="font-medium text-lg">Self-Directed Learning</h3>
      <p className="text-muted-foreground">Online Courses & Projects</p>
      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>2023 - Present</span>
      </div>
      <p className="mt-2 text-sm">
        Self learnt through tutorials, books, projects. Studied topics
        such as Next.js, AI, C++, Python, Java, TypeScript
      </p>
    </div>
  );
}