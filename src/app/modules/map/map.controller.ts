import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { MapServices } from "./map.service";

const createMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const map = await MapServices.createMap(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Map created successfully",
      data: map,
    });
  }
);

const updateMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const mapId = req.params.id;
    const payload = req.body;
    const map = await MapServices.updateMap(mapId, payload);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Map updated successfully",
      data: map,
    });
  }
);

const getAllMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const map = await MapServices.getAllMap();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All Map retrieved successfully",
      data: map,
    });
  }
);

const getMapByAssignedId = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const assignedUserId = req.params.id;
    const map = await MapServices.getMapByAssignedId(assignedUserId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Map retrieved successfully",
      data: map,
    });
  }
);

const getMapById = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const assignedUserId = req.params.id;
    const map = await MapServices.getMapById(assignedUserId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Map retrieved successfully",
      data: map,
    });
  }
);

const deleteMap = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const MapId = req.params.id;
    await MapServices.deleteMap(MapId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Map deleted successfully",
      data: null,
    });
  }
);

export const MapControllers = {
  createMap,
  updateMap,
  getAllMap,
  getMapByAssignedId,
  getMapById,
  deleteMap,
};
