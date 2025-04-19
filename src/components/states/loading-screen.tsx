import { Loader2 } from "lucide-react";

export function LoadingScreen({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-16 px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="flex justify-center mb-2">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
