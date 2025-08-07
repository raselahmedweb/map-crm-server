import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { MapControllers } from "./map.controller";
import { createMapZodSchema } from "./map.validation";

const router = Router();

// Only ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER can create floor plan
router.post(
  "/create",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  validateRequest(createMapZodSchema),
  MapControllers.createMap
);
// ADMIN, ASSISTANT can get all map
router.get(
  "/all-maps",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  MapControllers.getAllMap
);

router.get(
  "/single/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  MapControllers.getMapById
);

router.get(
  "/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  MapControllers.getMapByAssignedId
);

// ADMIN, ASSISTANT, COLLABORATOR, PROJECT_DESIGNER
router.patch(
  "/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  MapControllers.updateMap
);

router.delete(
  "/:id",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  MapControllers.deleteMap
);

export const MapRoutes = router;
