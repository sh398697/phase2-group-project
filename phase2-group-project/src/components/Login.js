import React from "react";
import ReactDOM from 'react-dom/client';
import { Route } from "react-router-dom";

function Login({currentUser, setCurrentUser}) {
    
    function handleUserChange(e) {
        setCurrentUser(e.target.value);
    }

    function handleLogoutClick() {
        setCurrentUser("");
    }

    return (
    <div>
        <h1>Login:</h1>
        
        { currentUser ? (
            <div>
                <span>Logged-In as: </span>
                <span>{currentUser}  </span>
                <div><button onClick={handleLogoutClick}>Logout</button></div>
            </div>) : 
            (<input type="text" name="username" placeholder="username" onChange={handleUserChange}></input>)}
    </div>
  );
}

export default Login;