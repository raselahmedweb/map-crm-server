import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import z from "zod";
import { validateRequest } from "../../middlewares/validateRequest";

const route = Router();

const resetPasswordZodSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string({ invalid_type_error: "Password must be string" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[a-z])/, {
      message: "Password must contain at least 1 lowercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    }),
});

route.post("/login", AuthControllers.credentialsLogin);
route.post("/refresh-token", AuthControllers.getNewAccessToken);
route.post("/logout", AuthControllers.logout);
route.post(
  "/reset-password",
  checkAuth(...Object.values(Role)),
  validateRequest(resetPasswordZodSchema),
  AuthControllers.resetPassword
);

export const AuthRoutes = route;
