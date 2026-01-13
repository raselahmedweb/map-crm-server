import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import {
  createItemOnProjectZodSchema,
  updateItemOnProjectZodSchema,
} from "./device_on_project.validation";
import { ItemOnProjectControllers } from "./device_on_project.controller";

const router = Router();

router.post(
  "/create",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  validateRequest(createItemOnProjectZodSchema),
  ItemOnProjectControllers.createItemOnProject
);

router.get(
  "/all-items-on-project-details/:id",
  checkAuth(Role.ADMIN),
  ItemOnProjectControllers.getAllItemOnProject
);

router.get(
  "/all-items-on-project/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER,
    Role.INSTALLER,
    Role.TECHNICIAN,
    Role.CUSTOMER
  ),
  ItemOnProjectControllers.getAllItemOnProject
);

router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(updateItemOnProjectZodSchema),
  ItemOnProjectControllers.updateItemOnProject
);

router.delete(
  "/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  ItemOnProjectControllers.deleteItemOnProject
);

export const ItemOnProjectRoutes = router;
