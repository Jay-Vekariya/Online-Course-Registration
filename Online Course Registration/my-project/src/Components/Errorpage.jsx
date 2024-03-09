import React from "react";
import Navbar from "./Navbar";

const Errorpage = () => {
  return (
    <>
      <Navbar />
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <div className="flex items-center justify-center h-screen p-[200px]">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-blue-500 mb-4">404</h1>
            <p className="text-4xl font-bold text-gray-800 mb-8">
              Page not found
            </p>
            <p className="text-3xl font-bold text-gray-700">
              The page you are looking for might have been removed or doesn't
              exist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
