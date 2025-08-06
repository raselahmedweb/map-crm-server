import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { Map } from "./map.model";
import { IMap } from "./map.interface";

const createMap = async (payload: Partial<IMap>) => {
  const map = await Map.create(payload);
  return map;
};

const updateMap = async (mapId: string, payload: Partial<IMap>) => {
  const ifMapExist = await Map.findById(mapId);

  if (!ifMapExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Map does not exist");
  }

  const newMap = await Map.findByIdAndUpdate(mapId, payload, {
    new: true,
    runValidators: true,
  });

  return newMap;
};

const getAllMap = async () => {
  const [map, total] = await Promise.all([
    Map.find({})
      .populate("companyId", "name")
      .populate("mapDesigner", "name email")
      .populate("assignedTo", "name email")
      .populate("availableDevices", "label shape price")
      .lean(),
    Map.countDocuments(),
  ]);

  return { map, total };
};

const getMapByAssignedId = async (assignedUserId: string) => {
  const map = await Map.find({ assignedTo: assignedUserId });

  return map;
};

const deleteMap = async (mapId: string) => {
  const ifMapExist = await Map.findById(mapId);

  if (!ifMapExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Map does not exist");
  }

  await Map.findByIdAndDelete(mapId);
};

export const MapServices = {
  createMap,
  updateMap,
  getAllMap,
  getMapByAssignedId,
  deleteMap,
};
