import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>About</h1>,
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
