import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <p>logo</p>
          </div>
          <ul className="navlist">
            <li>home</li>
            <li>about</li>
            <li>faq</li>
          </ul>
          <div className="login_button">
            <button>Log in</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
