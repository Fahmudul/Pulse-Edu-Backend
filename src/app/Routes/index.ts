import { Router } from "express";
import { AuthRoutes } from "../Modules/Auth/Auth.routes";

const router = Router();

const applicationRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
];
applicationRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
