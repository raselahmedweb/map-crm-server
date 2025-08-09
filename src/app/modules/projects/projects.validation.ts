import { z } from "zod";
import { Types } from "mongoose";

export const createProjectsZodSchema = z.object({
  userId: z
    .string({ invalid_type_error: "User ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid User ID format",
    }),

  customerId: z
    .string({ invalid_type_error: "customer ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid customer ID format",
    })
    .optional(),

  name: z
    .string({ invalid_type_error: "Name must be a string" })
    .min(1, { message: "Name is required" }),
});
