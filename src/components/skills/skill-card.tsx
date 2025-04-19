import { SkillCategory } from "@/types/skill";
import Image from "next/image";

export const SkillCard = ({ skill }: { skill: SkillCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={40}
          height={40}
          className="max-w-full max-h-full object-contain invert"
        />
      </div>
      <span className="text-sm font-medium text-center">{skill.name}</span>
    </div>
  );
}

SkillCard.List = function SkillCardList({ skills }: { skills: SkillCategory[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}