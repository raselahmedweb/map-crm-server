import { Types } from "mongoose";

export interface IProjects {
  _id?: Types.ObjectId;
  name: string;
  userId: Types.ObjectId;
  customerId: Types.ObjectId;
  isSystemCreated: boolean;
  isDeleted?: boolean;
}
