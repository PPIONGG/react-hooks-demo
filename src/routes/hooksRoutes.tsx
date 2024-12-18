import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const UseStatePage = lazy(() => import("../pages/UseStatePage/UseStatePage"));
const UseEffectPage = lazy(() => import("../pages/UseEffectPage"));
const UseReducerPage = lazy(() => import("../pages/UseReducerPage"));

const hooksRoutes: RouteObject[] = [
  {
    path: "/use-state",
    element: <UseStatePage />,
  },
  {
    path: "/use-effect",
    element: <UseEffectPage />,
  },
  {
    path: "/use-reducer",
    element: <UseReducerPage />,
  },
];

export default hooksRoutes;
