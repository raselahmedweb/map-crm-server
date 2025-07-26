import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import httpStatus from "http-status-codes";
import { ReminderModel } from "./whatsapp-reminder.model";
import { sendResponse } from "../../utils/sendResponse";

export const createReminder = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const reminder = await ReminderModel.create(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Reminder created successfully",
      data: reminder,
    });
  }
);

export const getReminders = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const reminders = await ReminderModel.find();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Reminders retrieved successfully",
      data: reminders,
    });
  }
);

export const deleteReminder = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    await ReminderModel.findByIdAndDelete(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Reminder deleted successfully",
      data: null,
    });
  }
);

export const ReminderControllers = {
  createReminder,
  getReminders,
  deleteReminder,
};
