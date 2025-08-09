import mongoose, { model, Schema } from "mongoose";
import { IItemOnProject } from "./items_on_project.interface";

const itemOnProjectSchema = new Schema<IItemOnProject>(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
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
    color: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

export const ItemOnProject = model<IItemOnProject>(
  "itemonproject",
  itemOnProjectSchema
);
