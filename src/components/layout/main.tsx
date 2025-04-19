import { Navbar } from "@/components/navbar/navbar";
import { Link } from "@/types/link";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/skills",
    name: "Skills",
  },
  {
    href: "/education",
    name: "Education",
  },
  {
    href: "/contact",
    name: "Contact",
  },
] satisfies Link[];

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar links={links} />
      {children}
    </>
  );
}