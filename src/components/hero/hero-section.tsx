import { GraduationCap } from "lucide-react";
import { CTAIntro } from "@/components/hero/cta-intro";
import { IntroHeader } from "@/components/hero/intro-header";
import { MainEducation } from "@/components/hero/main-education";
import { SecondaryEducation } from "@/components/hero/secondary-education";
import { SocialLinks } from "@/components/hero/social-links";
import { FullEducationLink } from "@/components/hero/full-education-link";
import { SocialLink } from "@/types/link";

export function Hero({ links }: { links: SocialLink[] }) {
  return (
    <div className="container mx-auto mt-20 px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
      <div className="flex flex-col justify-center space-y-4">
        <IntroHeader />
        <CTAIntro />
        <SocialLinks links={links}/>
      </div>

      <div className="w-full lg:w-1/3 rounded-lg p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="space-y-6">
          <MainEducation />
          <SecondaryEducation />
        </div>

        <div className="mt-4">
          <FullEducationLink />
        </div>
      </div>
    </div>
  );
}