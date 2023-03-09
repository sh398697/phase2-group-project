import React from "react";
import { NavLink } from "react-router-dom";


function Header({currentUser}) {

  return (
  <div className="w-screen h-[120px] z-10 bg-slate-600 justify-center items-center">
      <div className="justify-center items-center">
        <NavLink to="/" exact><h1 className="text-3xl py-4 font-bold sm:text-4xl text-white mx-auto p-3">Flation Library</h1></NavLink>
        {((currentUser === "") ? (<span className="float-right"></span>) : (<span className="float-right font-bold mx-7">Welcome, {currentUser}</span>))}
        <ul className="hidden md:flex justify-center text-white">
          <li> <NavLink to="/" exact>Home</NavLink></li>
          <li> <NavLink to="/login" exact>My Account</NavLink></li>
          <li> <NavLink to="/mybooks" exact>My Books</NavLink></li>
          <li> <NavLink to="/newbook" exact>New Book Form</NavLink></li>
          <li> <NavLink to="/about" exact>About Us</NavLink></li>
       </ul>
      </div>
  </div>
  );
}

export default Header;
