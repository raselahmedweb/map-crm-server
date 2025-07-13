/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";

const credentialsLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginInfo = await AuthServices.credentialsLogin(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "User logged in successfully",
      data: loginInfo,
    });
  }
);

const getNewAccessToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const refresToken = req.headers.authorization;
    const loginInfo = await AuthServices.getNewAccessToken(
      refresToken as string
    );
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Refresh token",
      data: loginInfo,
    });
  }
);

export const AuthControllers = {
  credentialsLogin,
  getNewAccessToken,
};
