import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { ItemOnMapServices } from "./device_on_map.service";

const createItemOnMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnMap = await ItemOnMapServices.createItemOnMap(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "ItemOnMap created successfully",
      data: itemOnMap,
    });
  }
);

const updateItemOnMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnMapId = req.params.id;
    const payload = req.body;
    const itemOnMap = await ItemOnMapServices.updateItemOnMap(
      itemOnMapId,
      payload
    );
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "ItemOnMap updated successfully",
      data: itemOnMap,
    });
  }
);
const changePosition = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnMapId = req.params.id;
    const payload = req.body;
    const itemOnMap = await ItemOnMapServices.changePosition(
      itemOnMapId,
      payload
    );
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "ItemOnMap position updated successfully",
      data: itemOnMap,
    });
  }
);

const getAllItemOnMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const mapId = req.params.id;
    const itemOnMap = await ItemOnMapServices.getAllItemOnMap(mapId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All ItemOnMap retrieved successfully",
      data: itemOnMap,
    });
  }
);

const deleteItemOnMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnMapId = req.params.id;
    await ItemOnMapServices.deleteItemOnMap(itemOnMapId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "ItemOnMap deleted successfully",
      data: null,
    });
  }
);

export const ItemOnMapControllers = {
  createItemOnMap,
  updateItemOnMap,
  getAllItemOnMap,
  deleteItemOnMap,
  changePosition,
};
