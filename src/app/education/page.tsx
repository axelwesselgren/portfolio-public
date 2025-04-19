"use client";

import { EducationStates } from "@/components/education/education-states";
import { Section } from "@/components/layout/section";

export default function EducationScreen() {
  return (
    <Section>
      <Section.Header
        title="Education"
        description="My education background through courses and formal education"
      />
      <EducationStates />
    </Section>
  );
}
