import { RouterProvider } from "react-router-dom";
import MainRouter from "../MainRouter";
import React, { FC } from "react";

const App: FC = () => {

  return (
    <>
        <RouterProvider router={MainRouter}/>
    </>
  )
}

export default App
