import { FC, Suspense } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import AuthSheet from "../../layout/components/AuthSheet/AuthSheet";

// Components
import Layout from "../../layout/Layout";
import Login from "../../pages/Login/Login";

// Config
import { generalRoutes } from "../routesConfig/generalRoutes";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div> loading...</div>}>
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
