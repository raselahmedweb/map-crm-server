import { Types } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  ASSISTANT = "ASSISTANT",
  SALSE_TECHNICIAN = "SALSE_TECHNICIAN",
  SALSE_SPECIALIST = "SALSE_SPECIALIST",
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
  isVerified?: boolean;
  role: Role;
  companyId?: Types.ObjectId;
}
