import { ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function ProjectLinks({ githubUrl, liveUrl }: { githubUrl?: string; liveUrl?: string }) {
  return (
    <>
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "sm", variant: "outline" })}
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </Link>
      )}
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "sm" })}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Live
        </Link>
      )}
    </>
  );
}