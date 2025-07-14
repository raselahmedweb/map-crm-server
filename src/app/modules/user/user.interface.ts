import { Types } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  ASSISTANT = "ASSISTANT",
  SALSE_AGENT = "SALSE_AGENT",
  COLLABORATOR = "COLLABORATOR",
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
