import React from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Onlinecourse from "./Onlinecourse";
import img1 from "../assets/Img_1.react-js.png";
import img2 from "../assets/img2react.jpg";


const course1Props = {
    title: "React Library of Javascipt",
    duration: "02:00:00",
    contentCount: 10,
    rating: "⭐⭐⭐⭐⭐",
    thumbnail: img1,
    enrollButtonText: "Enroll Now for React.js",
  };

  const course2Props = {
    title: "React JS",
    duration: "01:30:00",
    contentCount: 8,
    rating: "⭐⭐⭐⭐",
    thumbnail: img2,
    enrollButtonText: "Enroll Now for React JS",
  };
  return (
    <>
      <Navbar />
      <Homepage>
        <Onlinecourse course1Props={course1Props} />
      </Homepage>
    </>
  );
}

export default Application;
