import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

const HomeLayout = lazy(() => import("./layouts/HomeLayout"));
const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/es" replace />,
    },
    {
        path: "/:lang",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default router;
