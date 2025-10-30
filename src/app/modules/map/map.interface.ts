import { Types } from "mongoose";

export interface IMap {
  _id?: Types.ObjectId;
  name: string;
  projectId: Types.ObjectId;
  assignedTo: Types.ObjectId[];
  bgImageUrl: string;
  isComplete: boolean;
  isDeleted: boolean;
  customerNotes?: string;
}
