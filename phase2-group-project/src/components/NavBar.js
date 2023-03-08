import React from "react";
import ReactDOM from "react-dom/client";
import {NavLink} from "react-router-dom";


function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
      >
        Home Page
      </NavLink>
      <NavLink
        to="/about"
        exact
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
      >
        Login
      </NavLink>
    </div>
  );
}


export default NavBar;