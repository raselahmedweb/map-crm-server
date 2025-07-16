import mongoose, { model, Schema } from "mongoose";
import { IItemsOnMap } from "./items_on_map.interface";

const itemsOnMapSchema = new Schema<IItemsOnMap>(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
      required: true,
    },
    mapId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "maps",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    location: {
      type: String,
    },
    progress: {
      type: Number,
    },
    notes: {
      type: Number,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const ItemsOnMap = model<IItemsOnMap>("itemsonmaps", itemsOnMapSchema);
