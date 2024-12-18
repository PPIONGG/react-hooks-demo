import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";

const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export default homeRoutes;
