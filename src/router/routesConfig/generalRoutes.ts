import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import Programming from "../../pages/Programming/Programming";
import { IRoutes } from "../models";

const Login = lazy(() => import("../../pages/Login/Login"));

export const generalRoutes: IRoutes[] = [
  {
    path: ROUTES.NOT_FOUND,
    component: Login,
  },
  {
    path: ROUTES.PROGRAMMING,
    component: Programming,
  },
];
