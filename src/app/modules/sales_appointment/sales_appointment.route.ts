import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createSalesAppointmentZodSchema } from "./sales_appointment.validation";
import { SalesAppointmentControllers } from "./salse_appointment.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

router.post(
  "/create",
  validateRequest(createSalesAppointmentZodSchema),
  SalesAppointmentControllers.createSalesAppointment
);

// Only admin and assistant can see all scheduled appointments
router.get(
  "/all-appointments",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  SalesAppointmentControllers.getAllAppointment
);

router.get(
  "/:id",
  checkAuth(Role.SALES_SPECIALIST, Role.SALES_TECHNICIAN),
  SalesAppointmentControllers.getAppointmentByUserId
);

// Only admin and assistant can delete
router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.ASSISTANT),
  SalesAppointmentControllers.deleteAppointment
);

export const SalesAppointmentRoutes = router;
