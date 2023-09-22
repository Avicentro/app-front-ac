import { FC, Suspense } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import AuthSheet from "../../layout/components/AuthSheet/AuthSheet";

// Components
import Layout from "../../layout/Layout";
import ChangePassword from "../../pages/ChangePassword/ChangePassword";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import Login from "../../pages/Login/Login";

// Config
import { generalRoutes } from "../routesConfig/generalRoutes";

let LoaderPage: any = null;
const LoaderPagePromise = import("../../components/display/Loading/Loading");
LoaderPagePromise.then(module => LoaderPage = module.default);

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={LoaderPage}>
        <Routes>
          {generalRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <AuthSheet>
                    <route.component />
                  </AuthSheet>
                </Layout>
              }
            />
          ))}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route
            path={`${ROUTES.FORGOT_PASSWORD}`}
            element={<ForgotPassword />}
          />
          <Route
            path={`${ROUTES.CHANGE_PASSWORD}/:token`}
            element={<ChangePassword />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
