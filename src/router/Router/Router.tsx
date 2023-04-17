import { FC, Suspense } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

// Components
import Layout from "../../layout/Layout";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div> loading...</div>}>
          <Routes>{/* <AuthSheet><Route></Route></AuthSheet> */}</Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
