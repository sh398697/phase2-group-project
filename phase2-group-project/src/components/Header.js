import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Book Finder Header</h1>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
      <NavLink to="/mybooks" exact>My Books</NavLink>
      <NavLink to="/about" exact>About Us</NavLink>
    </div>
  );
}

export default Header;