import AppError from "../../errorHelpers/AppError";
import { ICompany } from "./company.interface";
import { Company } from "./company.model";
import httpStatusCode from "http-status-codes";

const createCompany = async (payload: Partial<ICompany>) => {
  const { email, ...rest } = payload;
  const existingCompany = await Company.findOne({ email });
  if (existingCompany) {
    throw new AppError(httpStatusCode.BAD_REQUEST, "Company already exists");
  }

  const company = await Company.create({
    email,
    ...rest,
  });
  return company;
};

export const CompanyServices = {
  createCompany,
};
