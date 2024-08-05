import React, { FC, useState } from "react";
import "styles/nav.css";

const NavBar: FC = () => {
  const [showNav, setShowNav] = useState<Boolean>();

  return (
    <nav>
      <svg onClick={() => setShowNav(!showNav)} className="toggle-nav" fill="rgb(216, 216, 216)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      <ul className={showNav ? "display nav-btn-container" : "nav-btn-container"}>
        <li className="nav-btn">Home</li>
        <li className="nav-btn">About Me</li>
        <li className="nav-btn">Experience</li>
        <li className="nav-btn">Projects</li>
        <li className="nav-btn">Contact Me</li>
      </ul>

    </nav>
  );
};

export default NavBar;
