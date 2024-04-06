import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/Img_1.react-js.png";
import img2 from "../assets/img2react.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <header>
        <Navbar />
      </header>
      <div className="p-[100px]">
        <div className="lg:flex  gap-7">
          {/* 1st Course */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl">
            <div className="lg:flex lg:flex-col">
              <div className="lg:shrink-0">
                <img
                  className="h-48 w-full object-cover lg:h-full"
                  src={img1}
                  alt="Modern building architecture"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  React Library of Javascipt
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  The top frontend frameworks for web development are widely
                  favored
                </a>
                <p className="mt-2 text-slate-500">
                  React, a creation of Facebook, has become extremely popular
                  because of its structure based on components, virtual DOM, and
                  its simplicity in crafting engaging user interfaces. It's
                  extensively utilized in both single-page applications and
                  sizable endeavors.
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                onClick={() => navigate("/Onlinecourse")}
                className="border rounded-md m-2 p-2 text-white bg-green-700"
              >
                View Content
              </button>
            </div>
          </div>

          {/* 2nd Course */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl">
            <div className="lg:flex lg:flex-col">
              <div className="lg:shrink-0">
                <img
                  className="h-48 w-full object-cover lg:h-full"
                  src={img2}
                  alt="Modern building architecture"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  React JS
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Most popular frontent framework for web development
                </a>
                <p className="mt-2 text-slate-500">
                  Developed by Facebook, React has gained immense popularity due
                  to its component-based architecture, virtual DOM, and the ease
                  of building interactive user interfaces. It's widely used in
                  single-page applications and large-scale projects.
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                onClick={() => navigate("/Onlinecourse")}
                className="border rounded-md m-2 p-2 text-white bg-green-700"
              >
                View Content
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
