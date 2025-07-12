import AppError from "../../errorHelpers/AppError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatusCode from "http-status-codes";
import bcryptjs from "bcryptjs";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError(httpStatusCode.BAD_REQUEST, "User already exists");
  }

  const hashPassword = await bcryptjs.hash(password as string, 10);

  const user = await User.create({
    email,
    password: hashPassword,
    ...rest,
  });
  return user;
};

const getAllUsers = async () => {
  const users = await User.find({});
  const total = await User.countDocuments();
  return { users, total };
};

export const UserServices = {
  createUser,
  getAllUsers,
};
