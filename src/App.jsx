import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import MainRouter from "./MainRouter";



const App = () => {

  return (
    <RouterProvider router={MainRouter}/>
  )
}

export default App
