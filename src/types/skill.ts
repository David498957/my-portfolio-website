
 export type Accent = "purple" | "green";
export interface Skill {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  icon: React.ReactNode;
  offset: string; // staggered vertical offset on desktop
}