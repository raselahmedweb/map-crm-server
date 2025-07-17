import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { ItemControllers } from "./item.controller";
import { createItemZodSchema, updateItemZodSchema } from "./item.validation";

const router = Router();

// Only ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER can create floor plan
router.post(
  "/create",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(createItemZodSchema),
  ItemControllers.createItem
);
// ADMIN, ASSISTANT can get all Item
router.get(
  "/all-Items",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  ItemControllers.getAllItem
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
