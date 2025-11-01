import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../Logo/Logo";
import Theme from "../Theme/Theme";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrool = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const links = (
    <>
      <li onClick={() => handleScrool("home")}>
        <NavLink>Home</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar backdrop-blur-md z-10 relative top-0 shadow-primary/10 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Theme></Theme>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
