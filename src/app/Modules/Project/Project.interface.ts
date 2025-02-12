export interface IProjectData {
  [key: string]: any;
  title: string;
  liveLink: string;
  githubLink: string;
  description: string;
  image: File | string;
  techStack: string[];
  projectTypes: string[];
}
