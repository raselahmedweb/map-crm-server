import { z } from "zod";

export const createItemZodSchema = z.object({
  label: z
    .string({ invalid_type_error: "Label must be a string" })
    .min(1, { message: "Label is required" }),

  shape: z
    .string({ invalid_type_error: "Shape must be a string" })
    .min(1, { message: "Shape is required" }),

  installationCost: z
    .number({ invalid_type_error: "Installation cost must be a number" })
    .nonnegative({ message: "Installation cost must be non-negative" }),

  copies: z
    .number({ invalid_type_error: "Copies must be a number" })
    .int({ message: "Copies must be an integer" })
    .nonnegative({ message: "Copies must be non-negative" }),
});
