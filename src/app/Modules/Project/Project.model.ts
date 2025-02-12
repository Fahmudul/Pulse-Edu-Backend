import { Schema, model } from "mongoose";
import { IProjectData } from "./Project.interface";

const ProjectSchema = new Schema<IProjectData>(
  {
    description: { type: String },
    title: { type: String },
    liveLink: { type: String },
    githubLink: { type: String },
    image: { type: String },
    techStack: { type: [String] },
    projectTypes: { type: [String] },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProjectData>("Project", ProjectSchema);
