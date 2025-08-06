import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { ProjectsServices } from "./projects.service";

const createProjects = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const projects = await ProjectsServices.createProjects(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Projects scheduled successfully",
      data: projects,
    });
  }
);

const updateProjects = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const ProjectsId = req.params.id;
    const payload = req.body;
    const projects = await ProjectsServices.updateProjects(ProjectsId, payload);
    sendResponse(res, {
      statusCode: httpStatusCode.CREATED,
      success: true,
      message: "Projects updated successfully",
      data: projects,
    });
  }
);

const getAllProjects = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const projects = await ProjectsServices.getAllProjects();
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "All Projects retrieved successfully",
      data: projects,
    });
  }
);

const getProject = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const projectId = req.params.id;
    const project = await ProjectsServices.getProject(projectId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Project retrieved successfully",
      data: project,
    });
  }
);

const deleteProjects = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const ProjectsId = req.params.id;
    await ProjectsServices.deleteProjects(ProjectsId);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Projects deleted successfully",
      data: null,
    });
  }
);

export const ProjectsControllers = {
  createProjects,
  updateProjects,
  getAllProjects,
  getProject,
  deleteProjects,
};
