import AppError from "../../errorHelpers/AppError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import httpStatusCode from "http-status-codes";
import bcryptjs from "bcryptjs";
import { generateToken } from "../../utils/jwt";
import { envVars } from "../../config/env";

const credentialsLogin = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  const isExistUser = await User.findOne({ email });

  if (!isExistUser) {
    throw new AppError(httpStatusCode.BAD_REQUEST, "Email does not exist");
  }

  const isPasswordMatched = await bcryptjs.compare(
    password as string,
    isExistUser.password as string
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatusCode.BAD_REQUEST, "Incorrect password");
  }

  const jwtPayload = {
    userId: isExistUser._id,
    email: isExistUser.email,
    role: isExistUser.role,
  };

  const accessToken = generateToken(
    jwtPayload,
    envVars.JWT_ACCESS_SECRET,
    envVars.JWT_ACCESS_EXPIRES
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  credentialsLogin,
};
