import mongoose, { Schema, model } from "mongoose";
import { IProjects } from "./projects.interface";

const projectsSchema = new Schema<IProjects>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
    },
    imageUrl: {
      type: [String],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isMapCreated: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Projects = model<IProjects>("projects", projectsSchema);
