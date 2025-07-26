import { model, Schema } from "mongoose";
import { IPhoneNumber, IReminder } from "./whatsapp-reminder.interface";

const phoneNumberSchema = new Schema<IPhoneNumber>({
  number: String,
});

const reminderSchema = new Schema<IReminder>({
  message: String,
  cronTime: String,
});

const PhoneNumberModel = model<IPhoneNumber>("PhoneNumber", phoneNumberSchema);
const ReminderModel = model<IReminder>("Reminder", reminderSchema);

export { PhoneNumberModel, ReminderModel };
