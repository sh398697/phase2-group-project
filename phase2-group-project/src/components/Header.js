import React from "react";
import { NavLink } from "react-router-dom";


function Header({currentUser}) {

  return (
  <div className="w-screen h-[120px] z-10 bg-slate-600 justify-center items-center">
      <div className="justify-center items-center">
        <NavLink to="/" exact><h1 className="text-3xl py-4 font-bold sm:text-4xl text-white mx-auto p-3">Flation Library</h1></NavLink>
        {((currentUser === "") ? (<span className="float-right"></span>) : (<span className="float-right font-bold mx-7">Welcome, {currentUser}</span>))}
        <ul className="container flex h-[120px] z-10 bg-slate-600 items-center justify-center mx-auto">
          <NavLink to="/" exact><li>Home</li></NavLink>
          <NavLink to="/login" exact><li>My Account</li></NavLink>
          <NavLink to="/mybooks" exact><li>My Books</li></NavLink>
          <NavLink to="/newbook" exact><li>New Book Form</li></NavLink>
          <NavLink to="/about" exact><li>About Us</li></NavLink>
       </ul>
      </div>
  </div>
  );
}

export default Header;
