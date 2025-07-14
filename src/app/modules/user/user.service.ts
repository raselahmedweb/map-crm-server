import AppError from "../../errorHelpers/AppError";
import { IUser, Role } from "./user.interface";
import { User } from "./user.model";
import httpStatusCode from "http-status-codes";
import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";
import { JwtPayload } from "jsonwebtoken";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError(httpStatusCode.BAD_REQUEST, "User already exists");
  }

  const hashPassword = await bcryptjs.hash(
    password as string,
    Number(envVars.BCRYPT_SALT_ROUND)
  );

  const user = await User.create({
    email,
    password: hashPassword,
    ...rest,
  });
  return user;
};

const updateUser = async (
  userId: string,
  payload: Partial<IUser>,
  decodedToken: JwtPayload
) => {
  const ifUserExist = await User.findById(userId);

  if (!ifUserExist) {
    throw new AppError(httpStatusCode.NOT_FOUND, "User does not exist");
  }

  if (payload.role) {
    if (decodedToken.role !== Role.ADMIN) {
      throw new AppError(
        httpStatusCode.FORBIDDEN,
        "You are not authrized for tjis changes"
      );
    }
  }

  if (payload.isDeleted || payload.isVerified) {
    if (decodedToken.role !== Role.ADMIN) {
      throw new AppError(
        httpStatusCode.FORBIDDEN,
        "You are not authrized for this changes"
      );
    }
  }

  if (payload.password) {
    payload.password = await bcryptjs.hash(
      payload.password,
      envVars.BCRYPT_SALT_ROUND
    );
  }

  const newUpdateUser = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
  });

  return newUpdateUser;
};

const getAllUsers = async () => {
  const users = await User.find({});
  const total = await User.countDocuments();
  return { users, total };
};

export const UserServices = {
  createUser,
  updateUser,
  getAllUsers,
};
