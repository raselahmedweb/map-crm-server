import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { CustomerControllers } from "./customer.controller";
import { Role } from "../user/user.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createCustomerZodSchema,
  updateCustomerZodSchema,
} from "./customer.validation";

const router = Router();

router.get(
  "/all-customers",
  checkAuth(
    Role.ADMIN,
    Role.ASSISTANT,
    Role.SALES_SPECIALIST,
    Role.SALES_TECHNICIAN,
    Role.COLLABORATOR,
    Role.PROJECT_DESIGNER
  ),
  CustomerControllers.getCustomer
);

router.post(
  "/create",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(createCustomerZodSchema),
  CustomerControllers.createCustomer
);

router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  validateRequest(updateCustomerZodSchema),
  CustomerControllers.updateCustomer
);

router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  CustomerControllers.deleteCustomer
);

export const CustomerRoutes = router;
