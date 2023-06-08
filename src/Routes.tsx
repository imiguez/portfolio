import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import React from "react";
import Home from "./pages/Home";
import { MonitorIframe } from "./pages/MonitorIframe";
import App from "./components/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <NavBar />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ]
  },
  {
    path: "/monitor-iframe",
    element: <MonitorIframe />,
  }
]);
