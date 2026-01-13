import mongoose, { model, Schema } from "mongoose";
import { IItemOnMap } from "./device_on_map.interface";

const itemOnMapSchema = new Schema<IItemOnMap>(
  {
    deviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "devices",
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
    salePrice: {
      type: Number,
    },
    progress: {
      type: Number,
    },
    notes: [
      {
        type: String,
      },
    ],
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

export const ItemOnMap = model<IItemOnMap>("itemonmap", itemOnMapSchema);
