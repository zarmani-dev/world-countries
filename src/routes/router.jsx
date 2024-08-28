import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import Detail from "../components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: ":name",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
