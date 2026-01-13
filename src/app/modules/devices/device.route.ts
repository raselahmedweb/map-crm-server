import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { ItemControllers } from "./device.controller";
import { createItemZodSchema, updateItemZodSchema } from "./device.validation";

const router = Router();

// Only ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER can create floor plan
router.post(
  "/create",
  checkAuth(Role.ADMIN),
  validateRequest(createItemZodSchema),
  ItemControllers.createItem
);

router.get(
  "/all-device-with-details",
  checkAuth(Role.ADMIN),
  ItemControllers.getAllItem
);

router.get(
  "/all-items",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER,
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN
  ),
  ItemControllers.getAllItemWithoutPrice
);

// ADMIN, ASSISTANT can update
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(updateItemZodSchema),
  ItemControllers.updateItem
);

// Only ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER can delete
router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  ItemControllers.deleteItem
);

export const ItemRoutes = router;
