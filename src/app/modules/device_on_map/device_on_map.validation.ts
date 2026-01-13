import { z } from "zod";
import { Types } from "mongoose";

export const createItemOnMapZodSchema = z.object({
  itemId: z
    .string({ invalid_type_error: "Item ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Item ID format",
    }),

  mapId: z
    .string({ invalid_type_error: "Map ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid Map ID format",
    }),

  userId: z
    .string({ invalid_type_error: "User ID must be a string" })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid User ID format",
    }),

  salePrice: z
    .number({ invalid_type_error: "Sale price must be a number" })
    .optional(),

  location: z
    .string({ invalid_type_error: "Location must be a string" })
    .optional(),

  progress: z
    .number({ invalid_type_error: "Progress must be a number" })
    .min(0, { message: "Progress must be 0 or more" })
    .max(100, { message: "Progress must be 100 or less" })
    .optional(),

  notes: z
    .array(
      z.string({ invalid_type_error: "Notes must be a string" }).optional()
    )
    .optional(),

  x: z.number({ invalid_type_error: "X must be a number" }),

  y: z.number({ invalid_type_error: "Y must be a number" }),
});

export const updateItemOnMapZodSchema = z.object({
  location: z
    .string({ invalid_type_error: "Location must be a string" })
    .optional(),
  progress: z
    .number({ invalid_type_error: "Progress must be a number" })
    .min(0, { message: "Progress must be 0 or more" })
    .max(100, { message: "Progress must be 100 or less" })
    .optional(),
  notes: z.array(
    z.string({ invalid_type_error: "Notes must be a string" }).optional()
  ),
  x: z.number({ invalid_type_error: "X must be a number" }).optional(),
  y: z.number({ invalid_type_error: "Y must be a number" }).optional(),
});
export const updateItemOnMapByInstallerZodSchema = z.object({
  progress: z
    .number({ invalid_type_error: "Progress must be a number" })
    .min(0, { message: "Progress must be 0 or more" })
    .max(100, { message: "Progress must be 100 or less" })
    .optional(),
  notes: z.array(
    z.string({ invalid_type_error: "Notes must be a string" }).optional()
  ),
});

export const updateItemPositionSchema = z.object({
  x: z.number({ invalid_type_error: "X must be a number" }),

  y: z.number({ invalid_type_error: "Y must be a number" }),
});
