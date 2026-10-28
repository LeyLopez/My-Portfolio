export type TrackId = 'development' | 'automation' | 'data';
export type Lang = 'es' | 'en';
export type LocalizedText = Record<Lang, string>;
export type HobbyId = 'reading' | 'languages' | 'drawing' | 'exercise';

export interface Hobby {
  id: HobbyId;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectLinks {
  repo?: string;
  demo?: string;
  docs?: string;
  cover?: string;
}

export interface Project {
  id: string;
  tracks: TrackId[];
  title: LocalizedText;
  summary: LocalizedText;
  role?: LocalizedText;
  stack: string[];
  highlights: LocalizedText[];
  links: ProjectLinks;
  status: 'done' | 'in-progress' | 'planned';
  period?: string;
}

export interface SkillGroup {
  track: TrackId;
  category: LocalizedText;
  items: string[];
}

export interface Experience {
  id: string;
  role: LocalizedText;
  organization?: string;
  period?: string;
  tracks: TrackId[];
  highlights: LocalizedText[];
}

export interface Education {
  id: string;
  program: LocalizedText;
  institution: string;
  period: string;
  inProgress?: boolean;
}

export interface ProfileLink {
  label: LocalizedText;
  href: string;
}

export interface Profile {
  name: string;
  headline: LocalizedText;
  location: LocalizedText;
  academicStatus: LocalizedText;
  email: string;
  links: ProfileLink[];
  about: LocalizedText[];
  hobbies: Hobby[];
}

export interface AreaSummary {
  id: TrackId;
  title: LocalizedText;
  description: LocalizedText;
}
