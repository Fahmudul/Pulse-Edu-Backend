import { Router } from "express";
import { ProjectControllers } from "./Project.controller";

const route = Router();
// Create a project route
route.post("/create-project", ProjectControllers.CreateProject);
// Get all projects route
route.get("/get-all-projects", ProjectControllers.GetProject);
// Get single project route
route.get("/get-single-project/:id", ProjectControllers.GetSingleProject);
// Update project route
route.put("/update-project/:id", ProjectControllers.UpdateProject);
// Delete project route
route.delete("/delete-project/:id", ProjectControllers.DeleteProject);

export const ProjectRoutes = route;