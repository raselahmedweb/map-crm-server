import mongoose, { Schema, model } from "mongoose";
import { ISalesAppointment } from "./sales_appointment.interface";

const salesAppointmentSchema = new Schema<ISalesAppointment>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
    },
    companyInfo: {
      type: String,
    },
    appointDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const SalesAppointment = model<ISalesAppointment>(
  "salesappointments",
  salesAppointmentSchema
);
