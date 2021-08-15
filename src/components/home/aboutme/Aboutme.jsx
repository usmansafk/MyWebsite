import React from "react";
import "../aboutme/AboutmeStyle.scss";

const Aboutme = () => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="container">
        <div className="left">
          <h2>
            {" "}
            <span>01</span> About Me
          </h2>

          <p>
            Hello! I'm Usman, a software engineer based in Glasgow, UK who has a
            strong passion for everything tech and building things.
            <br />
            <br />
            Shortly after graduating with a degree in business from Edinburgh
            Business School, I had embarked on a journey to self-teaching myself
            programming and very quickly fell in love with the process of
            problem solving and continuous learning.
            <br />
            <br />
            Over the past two years I have emersed myself in many different
            technologies and contributed in a variety of projects. I now work
            remotely as a <span>Full Stack Developer</span> at <span>QA</span>{" "}
            where I had undergone a Software Academy Bootcamp, to then offer my
            services as consultant for the company.
          </p>
        </div>

        <div className="right">
          <div className="imgContainer">
            <img
              className="me"
              src="resources/UsmanSajid.png"
              alt="Usman Sajid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
