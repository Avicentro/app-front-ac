import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import { IRoutes } from "../models";

const Login = lazy(() => import("../../pages/Login/Login"));

export const generalRoutes: IRoutes[] = [
  {
    path: ROUTES.NOT_FOUND,
    component: Login,
  },
];
