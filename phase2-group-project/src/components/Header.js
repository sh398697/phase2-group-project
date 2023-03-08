import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

  return (
  <div className="">
    <h1 className="w-full text-5xl font-mono font-medium bg-red-700 text-center">Flation Library</h1>
     <ul className="uppercase font-semibold">
      <li className='p-4 border-b border-gray-400'> <NavLink to="/" exact>Home</NavLink></li>
      <li className='p-4 border-b border-gray-400'> <NavLink to="/login" exact>Login</NavLink></li>
      <li className='p-4 border-b border-gray-400'> <NavLink to="/mybooks" exact>My Books</NavLink></li>
      <li className='p-4 border-b border-gray-400'> <NavLink to="/newbook" exact>New Book Form</NavLink></li>
      <li className='p-4 border-b border-gray-400'> <NavLink to="/about" exact>About Us</NavLink></li>
    </ul>
  </div>
  );
}

export default Header;