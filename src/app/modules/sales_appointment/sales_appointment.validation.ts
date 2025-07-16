import { z } from "zod";
import { Types } from "mongoose";

export const createSalesAppointmentZodSchema = z.object({
  userId: z
    .string({ invalid_type_error: "User ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid User ID format",
    }),

  message: z
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be a string",
    })
    .min(1, "Message cannot be empty"),

  companyId: z
    .string({ invalid_type_error: "Company ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Company ID format",
    })
    .optional(),

  companyInfo: z
    .string({ invalid_type_error: "Company info must be a string" })
    .optional(),

  appointDate: z.preprocess(
    (val) =>
      typeof val === "string" || val instanceof Date ? new Date(val) : val,
    z.date({ invalid_type_error: "Appoint date must be a valid date" })
  ),
});
