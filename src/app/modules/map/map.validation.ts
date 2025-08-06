import { z } from "zod";
import { Types } from "mongoose";

export const createMapZodSchema = z.object({
  name: z
    .string({ invalid_type_error: "Map name must be a string" })
    .min(1, { message: "Map name is required" }),
  companyId: z
    .string({ invalid_type_error: "Company ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Company ID format",
    }),

  mapDesigner: z
    .string({ invalid_type_error: "Project Designer ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Project Designer ID format",
    }),

  assignedTo: z
    .array(
      z
        .string({ invalid_type_error: "Assigned user ID must be a string" })
        .refine((val) => Types.ObjectId.isValid(val), {
          message: "Invalid Assigned User ID format",
        })
    )
    .nonempty({ message: "At least one user must be assigned" }),

  bgImageUrl: z
    .string({ invalid_type_error: "Background image URL must be a string" })
    .nonempty({ message: "At least one background image URL is required" }),

  availableDevices: z
    .array(
      z
        .string({ invalid_type_error: "Device ID must be a string" })
        .refine((val) => Types.ObjectId.isValid(val), {
          message: "Invalid Device ID format",
        })
    )
    .nonempty({ message: "At least one device must be available" }),

  isComplete: z
    .boolean({ invalid_type_error: "isComplete must be a boolean" })
    .optional(),

  customerNotes: z
    .string({ invalid_type_error: "Customer notes must be a string" })
    .optional(),
});
