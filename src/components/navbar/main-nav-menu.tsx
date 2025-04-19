import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link as NavLink } from "@/types/link";
import Link from "next/link";

export function MainNavMenu({ links }: { links: NavLink[] }) {
  return (
    <NavigationMenu className="hidden md:flex flex-1 justify-center">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} passHref className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
              {link.name}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
