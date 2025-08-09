import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { CustomerServices } from "./customer.service";

const createCustomer = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const customer = await CustomerServices.createCustomer(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Customer created successfully",
      data: customer,
    });
  }
);

const updateCustomer = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const CustomerId = req.params.id;
    const payload = req.body;
    const decodedToken = req.user;
    const customer = await CustomerServices.updateCustomer(
      CustomerId,
      payload,
      decodedToken
    );
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Customer updated successfully",
      data: customer,
    });
  }
);

const getCustomer = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const customer = await CustomerServices.getCustomer();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Customer retrieved successfully",
      data: customer,
    });
  }
);

const deleteCustomer = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const CustomerId = req.params.id;
    const decodedToken = req.user;
    await CustomerServices.deleteCustomer(CustomerId, decodedToken);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Customer deleted successfully",
      data: null,
    });
  }
);

export const CustomerControllers = {
  createCustomer,
  updateCustomer,
  getCustomer,
  deleteCustomer,
};
