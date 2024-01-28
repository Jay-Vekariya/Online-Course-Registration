import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../App";
const URL = "http://localhost:5000/api/auth/signin";

const SignIn = () => {
  const { Logindata, setlogindata } = useAuth();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setlogindata({
      ...Logindata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Logindata),
      });
      console.log("from Login form", Logindata);

      if (response.ok) {
        alert("Login Successful");
        setlogindata({ Email: "", Password: "" });
      }
      // else {
      //   alert("Invalid Credential");
      //   console.log("Invalid Credential");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="text-black h-[100vh] flex justify-center items-center bg-cover bg-center"
      style={{
        background:
          "url('https://c8.alamy.com/comp/2BKM15H/e-learning-online-school-vector-background-elearning-online-courses-text-with-school-elements-and-computer-devices-for-webinars-tutorial-2BKM15H.jpg",
      }}
    >
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          SIGN IN
        </h1>
        <form onClick={handleSubmit}>
          <div className="relative my-4">
            <input
              type="email"
              name="Email"
              value={Logindata.Email}
              onChange={handleLogin}
              className="block w-72 pt-2 hover:pt-4 duration-300 outline-none  py-2.3 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              required
              autoComplete="off"
            />
            <label
              htmlFor="Username"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="Password"
              name="Password"
              value={Logindata.Password}
              onChange={handleLogin}
              className="block w-72 pt-2 hover:pt-4 duration-300 outline-none py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              required
              autoComplete="off"
            />
            <label
              htmlFor="Password"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              {/* <input type="checkbox" required />
              <label htmlFor="Remember Me">Remember Me</label> */}
            </div>
            <NavLink className="text-blue-500 hover:text-blue-700">
              Forgot Password?
            </NavLink>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              New Here?
              <NavLink to="/Register" className="text-blue-300 ml-2.5">
                Create an Account
              </NavLink>
            </span>
            <br />
            <span className="w-full m-2  flex justify-center">or</span>
          </div>
        </form>
        <button
          onClick={() => loginWithRedirect()}
          className="flex justify-center ml-0 items-left w-full text-[18px] items-center  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-1 transition-colors duration-300"
        >
          <img
            src="../src/assets/Google.png"
            className="h-9 w-10 rounded-full flex mr-3"
            alt="Google Image"
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
