import { type Skill } from "../types/skill";
import { PenTool, Code2, Fingerprint } from "lucide-react";
export const SKILLS: Skill[] = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive, immersive interfaces with a focus on deep aesthetic resonance and seamless user journeys.",
    tags: ["Figma", "Prototyping"],
    accent: "purple",
    icon: <PenTool size={16} />,
    offset: "md:mt-0",
  },
  {
    title: "Web Development",
    description:
      "Engineering robust, high-performance frontend architectures using modern frameworks and precise styling.",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind"],
    accent: "green",
    icon: <Code2 size={16} />,
    offset: "md:mt-8",
  },
  {
    title: "Brand Identity",
    description:
      "Distilling complex concepts into striking visual identities that command attention in digital spaces.",
    tags: ["Strategy", "Typography"],
    accent: "purple",
    icon: <Fingerprint size={16} />,
    offset: "md:-mt-1",
  },
];
