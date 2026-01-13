import { model, Schema } from "mongoose";
import { IItem, Shapes } from "./device.interface";

const itemSchema = new Schema<IItem>(
  {
    label: {
      type: String,
      required: true,
    },
    shape: {
      type: String,
      enum: Object.values(Shapes),
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    copies: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export const Item = model<IItem>("devices", itemSchema);
