import React, { FC } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    )
}

export default Root;