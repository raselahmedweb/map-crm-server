import z from "zod";

export const createCompanyZodSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be string" }),
  email: z.string({ invalid_type_error: "Email must be string" }).optional(),
  website: z
    .string({ invalid_type_error: "Website must be string" })
    .optional(),
  logo: z.string({ invalid_type_error: "Logo must be string" }).optional(),
});

export const updateCompanyZodSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be string" }).optional(),
  email: z.string({ invalid_type_error: "Email must be string" }).optional(),
  website: z
    .string({ invalid_type_error: "Website must be string" })
    .optional(),
  logo: z.string({ invalid_type_error: "Logo must be string" }).optional(),
  isDeleted: z
    .boolean({ invalid_type_error: "Value must be true or false" })
    .optional(),
});
