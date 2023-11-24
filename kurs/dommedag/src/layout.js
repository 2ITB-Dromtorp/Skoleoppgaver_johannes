import logo from './images/dromtorp-logo-no.png';
import login from './images/ppnb.png';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <nav className="top-bar">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>

                <Link to="/login" className="login">
                    <img src={login} alt="Login" className="login-image" />
                </Link>
            </nav>
            <Outlet/>
        </>
    )
}