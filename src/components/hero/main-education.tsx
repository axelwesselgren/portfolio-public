import { Calendar, MapPin } from "lucide-react";

export function MainEducation() {
  return (
    <div className="border-l-2 border-primary pl-4 py-1">
      <h3 className="font-medium text-lg">Technical Science</h3>
      <p className="text-muted-foreground">Nacka Gymnasium</p>
      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>2023 - Present</span>
      </div>
      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span>Stockholm, Sweden</span>
      </div>
      <p className="mt-2 text-sm">
        Studied a variety of programming courses in topics, frameworks
        and languages such as Java, Swing, Python, Flask, SQL.
      </p>
    </div>
  );
}