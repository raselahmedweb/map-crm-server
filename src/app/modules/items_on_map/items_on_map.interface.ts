import { Types } from "mongoose";

export interface IItemsOnMap {
  _id?: string;
  itemId: Types.ObjectId;
  mapId: Types.ObjectId;
  userId: Types.ObjectId;
  location?: string;
  progress?: number;
  notes?: string;
  x: number;
  y: number;
}
