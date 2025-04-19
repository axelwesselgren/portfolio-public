import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FullEducationLink() {
  return (
    <Link href="/education">
      <Button variant="link" className="p-0 h-auto text-primary">
        See full education details
        <ArrowRight className="ml-1 h-3 w-3" />
      </Button>
    </Link>
  );
}