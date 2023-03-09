import React from "react";

function Login({currentUser, setCurrentUser}) {
    
    function handleLogoutClick(e) {
        setCurrentUser("");
    }

    function handleLoginClick(e) {
        setCurrentUser(e.target.username.value);
    }   


    return (
    <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <h1 className="text-2xl">Login:</h1>
        
        { currentUser ? (
            <div>
                <span className="px-2 py-1">Logged-In as: </span>
                <span className="px-2 py-1">{currentUser}  </span>
                <div>
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>) : 
            (
            <form onSubmit={handleLoginClick}>
                <input type="text" name="username" placeholder="Enter username..." id="username" className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"></input>
                <div className="px-2 py-1">
                    <button type="submit">Login</button>
                </div>
            </form>)}
    </div>
  );
}

export default Login;