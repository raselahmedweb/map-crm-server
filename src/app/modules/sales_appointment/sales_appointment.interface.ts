import { Types } from "mongoose";

export interface ISalesAppointment {
  _id?: Types.ObjectId;
  userId: Types.ObjectId;
  message: string;
  companyId?: Types.ObjectId; // if company profile exist
  companyInfo?: string; // if company profile does not exist
  appointDate: Date;
}
