import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // Toggle the visibility state
    setComponentVisible(!isComponentVisible);
  };

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
          <ul className="navlist text-black">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>
              <button onClick={handleClick}>FAQ</button>
            </li>
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
