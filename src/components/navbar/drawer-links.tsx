import Link from "next/link";
import { Link as NavLink } from "@/types/link";
import { ArrowRight } from "lucide-react";
import { useDrawer } from "@/context/drawer-provider";

export function DrawerLinks({
  links,
}: {
  links: NavLink[];
}) {
  const { closeDrawer } = useDrawer();

  return links.map((link) => (
    <Link
      href={link.href}
      key={link.href}
      onClick={closeDrawer}
      className="flex justify-between items-center p-3 text-lg font-semibold border-b border-gray-750"
    >
      {link.name} <ArrowRight className="w-4 h-4" />
    </Link>
  ));
}
