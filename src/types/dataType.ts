import { StaticImageData } from "next/image";

export type SkillItem = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export enum ProjectType {
  Internal = "Internal Project",
  Collaboration = "Collaboration Project",
  Personal = "Personal Project",
}

export type Project = {
  id: number;
  title: string;
  type: ProjectType;
  date: string;
  technology: string[];
  description: string;
  features: string[];
  image: StaticImageData[];
  link: ProjectType | string;
};
