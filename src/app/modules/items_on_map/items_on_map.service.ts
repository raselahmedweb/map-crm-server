import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { ItemOnMap } from "./items_on_map.model";
import { IItemOnMap } from "./items_on_map.interface";

const createItemOnMap = async (payload: Partial<IItemOnMap>) => {
  const itemOnMap = await ItemOnMap.create(payload);
  return itemOnMap;
};

const updateItemOnMap = async (
  itemOnMapId: string,
  payload: Partial<IItemOnMap>
) => {
  const ifItemOnMapExist = await ItemOnMap.findById(itemOnMapId);

  if (!ifItemOnMapExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "ItemOnMap does not exist");
  }

  const newItemOnMap = await ItemOnMap.findByIdAndUpdate(itemOnMapId, payload, {
    new: true,
    runValidators: true,
  });

  return newItemOnMap;
};
const changePosition = async (
  itemOnMapId: string,
  payload: Partial<IItemOnMap>
) => {
  const ifItemOnMapExist = await ItemOnMap.findById(itemOnMapId);

  if (!ifItemOnMapExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "ItemOnMap does not exist");
  }

  const newItemOnMap = await ItemOnMap.findByIdAndUpdate(itemOnMapId, payload, {
    new: true,
    runValidators: true,
  });

  return newItemOnMap;
};

const getAllItemOnMap = async (mapId: string) => {
  const itemOnMap = await ItemOnMap.find({ mapId });
  const total = await ItemOnMap.countDocuments();
  return { itemOnMap, total };
};

const deleteItemOnMap = async (itemOnMapId: string) => {
  const ifItemOnMapExist = await ItemOnMap.findById(itemOnMapId);

  if (!ifItemOnMapExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "ItemOnMap does not exist");
  }

  await ItemOnMap.findByIdAndDelete(itemOnMapId);
};

export const ItemOnMapServices = {
  createItemOnMap,
  updateItemOnMap,
  getAllItemOnMap,
  deleteItemOnMap,
  changePosition,
};
