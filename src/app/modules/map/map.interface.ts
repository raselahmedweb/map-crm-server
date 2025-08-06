import { Types } from "mongoose";

export interface IMap {
  _id?: Types.ObjectId;
  name: string;
  companyId: Types.ObjectId;
  mapDesigner: Types.ObjectId;
  assignedTo: Types.ObjectId[];
  bgImageUrl: string;
  availableDevices: Types.ObjectId[];
  isComplete: boolean;
  customerNotes?: string;
}
