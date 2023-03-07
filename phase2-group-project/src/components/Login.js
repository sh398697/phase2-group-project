import React from "react";
import ReactDOM from 'react-dom/client';
import { Route } from "react-router-dom";

function Login({currentUser, setCurrentUser}) {
    
    function handleUserChange(e) {
        setCurrentUser(e.target.value);
    }

    return (
    <div>
        <h1>Login:</h1>
        <input type="text" name="username" placeholder="username" onChange={handleUserChange} ></input>
        <div>
            <span>Logged-In as: </span>
            <span>{currentUser}</span>
        </div>
    </div>
  );
}

export default Login;