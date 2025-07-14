import mongoose, { model, Schema } from "mongoose";
import { IItemsOnMap } from "./items_on_map.interface";

const itemsOnMapSchema = new Schema<IItemsOnMap>(
  {
    description: {
      type: String,
      required: true,
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
    },
  },
  { timestamps: true, versionKey: false }
);

export const ItemsOnMap = model<IItemsOnMap>("itemsonmaps", itemsOnMapSchema);
