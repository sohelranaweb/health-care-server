import express from "express";
import { ScheduleController } from "./schedule.controller";
const router = express.Router();

router.get("/", ScheduleController.schedulesForDoctor);
router.delete("/:id", ScheduleController.deleteScheduleFromDB);
router.post("/", ScheduleController.createSchedule);

export const scheduleRoutes = router;
