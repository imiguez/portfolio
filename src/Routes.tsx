import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "./pages/Main/Main";
import { OS } from "./pages/DesktopApp/OS/OS";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: []
  },
  {
    path: "/OS",
    element: <OS/>,
  },
]);
