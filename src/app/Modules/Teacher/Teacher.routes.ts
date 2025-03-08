import { Router } from "express";
import { TeacherControllers } from "./Teacher.controller";
const router = Router();

router.post("/save-availability", TeacherControllers.SaveAvailability);
router.get("/get-teacher-details/:id", TeacherControllers.GetTeacherDetails);
router.get(
  "/get-teacher-details/:email",
  TeacherControllers.GetMeTeacherDetails
);
router.get(
  "/get-teacher-availability/:email",
  TeacherControllers.GetAvailability
);
router.get("/:id", TeacherControllers.getSingleTeacher);
router.get("/get-teacher-calendar/:id", TeacherControllers.getTeacherCalendar);
router.get("/", TeacherControllers.GetAllTeacher);

export const TeacherRoutes = router;
