import React from "react";
import "./Onlinecourse.css";
import Navbar from "./Navbar";
import img3 from "../assets/Img_1.react-js.png";
const Onlinecourse = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="img_1">
          <img id="img-1" src={img3} alt="" />
          <div className="information">
            <div className="cor_img">
              <img className="thumbnail" src={img3} alt="" />
              <div>
                <h1 className="text-black">React.js</h1>
                <p>
                  <span>Duration :</span> 02:00:00{" "}
                </p>
                <p>
                  <span>Contain :</span> 10 videos, 05 Notes{" "}
                </p>
                <p>
                  <span>Rating :</span> ⭐⭐⭐⭐⭐
                </p>
                <br />
                <hr />
                <br />
                <button id="enroll">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Onlinecourse;
