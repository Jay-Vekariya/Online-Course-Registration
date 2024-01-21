import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Register from "./Components/Register.jsx";
import Homepage from "./Components/Homepage.jsx";
import Errorpage from "./Components/Errorpage.jsx";
import SignIn from "./Components/SignIn.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-ajs042kkdsdozlwv.us.auth0.com"
      clientId="1xcLl91yeHToBhhMRwJZLCQJikLuafjS"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </App>
    </Auth0Provider>
  </BrowserRouter>
);
