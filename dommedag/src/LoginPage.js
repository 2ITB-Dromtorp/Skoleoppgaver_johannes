import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export async function LoginUser(username, password, setLogin, navigate) {
    fetch('/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then((response) => response.text())
        .then((response) => {
            if (response.toString() === "success") {
                localStorage.setItem("log", "1");
                setLogin(true);
                navigate("/", { state: username })
            } else {
                console.log("login failed")
            }

        })


}

export const LogContext = createContext();


export function LoginPage() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useContext(LogContext)

    const navigate = useNavigate();

    const handleLogin = async () => {
        await LoginUser(username, password, setIsLoggedIn, navigate);
    };

    return (
        <div id="login_form">
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={handleLogin}>Submit</button>
        </div>
    )
}