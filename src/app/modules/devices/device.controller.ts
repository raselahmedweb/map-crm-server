import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { ItemServices } from "./device.service";

const createItem = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const item = await ItemServices.createItem(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Item created successfully",
      data: item,
    });
  }
);

const updateItem = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemId = req.params.id;
    const payload = req.body;
    const item = await ItemServices.updateItem(itemId, payload);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Item updated successfully",
      data: item,
    });
  }
);

const getAllItem = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const item = await ItemServices.getAllItem();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All Item retrieved successfully",
      data: item,
    });
  }
);
const getAllItemWithoutPrice = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const item = await ItemServices.getAllItemWithoutPrice();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All Item retrieved successfully",
      data: item,
    });
  }
);

const deleteItem = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemId = req.params.id;
    await ItemServices.deleteItem(itemId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Item deleted successfully",
      data: null,
    });
  }
);

export const ItemControllers = {
  createItem,
  updateItem,
  getAllItem,
  getAllItemWithoutPrice,
  deleteItem,
};
