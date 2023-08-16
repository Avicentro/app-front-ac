import { lazy } from "react";
import { COMPOSED_ROUTES, ROUTES } from "../../constants/routes";
import SummarySchedule from "../../pages/Programming/pages/SummarySchedule/SummarySchedule";
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
const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const OrderEntryDetail = lazy(
  () => import("../../pages/OrderEntryDetail/OrderEntryDetail")
);
const People = lazy(() => import("../../pages/People/People"));
const Users = lazy(() => import("../../pages/Users/Users"));
const IceProviders = lazy(
  () => import("../../pages/IceProviders/IceProviders")
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
    path: `${COMPOSED_ROUTES.SUMMARY_PROGRAMMING}/:orderId`,
    component: SummarySchedule,
  },
  {
    path: `${COMPOSED_ROUTES.REST}/:dateSelected`,
    component: RestProgramming,
  },
  {
    path: `${ROUTES.ORDER_ENTRY}/:orderEntryId`,
    component: OrderEntryDetail,
  },
  {
    path: `${ROUTES.SIGN_IN}`,
    component: SignIn,
  },
  {
    path: `${ROUTES.PEOPLE}`,
    component: People,
  },
  {
    path: `${ROUTES.USERS}`,
    component: Users,
  },
  {
    path: `${ROUTES.ICE_PROVIDERS}`,
    component: IceProviders,
  },
];
