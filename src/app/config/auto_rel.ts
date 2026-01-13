import axios from "axios";
import AppError from "../errorHelpers/AppError";

export async function resolveServerDownIssue() {
  // console.log("SERVER DOWN ISSUE RUN");
  try {
    await axios.get("http://localhost:4001");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new AppError(500, (error.message as string) || "Server Down Issue");
  }
}
