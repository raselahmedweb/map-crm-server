import { Types } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  ASSISTANT = "ASSISTANT",
  SALES_TECHNICIAN = "SALES_TECHNICIAN",
  SALES_SPECIALIST = "SALES_SPECIALIST",
  PROJECT_DESIGNER = "PROJECT_DESIGNER",
  COLLABORATOR = "COLLABORATOR",
  INSTALLER = "INSTALLER",
  TECHNICIAN = "TECHNICIAN",
  CUSTOMER = "CUSTOMER",
}

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  picture?: string;
  isDeleted?: boolean;
  role: Role;
  companyId?: Types.ObjectId;
}
