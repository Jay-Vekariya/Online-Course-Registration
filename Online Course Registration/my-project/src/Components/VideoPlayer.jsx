import React, { useState } from "react";
import Navbar from "./Navbar";
import DisplayQuiz from "../Components/Quiz_WebApp/DisplayQuiz";
import { useParams } from "react-router-dom";
import "./VideoPlayer.css";
import { useQuiz } from "./HomeContext";
const VideoPlayer = () => {
  const { CourseDetails } = useQuiz();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [completedVideos, setCompletedVideos] = useState(Array(7).fill(false));
  const [showQuiz, setShowQuiz] = useState(false);
  const { title, id } = useParams();

  const videoID = CourseDetails.find((course) => course.id === parseInt(id));

  const handleNext = () => {
    if (currentVideoIndex < 6) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (currentVideoIndex === 6) {
      const allVideosCompleted = completedVideos.every(
        (completed) => completed
      );
      setShowQuiz(allVideosCompleted);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleComplete = (index) => {
    const newCompletedVideos = [...completedVideos];
    newCompletedVideos[index] = true;
    setCompletedVideos(newCompletedVideos);

    if (index === currentVideoIndex && index < 6) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (index === 6) {
      setShowQuiz(true); // Display quiz when "Quiz Exam" button is clicked
    }
  };

  return (
    <>
      <Navbar />
      <div className="heading-1">
        <h2 className="mb-0">{title}</h2>
        {showQuiz ? (
          <div>
            <DisplayQuiz />
          </div>
        ) : (
          <div>
            <div className="video-description">
              {videoID ? (
                <>
                  <iframe
                    className="vlc mt-5"
                    width="760"
                    height="500"
                    heading-1
                    src={videoID[`url${currentVideoIndex}`]}
                    controls
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <div className="w-1/3 pt-[3px]">
                    <h3 className="mb-8">{}</h3>
                    <p>{videoID[`description${currentVideoIndex}`]}</p>
                  </div>
                </>
              ) : (
                <p>No video found</p>
              )}
            </div>
            <div className="btns pt-8">
              <div className="btng-1">
                <button
                  className="btn-1"
                  onClick={handlePrevious}
                  disabled={currentVideoIndex === 0}
                >
                  Previous
                </button>
                <button
                  className="btn-2"
                  onClick={handleNext}
                  disabled={currentVideoIndex === 6}
                >
                  Next
                </button>
              </div>
              <div className="btng-2">
                <button
                  className="btn-3"
                  onClick={() => handleComplete(currentVideoIndex)}
                >
                  {currentVideoIndex === 6 ? "Quiz Exam" : "Mark as Complete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
