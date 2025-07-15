import z from "zod";

export const companyZodSchema = z.object({
  name: z.string(),
  email: z.string().optional(),
  website: z.string().optional(),
});
