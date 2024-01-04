
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <>
    <div className='navbar'>
      <nav className='navbar-container'>
      <h1 className='navbar-logo'>VTH</h1>
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-links">Send inn ticket</Link></li>
          <li className="nav-item"><Link to="/tickets" className="nav-links">Tickets</Link> </li>
          
        </ul>
      </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
