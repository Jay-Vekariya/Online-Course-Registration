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
import { QuizProvider } from "./Components/Context/HomeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-ajs042kkdsdozlwv.us.auth0.com"
      clientId="1xcLl91yeHToBhhMRwJZLCQJikLuafjS"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <QuizProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/DisplayQuiz" element={<DisplayQuiz />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </QuizProvider>
    </Auth0Provider>
  </BrowserRouter>
);
