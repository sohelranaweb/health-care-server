import { Request, Response } from "express";

import { DoctorScheduleService } from "./doctorSchedule.service";
import sendResponse from "../../shared/sendResponse";
import { IJwtPayload } from "../../types/common";
import catchAsync from "../../shared/catchAsync";

const createDoctorSchedule = catchAsync(
  async (req: Request & { user?: IJwtPayload }, res: Response) => {
    const user = req.user;
    const result = await DoctorScheduleService.createDoctorSchedule(
      user as IJwtPayload,
      req.body
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Doctor Schedule created successfully",
      data: result,
    });
  }
);

export const DoctorScheduleController = {
  createDoctorSchedule,
};
