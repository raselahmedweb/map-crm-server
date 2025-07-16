import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { CompanyControllers } from "./company.controller";
import { Role } from "../user/user.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createCompanyZodSchema,
  updateCompanyZodSchema,
} from "./company.validation";

const router = Router();

router.get(
  "/all-companies",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  CompanyControllers.getCompany
);

router.post(
  "/create",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(createCompanyZodSchema),
  CompanyControllers.createCompany
);

router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(updateCompanyZodSchema),
  CompanyControllers.updateCompany
);

router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  CompanyControllers.deleteCompany
);

export const CompanyRoutes = router;
