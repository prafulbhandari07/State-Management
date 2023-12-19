import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUserData(data)
    }

    async function loginUser(e) {
        e.preventDefault();
        const filteredItems = userData.users.filter(
            (user) => user.username === username && user.password === password
        );
        console.log(filteredItems)
        if (filteredItems.length) {
            setIsLoggedIn(true)
            navigate("/billing")

        } else {
            setError("*Please enter a valid Username and Password. Don't have one? Get them from : https://dummyjson.com/users")
        }
    }
    if (isLoggedIn) {
        navigate("/billing")
    }

    return (
        <>
            <div id="loginContainer">
                <div id="loginCard">
                    <div>
                        <p>Login to SuperCell to continue</p>
                    </div>

                    <form onSubmit={loginUser}>
                        <label>Username</label>
                        <br></br>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <br></br>
                        <button>Log In</button>
                    </form>
                    <h1>{error}</h1>
                </div>
            </div>
        </>
    );
}

export default Login;