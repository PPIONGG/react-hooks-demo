import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import homeRoutes from "./homeRoutes";
import hooksRoutes from "./hooksRoutes";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";

// รวม Routes ทั้งหมด
const appRoutes = [
  ...homeRoutes,
  ...hooksRoutes,
  { path: "*", element: <NotFoundPage /> },
];

const AppRoutes = () => {
  const routes = useRoutes(
    appRoutes.map((route) => ({
      ...route,
      element: <Layout>{route.element}</Layout>,
    }))
  );

  return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
