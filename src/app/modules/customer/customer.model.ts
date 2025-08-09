import { model, Schema } from "mongoose";
import { ICustomer } from "./customer.interface";

const CustomerSchema = new Schema<ICustomer>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
    website: { type: String },
    logo: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Customer = model<ICustomer>("customers", CustomerSchema);
