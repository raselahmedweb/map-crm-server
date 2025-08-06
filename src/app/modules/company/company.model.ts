import { model, Schema } from "mongoose";
import { ICompany } from "./company.interface";

const companySchema = new Schema<ICompany>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
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

export const Company = model<ICompany>("companies", companySchema);
