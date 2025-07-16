import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { FloorPlan } from "./floorplan.model";
import { IFloorPlan } from "./floorplan.interface";

const createFloorplan = async (payload: Partial<IFloorPlan>) => {
  const floorplan = await FloorPlan.create(payload);
  return floorplan;
};

const updateFloorplan = async (
  floorplanId: string,
  payload: Partial<IFloorPlan>
) => {
  const ifFloorplanIdExist = await FloorPlan.findById(floorplanId);

  if (!ifFloorplanIdExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Floorplan does not exist");
  }

  const newFloorplan = await FloorPlan.findByIdAndUpdate(floorplanId, payload, {
    new: true,
    runValidators: true,
  });

  return newFloorplan;
};

const getAllFloorplan = async () => {
  const floorplan = await FloorPlan.find({});
  const total = await FloorPlan.countDocuments();
  return { floorplan, total };
};

const deleteFloorplan = async (floorplanId: string) => {
  const ifFloorplanExist = await FloorPlan.findById(floorplanId);

  if (!ifFloorplanExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Floor plan does not exist");
  }

  await FloorPlan.findByIdAndDelete(floorplanId);
};

export const FloorplanServices = {
  createFloorplan,
  updateFloorplan,
  getAllFloorplan,
  deleteFloorplan,
};
