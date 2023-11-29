import React from "react";
import "./Navigation.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className={click ? "Navbar__column" : "Navbar-flex"}>
        <div className="navbar__logo">
          <h1>Find Your Food</h1>
        </div>

        <Icon
          icon="ci:hamburger-md"
          className="navbar__nav-mobile"
          onClick={handleClick}
        />

        <div className={click ? "navbar__navbar" : "navbar__navbar-mobile"}>
          <ul className={click ? "nav__items-flex" : "nav__items"}>
            <li className="nav__links">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav__links">
              <NavLink to="/partners" activeClassName="active">
                Partners
              </NavLink>
            </li>

            <li className="nav__links">
              <NavLink to="/foodbanks" activeClassName="active">
                Food Banks
              </NavLink>
            </li>

            <li className="nav__links nav__links-donate">
              <NavLink to="/donate" activeClassName="active">
                Donate
              </NavLink>
            </li>

            <li className="nav__links">
              <NavLink to="/register" activeClassName="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;