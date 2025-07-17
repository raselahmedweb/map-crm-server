import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import { createInvitatioZodSchema } from "./invitation.validation";
import { InviteUserControllers } from "./invitation.controller";
const router = Router();

router.post(
  "/",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(createInvitatioZodSchema),
  InviteUserControllers.inviteUserToCreateProfile
);

export const InviteUserRoutes = router;
