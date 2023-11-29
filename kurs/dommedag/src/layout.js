import logo from './images/dromtorp-logo-no.png';
import { useContext, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import { LogContext } from './LoginPage';
import './App.css';
export default function Layout() {
    const username = useLocation().state
    const [isLogIn, setIsLogIn] = useContext(LogContext);

    return (
        <>
            <nav className="top-bar">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>

                <div to="/login" className="login">
                    {username}
                </div>
                <button onClick={() => {
                    localStorage.setItem("log", "0")
                    setIsLogIn(false);
                }}>
                    logg ut
                </button>
            </nav>
            <Outlet/>
        </>
    )
}