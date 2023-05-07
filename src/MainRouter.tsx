import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";


const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home></Home>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
]);

export default MainRouter;