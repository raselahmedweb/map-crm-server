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
      unique: true,
    },
    website: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export const Company = model<ICompany>("Company", companySchema);
