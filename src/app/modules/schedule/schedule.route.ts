import express from "express";
import { ScheduleController } from "./schedule.controller";
const router = express.Router();

router.post("/", ScheduleController.createSchedule);

export const scheduleRoutes = router;
