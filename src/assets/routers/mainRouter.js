import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../components/layouts/MainLayout";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>errorElement</h2>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
export default mainRouter;
