import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Header() {


  return (
    <div>
          <h1>Flatiron Book Finder  
            <NavLink 
            to="/login" exact><button>Log In</button>
            </NavLink>
          </h1>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/mybooks" exact>My Books</NavLink>
      <NavLink to="/about" exact>About Us</NavLink>
    </div>
  );
}

export default Header;