import { Types } from "mongoose";

export interface IItemOnProject {
  _id?: string;
  itemId: Types.ObjectId;
  projectId: Types.ObjectId;
  price: number;
  isVisible: boolean;
  color: string;
  count: number;
}
