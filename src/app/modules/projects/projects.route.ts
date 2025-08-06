import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { createProjectsZodSchema } from "./projects.validation";
import { ProjectsControllers } from "./projects.controller";

const router = Router();

router.post(
  "/create",
  checkAuth(
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  validateRequest(createProjectsZodSchema),
  ProjectsControllers.createProjects
);

router.get(
  "/all-projects",
  checkAuth(
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  ProjectsControllers.getAllProjects
);

router.get(
  "/:id",
  checkAuth(
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  ProjectsControllers.getProject
);

router.patch(
  "/:id",
  checkAuth(
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  ProjectsControllers.updateProjects
);

router.delete(
  "/:id",
  checkAuth(
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.ADMIN,
    Role.ASSISTANT,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  ProjectsControllers.deleteProjects
);

export const ProjectsRoutes = router;
