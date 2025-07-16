import { Router } from "express";
import { UserControllers } from "./user.controller";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import { Role } from "./user.interface";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserControllers.createUser
);
router.patch(
  "/:id",
  checkAuth(...Object.values(Role)),
  validateRequest(updateUserZodSchema),
  UserControllers.updateUser
);
router.get(
  "/all-users",
  checkAuth(
    Role.ADMIN || Role.ASSISTANT || Role.PROJECT_DESIGNER || Role.COLLABORATOR
  ),
  UserControllers.getAllUsers
);

export const UserRoutes = router;
