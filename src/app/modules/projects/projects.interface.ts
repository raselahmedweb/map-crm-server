import { Types } from "mongoose";

export interface IProjects {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  companyId?: Types.ObjectId;
  imageUrl: string[];
  name: string;
  isMapCreated: boolean;
  isDeleted?: boolean;
}
