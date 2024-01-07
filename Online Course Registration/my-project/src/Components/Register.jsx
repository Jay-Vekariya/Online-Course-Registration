import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  // useState hook
  const [userdata, Setuserdata] = useState({
    Username: "",
    Password: "",
    ConfirmPasswrd: "",
  });

  // handing the user form data
  const HandleLogin = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    Setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(userdata);
  };

  return (
    <div>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          SIGN UP
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="email"
              value={userdata.Username}
              name="Username"
              onChange={HandleLogin}
              className="block text-md  w-72 pt-2 hover:pt-4 duration-300 outline-none py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
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
              value={userdata.Password}
              name="Password"
              onChange={HandleLogin}
              className="block w-72 pt-2 hover:pt-4 duration-300 outline-none py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              required
              autoComplete="off"
            />
            <label
              htmlFor="password"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="Password"
              value={userdata.ConfirmPasswrd}
              name="ConfirmPasswrd"
              onChange={HandleLogin}
              className="block w-72 pt-2 hover:pt-4 duration-300 outline-none py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              required
              autoComplete="off"
            />
            <label
              htmlFor="ConfirmPasswrd"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            type="submit"
          >
            Register Now
          </button>
          <div>
            <span className="m-4">
              Already Create An Account?
              <NavLink to="/" className="text-blue-300 ml-2.5">
                Login
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
