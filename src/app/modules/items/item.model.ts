import { model, Schema } from "mongoose";
import { IItem } from "./item.interface";

const itemSchema = new Schema<IItem>(
  {
    label: {
      type: String,
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
    installationCost: {
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

export const Item = model<IItem>("items", itemSchema);
