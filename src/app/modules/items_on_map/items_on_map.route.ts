import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import {
  createItemOnMapZodSchema,
  updateItemOnMapByInstallerZodSchema,
  updateItemOnMapZodSchema,
  updateItemPositionSchema,
} from "./items_on_map.validation";
import { ItemOnMapControllers } from "./items_on_map.controller";

const router = Router();

// Only ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER can create
router.post(
  "/create",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  validateRequest(createItemOnMapZodSchema),
  ItemOnMapControllers.createItemOnMap
);

router.get(
  "/all-items-on-map/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER,
    Role.INSTALLER,
    Role.TECHNICIAN,
    Role.CUSTOMER
  ),
  ItemOnMapControllers.getAllItemOnMap
);

// update by ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER
router.patch(
  "/change-position/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  validateRequest(updateItemPositionSchema),
  ItemOnMapControllers.changePosition
);
router.patch(
  "/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  validateRequest(updateItemOnMapZodSchema),
  ItemOnMapControllers.updateItemOnMap
);
// update by TECHNICIAN, INSTALLER
router.patch(
  "/by-installer/:id",
  checkAuth(Role.INSTALLER, Role.TECHNICIAN),
  validateRequest(updateItemOnMapByInstallerZodSchema),
  ItemOnMapControllers.updateItemOnMap
);

// Only ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER can delete
router.delete(
  "/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  ItemOnMapControllers.deleteItemOnMap
);

export const ItemOnMapRoutes = router;
