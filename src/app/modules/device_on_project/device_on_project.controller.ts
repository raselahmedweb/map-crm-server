import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { ItemOnProjectServices } from "./device_on_project.service";

const createItemOnProject = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnProject = await ItemOnProjectServices.createItemOnProject(
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "ItemOnProject created successfully",
      data: itemOnProject,
    });
  }
);

const updateItemOnProject = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnProjectId = req.params.id;
    const payload = req.body;
    const itemOnProject = await ItemOnProjectServices.updateItemOnProject(
      itemOnProjectId,
      payload
    );
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "ItemOnProject updated successfully",
      data: itemOnProject,
    });
  }
);
const getAllItemOnProject = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const ProjectId = req.params.id;
    const itemOnProject = await ItemOnProjectServices.getAllItemOnProject(
      ProjectId
    );
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All ItemOnProject retrieved successfully",
      data: itemOnProject,
    });
  }
);

const deleteItemOnProject = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const itemOnProjectId = req.params.id;
    await ItemOnProjectServices.deleteItemOnProject(itemOnProjectId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "ItemOnProject deleted successfully",
      data: null,
    });
  }
);

export const ItemOnProjectControllers = {
  createItemOnProject,
  updateItemOnProject,
  getAllItemOnProject,
  deleteItemOnProject,
};
