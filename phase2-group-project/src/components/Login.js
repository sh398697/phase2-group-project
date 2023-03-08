import React from "react";

function Login({currentUser, setCurrentUser}) {
    
    function handleLogoutClick(e) {
        setCurrentUser("");
    }

    function handleLoginClick(e) {
        setCurrentUser(e.target.username.value);
    }   


    return (
    <div>
        <h1>Login:</h1>
        
        { currentUser ? (
            <div>
                <span>Logged-In as: </span>
                <span>{currentUser}  </span>
                <div>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>) : 
            (
            <form onSubmit={handleLoginClick}>
                <input type="text" name="username" placeholder="username" id="username"></input>
                <button type="submit">Login</button>
            </form>)}
    </div>
  );
}

export default Login;