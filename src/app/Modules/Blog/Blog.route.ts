import { Router } from "express";
import { BlogControllers } from "./Blog.controller";

const route = Router();
// Create a project route
route.post("/create-blog", BlogControllers.CreateBlog);
// Get all projects route
route.get("/get-all-blogs", BlogControllers.GetBlog);
// Get single project route
route.get("/get-single-blog/:id", BlogControllers.GetSingleBlog);
// Update project route
route.put("/update-blog/:id", BlogControllers.UpdateBlog);
// Delete project route
route.delete("/delete-blog/:id", BlogControllers.DeleteBlog);

export const BlogRoutes = route;