import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ScheduleService } from "./schedule.service";
import pick from "../../helpers/pick";

const createSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await ScheduleService.createSchedule(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Schedule created successfully",
    data: result,
  });
});

const schedulesForDoctor = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ["startDateTime", "endDateTime"]); // filtering
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]); // pagination and sorting

  const result = await ScheduleService.schedulesForDoctor(filters, options);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Schedule retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const deleteScheduleFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ScheduleService.deleteScheduleFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Schedule deleted successfully",
    data: result,
  });
});

export const ScheduleController = {
  createSchedule,
  schedulesForDoctor,
  deleteScheduleFromDB,
};
