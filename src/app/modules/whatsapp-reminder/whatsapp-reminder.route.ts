import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
// import { checkAuth } from "../../middlewares/checkAuth";
import {
  createPhoneNumberZodSchema,
  createReminderZodSchema,
} from "./whatsapp-reminder.validation";
import { ReminderControllers } from "./reminder.controller";
import { PhoneControllers } from "./phone.controller";

const router = Router();

router.post(
  "/reminder/create",
  validateRequest(createReminderZodSchema),
  ReminderControllers.createReminder
);
router.get("/reminder/all-reminder", ReminderControllers.getReminders);
router.delete("/reminder/:id", ReminderControllers.deleteReminder);

router.post(
  "/phone/create",
  validateRequest(createPhoneNumberZodSchema),
  PhoneControllers.createPhone
);
router.get("/phone/all-phone", PhoneControllers.getPhones);
router.delete("/phone/:id", PhoneControllers.deletePhone);

export const WhatsappRemindersRoutes = router;
