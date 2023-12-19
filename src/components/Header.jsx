import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function Header({ isLoggedIn, setIsLoggedIn }) {
    const [signIn, setSignIn] = useState("Log-In");
    const navigate = useNavigate();

    function handleClick() {
        navigate("/login");
    }

    return (
        <header>
            <div id='headerLogo'>
                <p>Welcome to</p>
                <h2>SuperCell</h2>
            </div>
            <div id='headerItems'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/billing">Billing</Link>
                    </li>
                    <li>
                        <Link to="/account" > Account</Link>
                    </li>
                </ul>
            </div>
            <div id='headerBtn'>
                <button onClick={handleClick}>{signIn}</button>
            </div>
        </header>
    )
}

export default Header