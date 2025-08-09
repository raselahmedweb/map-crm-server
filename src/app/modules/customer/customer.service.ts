import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errorHelpers/AppError";
import { ICustomer } from "./customer.interface";
import { Customer } from "./customer.model";
import httpStatusCode from "http-status-codes";
import { Role } from "../user/user.interface";

const createCustomer = async (payload: Partial<ICustomer>) => {
  const customer = await Customer.create(payload);
  return customer;
};

const updateCustomer = async (
  CustomerId: string,
  payload: Partial<ICustomer>,
  decodedToken: JwtPayload
) => {
  const ifCustomerExist = await Customer.findById(CustomerId);

  if (!ifCustomerExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Customer does not exist");
  }

  if (payload.isDeleted) {
    if (decodedToken.role !== Role.ADMIN) {
      throw new AppError(
        httpStatusCode.FORBIDDEN,
        "You are not authrized for this changes"
      );
    }
  }

  const newUpdateCustomer = await Customer.findByIdAndUpdate(
    CustomerId,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );

  return newUpdateCustomer;
};

const getCustomer = async () => {
  const customer = await Customer.find({});
  const total = await Customer.countDocuments();
  return { customer, total };
};

const deleteCustomer = async (CustomerId: string, decodedToken: JwtPayload) => {
  const ifCustomerExist = await Customer.findById(CustomerId);

  if (!ifCustomerExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Customer does not exist");
  }

  if (
    decodedToken.role !== Role.ADMIN ||
    decodedToken.role !== Role.ASSISTANT
  ) {
    throw new AppError(
      httpStatusCode.FORBIDDEN,
      "You are not authrized for this changes"
    );
  }

  ifCustomerExist.isDeleted = true;
};

export const CustomerServices = {
  createCustomer,
  updateCustomer,
  getCustomer,
  deleteCustomer,
};
