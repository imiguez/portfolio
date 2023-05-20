import React, { FC } from "react"
import { Link } from "react-router-dom"


const NavBar: FC = () => {


    return (
        <nav className="bg-principal" style={{height: "10vh"}}>

            <Link to={"/"} className="color-principal">Home</Link>
            <Link to={"/about"}>About Me</Link>
            <Link to={"/testing"}>Testing</Link>
        </nav>
    )
}

export default NavBar;