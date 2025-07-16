import { z } from "zod";
import { Types } from "mongoose";

export const createFloorPlanZodSchema = z.object({
  userId: z
    .string({ invalid_type_error: "User ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid User ID format",
    }),

  companyId: z
    .string({ invalid_type_error: "Company ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Company ID format",
    })
    .optional(),

  imageUrl: z
    .array(z.string({ invalid_type_error: "Image URL must be a string" }))
    .nonempty({ message: "At least one image URL is required" }),

  description: z
    .string({ invalid_type_error: "Description must be a string" })
    .min(1, { message: "Description is required" }),

  companyInfo: z
    .string({ invalid_type_error: "Company info must be a string" })
    .optional(),

  isMapCreated: z.boolean({
    invalid_type_error: "isMapCreated must be a boolean",
  }),
});
