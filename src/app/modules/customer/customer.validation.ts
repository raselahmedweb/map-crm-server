import z from "zod";

export const createCustomerZodSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be string" }),
  role: z.string({ invalid_type_error: "Role must be string" }),
  email: z.string({ invalid_type_error: "Email must be string" }).optional(),
  website: z
    .string({ invalid_type_error: "Website must be string" })
    .optional(),
  logo: z.string({ invalid_type_error: "Logo must be string" }).optional(),
});

export const updateCustomerZodSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be string" }).optional(),
  role: z.string({ invalid_type_error: "Role must be string" }).optional(),
  email: z.string({ invalid_type_error: "Email must be string" }).optional(),
  website: z
    .string({ invalid_type_error: "Website must be string" })
    .optional(),
  logo: z.string({ invalid_type_error: "Logo must be string" }).optional(),
});
