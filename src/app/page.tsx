import { Hero } from "@/components/hero/hero-section";
import { ProjectsLanding } from "@/components/projects/landing/projects-landing";
import { dottedBackground } from "@/components/style/patterns";
import { SocialLink } from "@/types/link";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    href: "https://github.com/axelwesselgren",
    icon: <Github className="h-5 w-5" />,
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/axel-l%C3%B6nnby-wesselgren-4486661b9/",
    icon: <Linkedin className="h-5 w-5" />,
    name: "LinkedIn",
  },
  {
    href: "mailto:axel.wesselgren@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    name: "Email",
  }
] satisfies SocialLink[];

export default function Home() {
  return (
    <div
      className="w-full py-4 lg:py-20 h-full"
      style={{
        backgroundImage: dottedBackground,
      }}
    >
      <Hero links={links} />
      <ProjectsLanding />
    </div>
  );
}