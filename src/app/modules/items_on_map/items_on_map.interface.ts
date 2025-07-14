import { Types } from "mongoose";

export interface IItemsOnMap {
  _id?: string;
  itemId: Types.ObjectId;
  mapId: Types.ObjectId;
  userId: Types.ObjectId;
  description: string;
  domElementId?: string;
  isFinished: boolean;
  x: number;
  y: number;
}
