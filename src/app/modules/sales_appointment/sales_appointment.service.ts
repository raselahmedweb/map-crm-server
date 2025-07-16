import { ISalesAppointment } from "./sales_appointment.interface";
import { SalesAppointment } from "./salse_appointment.model";
import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";

const createSalesAppointment = async (payload: Partial<ISalesAppointment>) => {
  const company = await SalesAppointment.create(payload);
  return company;
};

const getAllAppointment = async () => {
  const appointment = await SalesAppointment.find({});
  const total = await SalesAppointment.countDocuments();
  return { appointment, total };
};

const getAppointmentByUserId = async (userId: string) => {
  const appointment = await SalesAppointment.find({ userId });
  if (!appointment) {
    throw new AppError(
      httpStatusCode.NOT_FOUND,
      "You dont have any scheduled appointment"
    );
  }
  return { appointment };
};

const deleteAppointment = async (appointmentId: string) => {
  const ifAppointmentExist = await SalesAppointment.findById(appointmentId);

  if (!ifAppointmentExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Company does not exist");
  }

  await SalesAppointment.findByIdAndDelete(appointmentId);
};

export const SalesAppointmentServices = {
  createSalesAppointment,
  getAllAppointment,
  getAppointmentByUserId,
  deleteAppointment,
};
