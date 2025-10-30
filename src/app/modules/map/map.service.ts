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
    Map.find({ isDeleted: false })
      .populate("companyId", "name")
      .populate("mapDesigner", "name email")
      .populate("assignedTo", "name email")
      .populate("availableDevices", "label shape price")
      .lean(),
    Map.countDocuments({ isDeleted: false }),
  ]);

  return { map, total };
};

const getMapByAssignedId = async (assignedUserId: string) => {
  const map = await Map.find({ assignedTo: assignedUserId, isDeleted: false })
    .populate("companyId", "name")
    .populate("mapDesigner", "name email")
    .populate("assignedTo", "name email")
    .populate("availableDevices", "label shape price")
    .lean();

  return map;
};
const getMapById = async (id: string) => {
  const map = await Map.findById(id)
    .populate("companyId", "name")
    .populate("mapDesigner", "name email")
    .populate("assignedTo", "name email")
    .populate("availableDevices", "label shape price")
    .lean();

  return map;
};
const getMapByProjectId = async (id: string) => {
  const map = await Map.find({ projectId: id })
    .populate("companyId", "name")
    .populate("mapDesigner", "name email")
    .populate("assignedTo", "name email")
    .populate("availableDevices", "label shape price")
    .lean();

  return map;
};

const deleteMap = async (mapId: string) => {
  const ifMapExist = await Map.findById(mapId);

  if (!ifMapExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Map does not exist");
  }

  await Map.findByIdAndUpdate(
    mapId,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );
};

export const MapServices = {
  createMap,
  updateMap,
  getAllMap,
  getMapByAssignedId,
  getMapById,
  getMapByProjectId,
  deleteMap,
};
