import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CompanyRoutes } from "../modules/company/company.route";
import { SalesAppointmentRoutes } from "../modules/sales_appointment/sales_appointment.route";
import { FloorPlanRoutes } from "../modules/floor_plan/floorplan.route";
import { MapRoutes } from "../modules/map/map.route";
import { ItemRoutes } from "../modules/items/item.route";
import { InviteUserRoutes } from "../modules/invitation/invitation.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/company",
    route: CompanyRoutes,
  },
  {
    path: "/sales-appointment",
    route: SalesAppointmentRoutes,
  },
  {
    path: "/floorplan",
    route: FloorPlanRoutes,
  },
  {
    path: "/map",
    route: MapRoutes,
  },
  {
    path: "/item",
    route: ItemRoutes,
  },
  {
    path: "/invite-user",
    route: InviteUserRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
