import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { FloorplanServices } from "./floorplan.service";

const createFloorplan = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const floorplan = await FloorplanServices.createFloorplan(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Floorplan scheduled successfully",
      data: floorplan,
    });
  }
);

const updateFloorplan = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const floorplanId = req.params.id;
    const payload = req.body;
    const floorplan = await FloorplanServices.updateFloorplan(
      floorplanId,
      payload
    );
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Floorplan updated successfully",
      data: floorplan,
    });
  }
);

const getAllFloorplan = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const floorplan = await FloorplanServices.getAllFloorplan();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All floorplan retrieved successfully",
      data: floorplan,
    });
  }
);

const deleteFloorplan = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const floorplanId = req.params.id;
    await FloorplanServices.deleteFloorplan(floorplanId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Floorplan deleted successfully",
      data: null,
    });
  }
);

export const FloorplanControllers = {
  createFloorplan,
  updateFloorplan,
  getAllFloorplan,
  deleteFloorplan,
};
