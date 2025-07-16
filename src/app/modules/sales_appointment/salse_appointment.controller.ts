import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { SalesAppointmentServices } from "./sales_appointment.service";

const createSalesAppointment = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const appointment = await SalesAppointmentServices.createSalesAppointment(
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Appointment scheduled successfully",
      data: appointment,
    });
  }
);

const getAllAppointment = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const appointment = await SalesAppointmentServices.getAllAppointment();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All appointment retrieved successfully",
      data: appointment,
    });
  }
);

const getAppointmentByUserId = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    const appointment = await SalesAppointmentServices.getAppointmentByUserId(
      userId
    );
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Appointment retrieved successfully",
      data: appointment,
    });
  }
);

const deleteAppointment = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const appointmentId = req.params.id;
    await SalesAppointmentServices.deleteAppointment(appointmentId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Appointment deleted successfully",
      data: null,
    });
  }
);

export const SalesAppointmentControllers = {
  createSalesAppointment,
  getAllAppointment,
  getAppointmentByUserId,
  deleteAppointment,
};
