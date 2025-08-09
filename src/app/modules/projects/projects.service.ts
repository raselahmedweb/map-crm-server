import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { Projects } from "./projects.model";
import { IProjects } from "./projects.interface";

const createProjects = async (payload: Partial<IProjects>) => {
  const projects = await Projects.create(payload);
  return projects;
};

const updateProjects = async (
  projectId: string,
  payload: Partial<IProjects>
) => {
  const ifProjectsIdExist = await Projects.findById(projectId);

  if (!ifProjectsIdExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Projects does not exist");
  }

  const newProjects = await Projects.findByIdAndUpdate(projectId, payload, {
    new: true,
    runValidators: true,
  });

  return newProjects;
};

const getAllProjects = async () => {
  const projects = await Projects.find({})
    .populate("userId", "name email picture")
    .populate("customerId", "name");
  const total = await Projects.countDocuments();
  return { projects, total };
};

const getProject = async (projectId: string) => {
  const project = await Projects.findById(projectId)
    .populate("userId", "name email picture")
    .populate("customerId", "name");
  return project;
};

const deleteProjects = async (projectId: string) => {
  const ifProjectsExist = await Projects.findById(projectId);

  if (!ifProjectsExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Projects does not exist");
  }

  await Projects.findByIdAndDelete(projectId);
};

export const ProjectsServices = {
  createProjects,
  updateProjects,
  getAllProjects,
  getProject,
  deleteProjects,
};
