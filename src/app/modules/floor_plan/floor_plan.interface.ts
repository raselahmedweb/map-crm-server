import { Types } from "mongoose";

export interface IFloorPlan {
  _id?: Types.ObjectId;
  companyId?: Types.ObjectId; // if company exist
  imageUrl: string[];
  description: string;
  companyInfo?: string; // if the company is new and company profile does not exist
  isMapCreated: boolean;
}
