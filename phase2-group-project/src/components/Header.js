import React from "react";
import { NavLink } from "react-router-dom";

function Header() {


  return (
    <div>
          <h1>Book Finder</h1>
            <NavLink 
            to="/login" exact><button>Log In</button>
            </NavLink>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/mybooks" exact>My Books</NavLink>
      <NavLink to="/about" exact>About Us</NavLink>
    </div>
  );
}

export default Header;