import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { ItemOnProject } from "./items_on_project.model";
import { IItemOnProject } from "./items_on_project.interface";

const createItemOnProject = async (payload: Partial<IItemOnProject>) => {
  const itemOnProject = await ItemOnProject.create(payload);
  return itemOnProject;
};

const updateItemOnProject = async (
  itemOnProjectId: string,
  payload: Partial<IItemOnProject>
) => {
  const ifItemOnProjectExist = await ItemOnProject.findById(itemOnProjectId);

  if (!ifItemOnProjectExist) {
    throw new AppError(
      httpStatusCode.NOT_FOUND,
      "ItemOnProject does not exist"
    );
  }

  const newItemOnProject = await ItemOnProject.findByIdAndUpdate(
    itemOnProjectId,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );

  return newItemOnProject;
};

const getAllItemOnProject = async (ProjectId: string) => {
  const itemOnProject = await ItemOnProject.find({ ProjectId });
  const total = await ItemOnProject.countDocuments();
  return { itemOnProject, total };
};

const deleteItemOnProject = async (itemOnProjectId: string) => {
  const ifItemOnProjectExist = await ItemOnProject.findById(itemOnProjectId);

  if (!ifItemOnProjectExist) {
    throw new AppError(
      httpStatusCode.NOT_FOUND,
      "ItemOnProject does not exist"
    );
  }

  await ItemOnProject.findByIdAndDelete(itemOnProjectId);
};

export const ItemOnProjectServices = {
  createItemOnProject,
  updateItemOnProject,
  getAllItemOnProject,
  deleteItemOnProject,
};
