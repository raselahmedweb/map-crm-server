import { z } from "zod";
import { Types } from "mongoose";

export const createMapZodSchema = z.object({
  companyId: z
    .string({ invalid_type_error: "Company ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Company ID format",
    }),

  projectDesigner: z
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
    .array(
      z.string({ invalid_type_error: "Background image URL must be a string" })
    )
    .nonempty({ message: "At least one background image URL is required" }),

  isComplete: z
    .boolean({ invalid_type_error: "isComplete must be a boolean" })
    .optional(),

  customerNotes: z
    .string({ invalid_type_error: "Customer notes must be a string" })
    .optional(),
});
