import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { Item } from "./device.model";
import { IItem } from "./device.interface";

const createItem = async (payload: Partial<IItem>) => {
  const item = await Item.create(payload);
  return item;
};

const updateItem = async (itemId: string, payload: Partial<IItem>) => {
  const ifItemExist = await Item.findById(itemId);

  if (!ifItemExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Item does not exist");
  }

  const newItem = await Item.findByIdAndUpdate(itemId, payload, {
    new: true,
    runValidators: true,
  });

  return newItem;
};

const getAllItem = async () => {
  const item = await Item.find({});
  const total = await Item.countDocuments();
  return { item, total };
};
const getAllItemWithoutPrice = async () => {
  const item = await Item.find({}).select("-price");
  const total = await Item.countDocuments();
  return { item, total };
};

const deleteItem = async (itemId: string) => {
  const ifItemExist = await Item.findById(itemId);

  if (!ifItemExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Item does not exist");
  }

  await Item.findByIdAndDelete(itemId);
};

export const ItemServices = {
  createItem,
  updateItem,
  getAllItem,
  getAllItemWithoutPrice,
  deleteItem,
};
