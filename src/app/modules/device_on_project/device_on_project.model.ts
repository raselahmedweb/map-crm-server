import mongoose, { model, Schema } from "mongoose";
import { IItemOnProject } from "./device_on_project.interface";

const itemOnProjectSchema = new Schema<IItemOnProject>(
  {
    deviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "devices",
      required: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projects",
      required: true,
    },
    price: {
      type: Number,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

export const ItemOnProject = model<IItemOnProject>(
  "deviceonprojects",
  itemOnProjectSchema
);
