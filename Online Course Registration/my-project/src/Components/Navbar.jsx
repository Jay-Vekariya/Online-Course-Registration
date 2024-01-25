import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <img
              id="logo"
              src="../src/assets/updated-coursherkaro-logo-black.png"
              alt=""
            />
          </div>
          <ul className="navlist">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>FAQ</li>
          </ul>
          <div className="login_button">
            <button onClick={() => navigate("signin")}>Log in</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
