import { Types } from "mongoose";

export interface IItemOnMap {
  _id?: string;
  itemId: Types.ObjectId;
  mapId: Types.ObjectId;
  userId: Types.ObjectId;
  salePrice?: number;
  progress?: number;
  notes?: string[];
  serial?: string;
  mac?: string;
  model?: string;
  location?: string;
  x: number;
  y: number;
}
