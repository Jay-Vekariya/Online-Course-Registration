import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const navigate = useNavigate();

  const {
    user,
    loginWithRedirect,
    logout,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const [token, setToken] = useState(null);

  const handleClick = () => {
    // Toggle the visibility state
    setComponentVisible(!isComponentVisible);
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
        localStorage.setItem("token", accessToken); // Save token to localStorage
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage on logout
    logout({ returnTo: window.location.origin });
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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
            <li>
              <button onClick={handleClick}>FAQ</button>
            </li>
          </ul>
          {isAuthenticated && (
            <div className="flex">
              <img
                src={user.picture}
                alt={user.name}
                className="mx-3 h-9 w-9 cursor-pointer rounded-full md:rounded-full"
              />
              <p className="text-black">{user.name}</p>
            </div>
          )}
          {isAuthenticated ? (
            <button
              className="rounded-lg bg-red-600 p-1.5 hover:bg-yellow-400"
              onClick={handleLogout}
            >
              Log Out
            </button>
          ) : (
            <div className="login_button">
              <button onClick={() => navigate("signin")}>Log in</button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
