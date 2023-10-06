import React from 'react';
import logo from "./logo.png";
import "../index.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="CodeCraftPro" />
        <div class="copyright">
            <p>&copy;created by Harsha</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
