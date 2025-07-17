/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatusCode from "http-status-codes";
import { InviteUserServices } from "./invitation.service";

// admin will invite user to creat their account, payload will have email, role, companyId
const inviteUserToCreateProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await InviteUserServices.inviteUserToCreateProfile(req.body);
    sendResponse(res, {
      statusCode: httpStatusCode.OK,
      success: true,
      message: "Invitation sent successfully",
      data: null,
    });
  }
);
export const InviteUserControllers = {
  inviteUserToCreateProfile,
};
