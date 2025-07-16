import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { createFloorPlanZodSchema } from "./floorplan.validation";
import { FloorplanControllers } from "./floorplan.controller";

const router = Router();

// Only SALES_SPECIALIST or SALES_TECHNICIAN can create floor plan
router.post(
  "/create",
  checkAuth(Role.SALES_SPECIALIST, Role.SALES_TECHNICIAN),
  validateRequest(createFloorPlanZodSchema),
  FloorplanControllers.createFloorplan
);

router.get(
  "/all-flooeplan",
  checkAuth(
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  FloorplanControllers.getAllFloorplan
);

router.patch(
  "/:id",
  checkAuth(Role.SALES_SPECIALIST, Role.SALES_TECHNICIAN),
  FloorplanControllers.updateFloorplan
);

// Only SALES_SPECIALIST or SALES_TECHNICIAN can delete
router.delete(
  "/:id",
  checkAuth(Role.SALES_SPECIALIST, Role.SALES_TECHNICIAN),
  FloorplanControllers.deleteFloorplan
);

export const FloorPlanRoutes = router;
