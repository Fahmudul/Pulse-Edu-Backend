import { Schema, model } from "mongoose";
import { IBlogData } from "./Blog.interface";

const BlogSchema = new Schema<IBlogData>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<IBlogData>("Blog", BlogSchema);
