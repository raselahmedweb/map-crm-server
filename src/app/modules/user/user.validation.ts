import z from "zod";

export const createUserZodSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be string" })
    .min(2, { message: "Name too short: Minimun 2 character required" })
    .max(50, { message: "Name too long: Maximum 50 character allowed" }),
  email: z
    .string({ invalid_type_error: "Email must be string" })
    .email({ message: "Invalid email format" })
    .min(5, { message: "Email must be at least 5 character long" })
    .max(100, { message: "Email cannot exceed 100 characters" }),
  password: z
    .string({ invalid_type_error: "Password must be string" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    }),
  picture: z
    .string({ invalid_type_error: "Image url must be string" })
    .optional(),
  role: z.string({ invalid_type_error: "Role must be string" }).optional(),
  companyId: z
    .string({ invalid_type_error: "Company id must be string" })
    .optional(),
});
export const updateUserZodSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be string" })
    .min(2, { message: "Name too short: Minimun 2 character required" })
    .max(50, { message: "Name too long: Maximum 50 character allowed" })
    .optional(),
  password: z
    .string({ invalid_type_error: "Password must be string" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    })
    .optional(),
  picture: z
    .string({ invalid_type_error: "Image url must be string" })
    .optional(),
  role: z.string({ invalid_type_error: "Role must be string" }).optional(),
  companyId: z
    .string({ invalid_type_error: "Company id must be string" })
    .optional(),
  isDeleted: z
    .boolean({ invalid_type_error: "isDeleted must be true or false" })
    .optional(),
  isVerified: z
    .boolean({ invalid_type_error: "isVerified must be true or false" })
    .optional(),
});
