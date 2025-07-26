import z from "zod";

export const createReminderZodSchema = z.object({
  message: z.string({ invalid_type_error: "Message must be string" }),
  cronTime: z.string({ invalid_type_error: "CronTime must be string" }),
});
export const createPhoneNumberZodSchema = z.object({
  number: z.string({ invalid_type_error: "Number must be string" }),
});
