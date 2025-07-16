import mongoose, { Schema, model } from "mongoose";
import { IMap } from "./map.interface";

const mapSchema = new Schema<IMap>(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    projectDesigner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    assignedTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
    ],
    bgImageUrl: {
      type: [String],
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    customerNotes: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Map = model<IMap>("maps", mapSchema);
