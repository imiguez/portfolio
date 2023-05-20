import { createBrowserRouter } from "react-router-dom";
import Root from "pages/Root";
import Home from "pages/Home";
import AboutMe from "pages/AboutMe";
import Testing from "pages/Testing";
import React from "react";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
    ],
  },
]);

export default MainRouter;
