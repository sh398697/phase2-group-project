import React from "react";

function Login({currentUser, setCurrentUser}) {
    
    function handleLogoutClick(e) {
        setCurrentUser("");
    }

    function handleLoginClick(e) {
        setCurrentUser(e.target.username.value);
    }   


    return (
    <div className="mx-auto my-10 bg-gray-200 px-10 py-10 max-w-sm rounded shadow-lg">
        <h1 className="font-bold">Login:</h1>
        
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
                <input type="text" name="username" placeholder="Enter username..." id="username" className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"></input>
                <button type="submit">Login</button>
            </form>)}
    </div>
  );
}

export default Login;