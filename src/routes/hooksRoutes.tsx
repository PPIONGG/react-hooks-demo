import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const UseStatePage = lazy(() => import("../pages/UseStatePage/UseStatePage"));
const UseEffectPage = lazy(() => import("../pages/UseEffectPage"));
const UseReducerPage = lazy(() => import("../pages/UseReducerPage"));
const UseContextPage = lazy(() => import("../pages/UseContextPage"));
const UseRefPage = lazy(() => import("../pages/UseRefPage"));
const UseMemoPage = lazy(() => import("../pages/UseMemoPage"));
const UseCallbackComparison = lazy(() => import("../pages/UseCallbackPage"));
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
  {
    path: "/use-context",
    element: <UseContextPage />,
  },
  {
    path: "/use-ref",
    element: <UseRefPage />,
  },
  {
    path: "/use-memo",
    element: <UseMemoPage />,
  },
  {
    path: "/use-callback",
    element: <UseCallbackComparison />,
  },
];

export default hooksRoutes;
