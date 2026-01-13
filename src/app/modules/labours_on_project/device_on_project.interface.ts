import { Types } from "mongoose";

export interface IItemOnProject {
  _id?: string;
  deviceId: Types.ObjectId;
  projectId: Types.ObjectId;
  price: number;
  isVisible: boolean;
  color: string;
  count: number;
}
