import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/images12.jpeg";
import { NavLink } from "react-router-dom";

const Homepage = () => {
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
                  Company retreats
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Incredible accommodation for your team
                </a>
                <p className="mt-2 text-slate-500">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <button className="border rounded-md m-2 p-2 text-white bg-green-700">
                <NavLink to="DisplayQuiz"> Final Exam </NavLink>
              </button>
            </div>
          </div>

          {/* 2nd Course */}
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
                  Company retreats
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Incredible accommodation for your team
                </a>
                <p className="mt-2 text-slate-500">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <button className="border rounded-md m-2 p-2 text-white bg-green-700">
                <NavLink to="DisplayQuiz"> Final Exam </NavLink>
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
