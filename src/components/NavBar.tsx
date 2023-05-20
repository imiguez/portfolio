import React, { FC } from "react"
import "styles/nav.css";


const NavBar: FC = () => {

    return (
        <nav>
            <button className="nav-btn">Home</button>
            <button className="nav-btn">About Me</button>
            <button className="nav-btn">Testing</button>
        </nav>
    )
}

export default NavBar;