import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DisplayQuiz from "./Components/Quiz_WebApp/DisplayQuiz.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Register from "./Components/Register.jsx";
import Homepage from "./Components/Homepage.jsx";
import Errorpage from "./Components/Errorpage.jsx";
import SignIn from "./Components/SignIn.jsx";
import { QuizProvider } from "./Components/HomeContext.jsx";
import VideoPlayer from "./Components/VideoPlayer.jsx";
import Onlinecourse from "./Components/Onlinecourse.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuizProvider>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-qtx0cvuzkawxwnd3.us.auth0.com"
        clientId="zCWv0SMMYhyzpU3m55TfQxYomukdmVbn"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/DisplayQuiz" element={<DisplayQuiz />} />
          <Route path="/VideoPlayer/:title/:id" element={<VideoPlayer />} />
          <Route path="/Onlinecourse" element={<Onlinecourse />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </QuizProvider>
);
