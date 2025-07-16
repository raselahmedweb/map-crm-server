import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errorHelpers/AppError";
import { ICompany } from "./company.interface";
import { Company } from "./company.model";
import httpStatusCode from "http-status-codes";
import { Role } from "../user/user.interface";

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

const updateCompany = async (
  companyId: string,
  payload: Partial<ICompany>,
  decodedToken: JwtPayload
) => {
  const ifCompanyExist = await Company.findById(companyId);

  if (!ifCompanyExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Company does not exist");
  }

  if (payload.isDeleted) {
    if (decodedToken.role !== Role.ADMIN) {
      throw new AppError(
        httpStatusCode.FORBIDDEN,
        "You are not authrized for this changes"
      );
    }
  }

  const newUpdateCompany = await Company.findByIdAndUpdate(companyId, payload, {
    new: true,
    runValidators: true,
  });

  return newUpdateCompany;
};

const getCompany = async () => {
  const company = await Company.find({});
  const total = await Company.countDocuments();
  return { company, total };
};

const deleteCompany = async (companyId: string, decodedToken: JwtPayload) => {
  const ifCompanyExist = await Company.findById(companyId);

  if (!ifCompanyExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Company does not exist");
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

  ifCompanyExist.isDeleted = true;
};

export const CompanyServices = {
  createCompany,
  updateCompany,
  getCompany,
  deleteCompany,
};
