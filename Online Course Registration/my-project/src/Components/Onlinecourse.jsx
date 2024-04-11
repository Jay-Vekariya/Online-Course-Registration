import React from "react";
import "./Onlinecourse.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "./HomeContext";

const Onlinecourse = () => {
  const { CourseDetails, dispatch } = useQuiz();

  const navigate = useNavigate();

  const handleVideoInput = (EnrollCourse) => {
    dispatch({
      type: "Courses",
      payloadDisplay: [...CourseDetails, EnrollCourse],
    });
    // navigate("Onlinecourse");
  };

  return (
    <>
      <Navbar />
      <main>
        {CourseDetails.map((EnrollCourse) => (
          <div className="img_1">
            <img id="img-1" src={EnrollCourse.thumbnail} alt="" />
            <div className="information">
              <div className="cor_img">
                <img
                  className="thumbnail"
                  src={EnrollCourse.thumbnail}
                  alt=""
                />
                <div className="ins">
                  <h1 className="text-black">{EnrollCourse.title}</h1>
                  <p>
                    <span>Duration :</span>
                    {EnrollCourse.duration}
                  </p>
                  <p>
                    <span>Contain :</span>
                    {EnrollCourse.Contain}
                  </p>
                  <p>
                    <span>Rating :</span> {EnrollCourse.rating}
                  </p>
                  <br />
                  <hr />
                  <br />
                  <button
                    id="enroll"
                    onClick={(e) => {
                      handleVideoInput([EnrollCourse]);
                      navigate(
                        `/VideoPlayer/${EnrollCourse.title}/${EnrollCourse.id}`
                      );
                    }}
                  >
                    {EnrollCourse.enrollButtonText}
                  </button>
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
