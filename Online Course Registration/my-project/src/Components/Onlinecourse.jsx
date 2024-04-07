import React from "react";
import "./Onlinecourse.css";
import Navbar from "./Navbar";
// import img3 from "../assets/Img_1.react-js.png";
import { useQuiz } from "./HomeContext";

const Onlinecourse = () => {
  const { CourseDetails } = useQuiz();

  return (
    <>
      <Navbar />
      <main>
        {CourseDetails.map((CourseDetail) => (
          <div className="img_1">
            <img id="img-1" src={CourseDetail.thumbnail} alt="" />
            <div className="information">
              <div className="cor_img">
                <img
                  className="thumbnail"
                  src={CourseDetail.thumbnail}
                  alt=""
                />
                <div>
                  <h1 className="text-black">{CourseDetail.title}</h1>
                  <p>
                    <span>Duration :</span>
                    {CourseDetail.duration}
                  </p>
                  <p>
                    <span>Contain :</span>
                    {CourseDetail.Contain}
                  </p>
                  <p>
                    <span>Rating :</span> {CourseDetail.rating}
                  </p>
                  <br />
                  <hr />
                  <br />
                  <button id="enroll">{CourseDetail.enrollButtonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Onlinecourse;
