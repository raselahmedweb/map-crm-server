import mongoose, { Schema, model } from "mongoose";
import { IFloorPlan } from "./floorplan.interface";

const floorPlanSchema = new Schema<IFloorPlan>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
    },
    imageUrl: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyInfo: {
      type: String,
    },
    isMapCreated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const FloorPlan = model<IFloorPlan>("floorplans", floorPlanSchema);
