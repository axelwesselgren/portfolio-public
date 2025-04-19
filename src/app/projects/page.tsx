"use client";

import { TagProvider } from "@/context/tag-provider";
import { ProjectStates } from "@/components/projects/project-states";
import { Section } from "@/components/layout/section";

export default function ProjectsSection() {
  return (
    <TagProvider>
      <Section>
        <Section.Header
          title="Projects"
          description="Explore my recent work and personal projects. Each project represents my skills, interests, and growth as a developer."
        />
        <ProjectStates />
      </Section>
    </TagProvider>
  );
}
