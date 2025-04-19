"use client";

import { SkillsDisplay } from "@/components/skills/skills-section";
import { Section } from "@/components/layout/section";

export default function SkillsSection() {
  return (
    <Section>
      <Section.Header
        title="Skills"
        description="My skills and technologies I have firm experience with."
      />
      <SkillsDisplay />
    </Section>
  );
}
