import { model, Schema } from "mongoose";
import { IInvitation } from "./invitation.interface";

const invitationSchema = new Schema<IInvitation>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    token: {
      type: String,
      required: true,
    },
    used: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export const Invitation = model<IInvitation>("Invitation", invitationSchema);
