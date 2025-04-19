import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SocialLink } from "@/types/link";

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex gap-4 mt-4">
      {links.map((link) => (
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          key={link.href}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          {link.icon}
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
    </div>
  );
}
