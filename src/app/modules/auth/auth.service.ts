import AppError from "../../errorHelpers/AppError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import httpStatusCode from "http-status-codes";
import bcryptjs from "bcryptjs";
import { createUserToken } from "../../utils/userToken";
import { generateToken, verifyToken } from "../../utils/jwt";
import { envVars } from "../../config/env";
import { JwtPayload } from "jsonwebtoken";

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

  const userTokens = createUserToken(isExistUser);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: pass, ...rest } = isExistUser.toObject();

  return {
    accessToken: userTokens.accessToken,
    refreshToken: userTokens.refreshToken,
    user: rest,
  };
};
const getNewAccessToken = async (refreshToken: string) => {
  const verifiedToken = verifyToken(
    refreshToken,
    envVars.JWT_REFRESH_SECRET
  ) as JwtPayload;

  const isExistUser = await User.findOne({ email: verifiedToken.email });

  if (!isExistUser) {
    throw new AppError(httpStatusCode.NOT_FOUND, "Email does not exist");
  }

  if (isExistUser.isDeleted) {
    throw new AppError(httpStatusCode.FORBIDDEN, "User is deleted");
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
  getNewAccessToken,
};
