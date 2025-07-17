// generateToken(
//     jwtPayload,
//     envVars.JWT_ACCESS_SECRET,
//     envVars.JWT_ACCESS_EXPIRES
//   )

import AppError from "../../errorHelpers/AppError";
import httpStatusCode from "http-status-codes";
import { User } from "../user/user.model";
import { IUser } from "../user/user.interface";
import { generateToken } from "../../utils/jwt";
import { envVars } from "../../config/env";
import nodemailer from "nodemailer";

// Email transporter for sending verification emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: envVars.NODEMAILER_EMAIL,
    pass: envVars.NODEMAILER_EMAIL_PASSWORD,
  },
});

const inviteUserToCreateProfile = async (payload: Partial<IUser>) => {
  const { email } = payload;

  const isExistUser = await User.findOne({ email });
  if (isExistUser) {
    throw new AppError(httpStatusCode.BAD_REQUEST, "Email already exist");
  }

  const inviteToken = generateToken(
    payload,
    envVars.JWT_INVITATION_SECRET,
    envVars.JWT_INVITATION_EXPIRES
  );
  // Send invitation
  const inviteUrl = `${envVars.FRONTEND_URL}/register?invitationToken=${inviteToken}`;
  await transporter.sendMail({
    from: `Invitation link to create account in GEEKSBLOCK <${envVars.NODEMAILER_EMAIL}>`,
    to: email,
    subject: "Create your profile for GEEKSBLOCK",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px; background-color: #f9f9f9;">
          <div style="text-align: center;">
            <p style="color: #ff5200; font-size: 35px;">GEEKSBLOCK</p>
          </div>
          
          <h2 style="color: #333; text-align: center;">Create your profile</h2>
          <p style="color: #555; text-align: center; font-size: 16px;">
            Hello,\nTo create your profile in GEEKSBLOCK CRM, please click the button below:
          </p>
    
          <div style="text-align: center; margin: 20px 0;">
            <a href="${inviteUrl}" 
               style="background-color: #ff5200; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-size: 16px; display: inline-block;">
              Create Profile
            </a>
          </div>
    
          <p style="font-size: 14px; color: #777; text-align: center;">
            The invitation link gonna expire in ${
              envVars.JWT_INVITATION_EXPIRES
            }
          </p>
    
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    
          <p style="font-size: 12px; color: #777; text-align: center;">
            &copy; ${new Date().getFullYear()} GEEKSBLOCK All rights reserved.
          </p>
        </div>
      `,
  });
};

export const InviteUserServices = {
  inviteUserToCreateProfile,
};
