import { Education } from "@/types/education";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const EducationCard = ({ education }: { education: Education }) => {
  return (
    <Card className="overflow-hidden border-l-4 border-l-primary">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 bg-muted p-4 flex flex-col justify-center">
          <p className="font-semibold">{education.institution}</p>
          <p className="text-sm text-muted-foreground">
            {education.startDate} - {education.endDate}
          </p>
        </div>
        <div className="md:w-3/4 p-4">
          <h4 className="text-lg font-semibold mb-2">{education.title}</h4>
          <p className="text-muted-foreground">{education.description}</p>
        </div>
      </div>
    </Card>
  );
};

EducationCard.Skeleton = function EducationCardSkeleton() {
  return (
    <Card className="overflow-hidden border-l-4 border-l-primary/30">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 bg-muted p-4 flex flex-col justify-center gap-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="md:w-3/4 p-4">
          <Skeleton className="h-6 w-2/3 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </Card>
  );
};

EducationCard.List = function EducationList({
  educations,
}: {
  educations: Education[];
}) {
  return (
    <div className="grid gap-4">
      {educations.map((item, index) => (
        <EducationCard key={index} education={item} />
      ))}
    </div>
  );
};
