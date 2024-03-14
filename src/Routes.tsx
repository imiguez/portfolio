import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import React from "react";
import App from "./App";
import { MonitorIframe } from "./pages/MonitorIframe";
import LoadingMessage from "./pages/LoadingMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: []
  },
  {
    path: "/monitor-iframe",
    element: <MonitorIframe />,
  },
]);
