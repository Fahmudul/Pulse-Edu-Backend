import { Router } from "express";
import { AuthRoutes } from "../Modules/Auth/Auth.routes";
import { ProjectRoutes } from "../Modules/Project/Project.route";
import { BlogRoutes } from "../Modules/Blog/Blog.route";
import { MessageRoutes } from "../Modules/Message/Message.route";

const router = Router();

const applicationRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
];
applicationRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
