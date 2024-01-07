import React from "react";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";

import { Route, Routes } from "react-router-dom";
import Errorpage from "./Components/Errorpage";

const App = () => {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover bg-center"
      style={{
        background:
          "url('https://c8.alamy.com/comp/2BKM15H/e-learning-online-school-vector-background-elearning-online-courses-text-with-school-elements-and-computer-devices-for-webinars-tutorial-2BKM15H.jpg",
      }}
    >
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
};

export default App;

//https://img.freepik.com/premium-vector/online-courses-elearning-vector-background-online-courses-text-white-desk-with-laptop-computer_572288-1763.jpg?w=2000
