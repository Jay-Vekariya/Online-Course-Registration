import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuiz } from "./HomeContext";
const URL = "http://localhost:5000/api/auth/register";

const Register = () => {
  const { Userdata, dispatch } = useQuiz();
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch({
      type: "SET_USER_DATA",
      payload: { ...Userdata, [name]: value },
    });
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("On Submit button", Userdata);

    //Connection with Database..
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Userdata),
      });
      console.log("From register page", response);
      if (response.ok) {
        alert("Registration Successfull");
        navigate("/");
        dispatch({
          type: "SET_USER_DATA",
          payload: {
            Username: "",
            Email: "",
            Password: "",
            ConfirmPasswrd: "",
          },
        });
      }
    } catch (error) {
      console.log("Register: ", error);
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
          SIGN UP
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="relative my-4">
            <input
              type="text"
              value={Userdata?.Username}
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
              Username
            </label>
          </div>
          {/* Your Email */}
          <div className="relative my-4">
            <input
              type="email"
              value={Userdata?.Email}
              name="Email"
              onChange={HandleLogin}
              className="block text-md  w-72 pt-2 hover:pt-4 duration-300 outline-none py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              required
              autoComplete="off"
            />
            <label
              htmlFor="Email"
              className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
          </div>
          {/* Password */}
          <div className="relative my-4">
            <input
              type="Password"
              value={Userdata?.Password}
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
              Create Password
            </label>
          </div>
          {/* ConfirmPasswrd */}
          <div className="relative my-4">
            <input
              type="Password"
              value={Userdata?.ConfirmPasswrd}
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
              <NavLink to="/SignIn" className="text-blue-300 ml-2.5">
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
