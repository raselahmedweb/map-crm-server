import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { CompanyControllers } from "./company.controller";
import { Role } from "../user/user.interface";

const router = Router();

router.post(
  "/register",
  checkAuth(Role.ADMIN),
  CompanyControllers.createCompany
);

export const CompanyRoutes = router;
