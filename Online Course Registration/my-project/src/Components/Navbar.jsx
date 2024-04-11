import React, { useState } from "react";
// import axios from "axios"; // Don't forget to import axios
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { useQuiz } from "./HomeContext";

const Navbar = () => {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated, getAccessTokenSilently } = useAuth0();
  // const { SearchCourse } = useQuiz();
  // const [token, setToken] = useState(null);
  // const [userId, setUserId] = useState(null); // Added userId state

  const handleClick = () => {
    // Toggle the visibility state
    setComponentVisible(!isComponentVisible);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (isAuthenticated) {
  //         // Fetch access token
  //         const accessToken = await getAccessTokenSilently();
  //         setToken(accessToken);
  //         localStorage.setItem("token", accessToken); // Save token to localStorage

  //         // Fetch user data
  //         // const response = await axios.get(
  //         //   `http://localhost:3000/users/${userId}`,
  //         //   {
  //         //     headers: {
  //         //       Authorization: `Bearer ${accessToken}`, // Attach token to request headers
  //         //     },
  //         //   }
  //         // );
  //         // setUserId(response.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [isAuthenticated, getAccessTokenSilently, userId]); // Added userId to dependency array

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
            {/* <li>
              <select
                // onChange={(e) => {
                //   SearchCourse(e.target.value);
                // }}
                className="drop text-semibold px-3 cursor-pointer text-black"
              >
                <option>Sort by</option>
                <option>Web</option>
                <option>App</option>
                <option>Development</option>
              </select>
            </li> */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
            {/* <p className="text-black">something: {userId.name}</p>{" "} */}
            {/* Display user's name */}
            <li>
              <button onClick={handleClick}>FAQ</button>
            </li>
            {/* <li>
              <input
                id="search"
                type="text"
                placeholder="Search here.."
                // onChange={(e) => SearchCourse(e.target.value)}
                className="duration-400 w-28 py-1 text-center text-black transition-all sm:w-64  "
              />
            </li> */}
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
