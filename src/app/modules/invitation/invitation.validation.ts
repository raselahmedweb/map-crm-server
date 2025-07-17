import { z } from "zod";

export const createInvitatioZodSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be string" })
    .email({ message: "Invalid email format" })
    .min(5, { message: "Email must be at least 5 character long" })
    .max(100, { message: "Email cannot exceed 100 characters" }),
  role: z.string({ invalid_type_error: "Role must be string" }),
  companyId: z.string({ invalid_type_error: "Company id must be string" }),
});
