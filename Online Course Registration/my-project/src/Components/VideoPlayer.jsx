import React, { useRef, useState } from "react";
import video from "./passwordVideo.mp4"; // Import your video file

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <video ref={videoRef} className="w-full" src={video} controls></video>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
