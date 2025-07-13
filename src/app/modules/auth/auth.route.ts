import { Router } from "express";
import { AuthControllers } from "./auth.controller";

const route = Router();

route.post("/login", AuthControllers.credentialsLogin);
route.post("/refresh-token", AuthControllers.getNewAccessToken);

export const AuthRoutes = route;
