import { Types } from "mongoose";

export interface IMap {
  _id?: Types.ObjectId;
  companyId: Types.ObjectId;
  projectDesigner: Types.ObjectId;
  assignedTo: Types.ObjectId[];
  bgImageUrl: string[];
  isComplete: boolean;
  customerNotes?: string;
}
