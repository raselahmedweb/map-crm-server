import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CustomerRoutes } from "../modules/customer/customer.route";
import { SalesAppointmentRoutes } from "../modules/sales_appointment/sales_appointment.route";
import { ProjectsRoutes } from "../modules/projects/projects.route";
import { MapRoutes } from "../modules/map/map.route";
import { ItemRoutes } from "../modules/devices/device.route";
import { InviteUserRoutes } from "../modules/invitation/invitation.route";
import { ItemOnMapRoutes } from "../modules/device_on_map/device_on_map.route";
import { ItemOnProjectRoutes } from "../modules/device_on_project/device_on_project.route";

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
    path: "/customer",
    route: CustomerRoutes,
  },
  {
    path: "/sales-appointment",
    route: SalesAppointmentRoutes,
  },
  {
    path: "/projects",
    route: ProjectsRoutes,
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
  {
    path: "/item-on-project",
    route: ItemOnProjectRoutes,
  },
  {
    path: "/item-on-map",
    route: ItemOnMapRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
