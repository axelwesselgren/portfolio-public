import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTAIntro() {
  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <Link href="/projects" className={buttonVariants()}>
        View My Work
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
        Contact Me
      </Link>
    </div>
  );
}
