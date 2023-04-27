import { lazy } from "react";
import { COMPOSED_ROUTES, ROUTES } from "../../constants/routes";
import { IRoutes } from "../models";

const Login = lazy(() => import("../../pages/Login/Login"));
const Programming = lazy(() => import("../../pages/Programming/Programming"));
const TravelProgramming = lazy(
  () =>
    import("../../pages/Programming/pages/TravelProgramming/TravelProgramming")
);
const RestProgramming = lazy(
  () => import("../../pages/Programming/pages/RestProgramming/RestProgramming")
);

export const generalRoutes: IRoutes[] = [
  {
    path: ROUTES.NOT_FOUND,
    component: Login,
  },
  {
    path: ROUTES.PROGRAMMING,
    component: Programming,
  },
  {
    path: `${COMPOSED_ROUTES.TRAVEL}/:dateSelected`,
    component: TravelProgramming,
  },
  {
    path: `${COMPOSED_ROUTES.REST}/:dateSelected`,
    component: RestProgramming,
  },
];
