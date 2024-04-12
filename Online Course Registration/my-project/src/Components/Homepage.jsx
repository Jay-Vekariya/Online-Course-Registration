import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "./HomeContext";
import "./Homepage.css";

const Homepage = () => {
  const { Courses, dispatch } = useQuiz();
  const navigate = useNavigate();

  const handleCoursesDetails = (cors) => {
    dispatch({
      type: "Courses",
      payload: [...Courses, ...cors],
      payloadDisplay: [...cors],
      // payloadFilterValue: [...filteredValue],
    });
    navigate("Onlinecourse");
  };

  console.log("qewjdash : ", Courses);

  return (
    <div className="bg-white">
      <header>
        <Navbar />
      </header>

      <div className="cores">
        {Courses.map((cors) => (
          <div key={cors.id} className="pt-[120px] p-[50px]">
            <div className="cards">
              {/* 1st Course */}
              <div className="max-w-[400px] bg-white rounded-xl shadow-md overflow-hidden">
                <div className="lg:flex lg:flex-col">
                  <div className="lg:shrink-0">
                    <img
                      className="h-48 w-full object-cover lg:h-full"
                      src={cors.thumbnail}
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {cors.title}
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      {cors.About}
                    </a>
                    {/* <p className="mt-2 text-slate-500">{cors.information}</p> */}
                  </div>
                </div>
                <div className="flex justify-center ">
                  <button
                    onClick={(e) => {
                      handleCoursesDetails([cors]);
                      e.stopPropagation();
                    }}
                    className="border rounded-md m-2 p-2 text-white bg-green-700"
                  >
                    View Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <main>
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
