import mongoose, { Schema, model } from "mongoose";
import { IMap } from "./map.interface";

const mapSchema = new Schema<IMap>(
  {
    name: {
      type: String,
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    mapDesigner: {
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
      type: String,
      required: true,
    },
    availableDevices: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "items",
        },
      ],
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
