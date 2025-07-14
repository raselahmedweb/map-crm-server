import { Types } from "mongoose";

export interface IInvitation {
  _id?: Types.ObjectId;
  email: string;
  token: string;
  used: boolean;
}
