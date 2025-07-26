import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { PhoneNumberModel } from "./whatsapp-reminder.model";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

export const createPhone = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const phone = await PhoneNumberModel.create(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Phone created successfully",
      data: phone,
    });
  }
);

export const getPhones = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const phones = await PhoneNumberModel.find({});
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Phone retrieved successfully",
      data: phones,
    });
  }
);

export const deletePhone = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    await PhoneNumberModel.findByIdAndDelete(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Phone deleted successfully",
      data: null,
    });
  }
);

export const PhoneControllers = {
  createPhone,
  getPhones,
  deletePhone,
};
